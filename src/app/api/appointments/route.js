import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";
import Appointment from "@/models/Appointment";

// ১. নতুন অ্যাপয়েন্টমেন্ট তৈরি করার জন্য (POST)
export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    
    // Vercel মিনিফায়ার ক্যাশ ট্রিক
    const TargetModel = mongoose.models.Appointment || Appointment;
    
    // ডাটাবেজে অ্যাপয়েন্টমেন্ট তৈরি
    const appointment = await TargetModel.create(body);
    
    return NextResponse.json({ success: true, data: appointment }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 });
  }
}

// ২. সব অ্যাপয়েন্টমেন্ট গেট এবং ডক্টর নাম দিয়ে সার্চ করার জন্য (GET)
export async function GET(request) {
  try {
    await dbConnect();
    
    // URL থেকে সার্চ কুয়েরি (Query Parameter) নেওয়ার জন্য
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") || "";
    
    const TargetModel = mongoose.models.Appointment || Appointment;
    
    let query = {};
    if (search) {
      // রিকোয়ারমেন্ট অনুযায়ী ডক্টর নামের ওপর Case-Insensitive (i) রেগুলার এক্সপ্রেশন সার্চ
      query.doctorName = { $regex: search, $options: "i" };
    }
    
    // ফিল্টার অনুযায়ী ডেটা খোঁজা এবং doctorId পপুলেট করা
    const appointments = await TargetModel.find(query).populate("doctorId");
    
    return NextResponse.json({ success: true, data: appointments }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}