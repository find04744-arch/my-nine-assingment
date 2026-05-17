import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Appointment from "@/models/Appointment";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // ডাটাবেজে অ্যাপয়েন্টমেন্ট তৈরি
    const appointment = await Appointment.create(body);
    
    return NextResponse.json({ success: true, data: appointment }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    
    // পপুলেটসহ অ্যাপয়েন্টমেন্ট ডেটা ফেচ
    const appointments = await Appointment.find({}).populate("doctorId");
    
    return NextResponse.json({ success: true, data: appointments }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}