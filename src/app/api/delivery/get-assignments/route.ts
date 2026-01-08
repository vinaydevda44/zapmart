import { auth } from "@/auth";
import connectDb from "@/lib/db";
import DeliveryAssignment from "@/models/deliveryAssignment.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    const session = await auth();
    const assignment = await DeliveryAssignment.find({
      broadcastedTo: session?.user?.id,
      status: "broadcasted",
    }).populate("order");

    return NextResponse.json(
      {
        assignment,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({
        message:`get assignment error ${error}`},
        {status:500}
    )
  }
}
