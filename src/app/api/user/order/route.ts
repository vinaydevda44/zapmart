import connectDb from "@/lib/db";
import Order from "@/models/order.model";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDb();
    const body = await req.json();

    const { userId, items, paymentMethod, totalAmount, address } = body;

    if (
      !userId ||
      !paymentMethod ||
      totalAmount === undefined ||
      totalAmount === null ||
      !address ||
      !items
    ) {
      return NextResponse.json(
        { message: "please send all fields correctly" },
        { status: 400 }
      );
    }

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 400,
        }
      );
    }

    const newOrder = await Order.create({
      user: userId,
      items,
      paymentMethod,
      totalAmount,
      address,
    });

    return NextResponse.json(newOrder, {
      status: 201,
    });
  } catch (error: any) {
    console.error("ORDER API ERROR 👉", error);

    return NextResponse.json(
      {
        message: "Place order failed",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
