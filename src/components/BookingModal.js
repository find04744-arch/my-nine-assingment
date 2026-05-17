"use client";
import { X } from 'lucide-react';

export default function BookingModal({ doctor, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে মঙ্গোডিবি অপারেশন কানেক্ট হবে, টোস্ট মেসেজ ফায়ার হবে।
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#0f0918] border-2 border-[#36f9f6]/50 rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(54,249,246,0.3)] space-y-6">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-[#ff7edb] transition-colors">
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-1">
          <h2 className="text-2xl font-black text-white">Confirm Appointment</h2>
          <p className="text-xs text-[#36f9f6] font-bold uppercase font-mono">With {doctor.name}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm font-semibold">
          <div className="space-y-1.5">
            <label className="text-gray-300 text-xs uppercase tracking-wider">Patient Full Name</label>
            <input type="text" required placeholder="Enter patient name" className="w-full bg-[#1a1025] border border-[#b534e6]/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-gray-300 text-xs uppercase tracking-wider">Gender</label>
              <select className="w-full bg-[#1a1025] border border-[#b534e6]/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-gray-300 text-xs uppercase tracking-wider">Phone Number</label>
              <input type="tel" required placeholder="e.g. 01712345678" className="w-full bg-[#1a1025] border border-[#b534e6]/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-gray-300 text-xs uppercase tracking-wider">Appointment Date</label>
              <input type="date" required className="w-full bg-[#1a1025] border border-[#b534e6]/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]" />
            </div>
            <div className="space-y-1.5">
              <label className="text-gray-300 text-xs uppercase tracking-wider">Preferred Time</label>
              <select className="w-full bg-[#1a1025] border border-[#b534e6]/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]">
                {doctor.availability.map((time, i) => <option key={i} value={time}>{time}</option>)}
              </select>
            </div>
          </div>

          <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#36f9f6] to-[#b534e6] text-slate-950 font-black tracking-widest uppercase rounded-xl shadow-lg hover:scale-[1.01] transition-transform">
            Confirm & Save Booking
          </button>
        </form>
      </div>
    </div>
  );
}