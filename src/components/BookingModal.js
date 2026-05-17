"use client";
import { useState } from "react";
import { X, Calendar, Clock, User, Mail } from "lucide-react";

export default function BookingModal({ doctor, onClose }) {
  const [formData, setFormData] = useState({ patientName: "", email: "", date: "", slot: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.slot) return alert("Please select a time slot");
    
    setSubmitting(true);
    
    const payload = {
      doctorId: doctor._id,
      doctorName: doctor.name,
      patientName: formData.patientName,
      email: formData.email,
      date: formData.date,
      slot: formData.slot,
    };

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.res?.json() || await res.json();
      if (json.success) {
        alert("Appointment Secured & Saved in MongoDB successfully!");
        onClose();
      } else {
        alert("Server Error: " + json.error);
      }
    } catch (err) {
      console.error(err);
      alert("Network Error, try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="bg-[#0f0918] border-2 border-[#b534e6] w-full max-w-md rounded-2xl p-6 relative text-white shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white"><X className="w-5 h-5" /></button>
        
        <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#36f9f6] to-[#ff7edb] uppercase tracking-wide">Confirm Booking</h3>
        <p className="text-xs text-gray-400 mt-0.5">With {doctor.name}</p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-4 font-semibold text-sm">
          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Patient Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
              <input required type="text" placeholder="Mahmudul Hasan" className="w-full bg-[#1a1025] border border-[#b534e6]/30 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]" onChange={e => setFormData({...formData, patientName: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
              <input required type="email" placeholder="mahmudul@example.com" className="w-full bg-[#1a1025] border border-[#b534e6]/30 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]" onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Preferred Date</label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
              <input required type="date" className="w-full bg-[#1a1025] border border-[#b534e6]/30 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]" onChange={e => setFormData({...formData, date: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Select Time Slot</label>
            <div className="grid grid-cols-1 gap-2 max-h-24 overflow-y-auto font-mono text-xs text-center">
              {doctor.availability?.map((time) => (
                <button key={time} type="button" className={`py-2 px-3 border rounded-xl transition-all ${formData.slot === time ? "bg-[#36f9f6] text-black border-[#36f9f6] font-bold shadow-[0_0_10px_#36f9f6]" : "bg-[#1a1025] border-[#b534e6]/30 text-gray-300 hover:border-[#ff7edb]"}`} onClick={() => setFormData({ ...formData, slot: time })}>{time}</button>
              ))}
            </div>
          </div>

          <button disabled={submitting} type="submit" className="w-full py-3.5 mt-2 bg-gradient-to-r from-[#b534e6] to-blue-600 border border-[#36f9f6]/30 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:scale-[1.01] transition-transform shadow-md">
            {submitting ? "Processing Node Sync..." : "Transmit Secure Booking"}
          </button>
        </form>
      </div>
    </div>
  );
}