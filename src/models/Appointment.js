import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    userEmail: { type: String, required: true },
    doctorName: { type: String, required: true },
    patientName: { type: String, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    appointmentDate: { type: String, required: true },
    appointmentTime: { type: String, required: true },
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" }, 
  },
  { timestamps: true }
);

const Appointment = mongoose.models.Appointment || mongoose.model("Appointment", AppointmentSchema);
export default Appointment;