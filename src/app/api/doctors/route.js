import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import DoctorModel from "@/models/Doctor";

export async function GET() {
  try {
    await dbConnect();
    
    // প্রোডাকশন বিল্ডের জন্য সেফ-গার্ড হ্যান্ডলিং
    const Doctor = DoctorModel.default || DoctorModel;
    (Doctor.schema); // মঙ্গুজ কম্পাইল ফোর্স করার জন্য ট্রিগার
    const doctors = await Doctor.find({});
    
    return NextResponse.json({ success: true, data: doctors }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // প্রোডাকশন বিল্ডের জন্য সেফ-গার্ড হ্যান্ডলিং
    const Doctor = DoctorModel.default || DoctorModel;
    const newDoctor = await Doctor.create(body);
    
    return NextResponse.json({ success: true, data: newDoctor }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}