import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";
import Appointment from "@/models/Appointment";

// অ্যাপয়েন্টমেন্ট আপডেট করার জন্য (PUT/PATCH)
export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    const body = await request.json();
    
    const TargetModel = mongoose.models.Appointment || Appointment;
    
    // রিকোয়ারমেন্ট অনুযায়ী ডক্টর ইনফো এবং ইউজার ইমেইল রিড-অনলি থাকবে, তাই সেগুলো বাদ দিয়ে আপডেট হবে
    const updatedAppointment = await TargetModel.findByIdAndUpdate(
      id,
      {
        patientName: body.patientName,
        gender: body.gender,
        phone: body.phone,
        appointmentDate: body.appointmentDate,
        appointmentTime: body.appointmentTime
      },
      { new: true }
    );
    
    return NextResponse.json({ success: true, data: updatedAppointment });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// অ্যাপয়েন্টমেন্ট ডিলিট করার জন্য
export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const { id } = params;
    
    const TargetModel = mongoose.models.Appointment || Appointment;
    await TargetModel.findByIdAndDelete(id);
    
    return NextResponse.json({ success: true, message: "Appointment deleted successfully!" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}