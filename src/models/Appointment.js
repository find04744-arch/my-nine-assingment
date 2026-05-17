import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    patientName: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    timeSlot: { type: String, required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  },
  { timestamps: true }
);


const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);

export default Appointment;