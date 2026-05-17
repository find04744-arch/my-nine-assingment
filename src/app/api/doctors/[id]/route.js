import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Doctor from "@/models/Doctor";

export async function GET(request, { params }) {
  try {
    await dbConnect();
    
    
    const unwrappedParams = await params;
    const { id } = unwrappedParams;

    const doctor = await Doctor.findById(id);

    if (!doctor) {
      return NextResponse.json({ success: false, message: "Doctor not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: doctor }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}