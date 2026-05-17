import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Appointment from "@/models/Appointment";

// POST: নতুন অ্যাপয়েন্টমেন্ট বুকিং ডাটাবেজে সেভ করা
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // ডাটাবেজে অ্যাপয়েন্টমেন্ট রেকর্ড ক্রিয়েট করা
    const appointment = await Appointment.create(body);
    
    return NextResponse.json({ success: true, data: appointment }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// GET: বুকিং করা সব অ্যাপয়েন্টমেন্টের লিস্ট দেখা (ড্যাশবোর্ডের জন্য)
export async function GET() {
  try {
    await dbConnect();
    const appointments = await Appointment.find({}).populate("doctorId");
    return NextResponse.json({ success: true, data: appointments }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}