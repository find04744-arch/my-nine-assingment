import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import AppointmentModel from "@/models/Appointment";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // প্রোডাকশন বিল্ডের জন্য সেফ-গার্ড হ্যান্ডলিং
    const Appointment = AppointmentModel.default || AppointmentModel;
    const appointment = await Appointment.create(body);
    
    return NextResponse.json({ success: true, data: appointment }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    
    // প্রোডাকশন বিল্ডের জন্য সেফ-গার্ড হ্যান্ডলিং
    const Appointment = AppointmentModel.default || AppointmentModel;
    const appointments = await Appointment.find({}).populate("doctorId");
    
    return NextResponse.json({ success: true, data: appointments }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}