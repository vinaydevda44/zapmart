import { auth } from "@/auth";
import connectDb from "@/lib/db";
import DeliveryAssignment from "@/models/deliveryAssignment.model";
import Order from "@/models/order.model";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import emitEventHandler from "@/lib/emitEventHandler";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDb();

    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "invalid assignment id" },
        { status: 400 }
      );
    }

    const session = await auth();
    const deliveryBoyId = session?.user?.id;

    if (!deliveryBoyId) {
      return NextResponse.json({ message: "unauthorized" }, { status: 401 });
    }

    const deliveryBoyObjectId = new mongoose.Types.ObjectId(deliveryBoyId);



    const assignment = await DeliveryAssignment.findOne({
      _id: id,
      status: "broadcasted",
      broadcastedTo: { $in: [deliveryBoyObjectId] },
    });

    if (!assignment) {
      return NextResponse.json(
        { message: "assignment not found" },
        { status: 400 }
      );
    }

    const order = await Order.findById(assignment.order);

    if (!order) {
      return NextResponse.json(
        { message: "order not found" },
        { status: 400 }
      );
    }

    if (order.assignDeliveryBoy) {
      return NextResponse.json(
        { message: "order already assigned" },
        { status: 400 }
      );
    }

    const alreadyAssigned = await DeliveryAssignment.findOne({
      assignedTo: deliveryBoyObjectId,
      status: "assigned",
    });

    if (alreadyAssigned) {
      return NextResponse.json(
        { message: "delivery boy already has active order" },
        { status: 400 }
      );
    }

    assignment.assignedTo = deliveryBoyObjectId;
    assignment.status = "assigned";
    assignment.acceptedAt = new Date();
    await assignment.save();

    order.assignDeliveryBoy = deliveryBoyObjectId;
    order.status = "out of delivery";
    await order.save();

    await order.populate("assignDeliveryBoy")

    await emitEventHandler("order-assigned",{
      orderId:order._id,
      assignDeliveryBoy:order.assignDeliveryBoy
    })

    await DeliveryAssignment.updateMany(
      {
        _id: { $ne: assignment._id },
        broadcastedTo: deliveryBoyObjectId,
        status: "broadcasted",
      },
      { $pull: { broadcastedTo: deliveryBoyObjectId } }
    );

    return NextResponse.json(
      { message: "order accepted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "accept assignment failed" },
      { status: 500 }
    );
  }
}
