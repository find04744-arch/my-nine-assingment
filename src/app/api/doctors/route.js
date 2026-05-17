import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Doctor from "@/models/Doctor";

// GET: সব ডক্টরদের ডাটাবেজ থেকে রিড করা
export async function GET() {
  try {
    await dbConnect();
    const doctors = await Doctor.find({});
    return NextResponse.json({ success: true, data: doctors }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST: ডাটাবেজে নতুন ডক্টর অ্যাড করার ব্যাকআপ অপশন (টেস্টিং এর জন্য)
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const newDoctor = await Doctor.create(body);
    return NextResponse.json({ success: true, data: newDoctor }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}