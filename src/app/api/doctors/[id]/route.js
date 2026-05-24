import { dbConnect } from "@/lib/dbConnect";
import Doctor from "@/models/Doctor";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        
        await dbConnect();

       
        const { id } = await params; 

      
        const doctor = await Doctor.findOne({
            $or: [{ _id: id }, { id: id }]
        });

        
        if (!doctor) {
            return NextResponse.json(
                { message: "Doctor not found!" },
                { status: 404 }
            );
        }

       
        return NextResponse.json(doctor, { status: 205 });

    } catch (error) {
       
        return NextResponse.json(
            { message: "Failed to fetch doctor details", error: error.message },
            { status: 500 }
        );
    }
}