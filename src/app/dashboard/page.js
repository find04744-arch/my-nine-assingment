"use client";
import { useState } from 'react';
import { Calendar, User, FileEdit, Trash2, ShieldAlert } from 'lucide-react';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('bookings');

  // ডেমো বুকিং ডাটা
  const bookings = [
    { id: "b1", doctorName: "Dr. Sarah Al-Mehmood", specialty: "Cardiologist", patientName: "Rahim Uddin", gender: "Male", phone: "01712345678", appointmentDate: "2026-05-12", appointmentTime: "10:30 AM" }
  ];

  return (
    <div className="min-h-screen bg-[#1a1025] text-white pt-24 pb-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* ড্যাশবোর্ড সাইডবার নেভিগেশন */}
        <div className="bg-[#0f0918]/90 border border-[#b534e6]/40 p-6 rounded-2xl flex flex-col space-y-3 h-fit">
          <button 
            onClick={() => setActiveTab('bookings')}
            className={`w-full px-4 py-3 rounded-xl flex items-center space-x-3 text-sm font-black tracking-wider uppercase transition-all duration-300 ${activeTab === 'bookings' ? 'bg-[#b534e6] text-white shadow-lg shadow-[#b534e6]/30' : 'text-gray-300 hover:bg-[#1a1025]'}`}
          >
            <Calendar className="w-4 h-4" />
            <span>My Bookings</span>
          </button>
          <button 
            onClick={() => setActiveTab('profile')}
            className={`w-full px-4 py-3 rounded-xl flex items-center space-x-3 text-sm font-black tracking-wider uppercase transition-all duration-300 ${activeTab === 'profile' ? 'bg-[#b534e6] text-white shadow-lg shadow-[#b534e6]/30' : 'text-gray-300 hover:bg-[#1a1025]'}`}
          >
            <User className="w-4 h-4" />
            <span>My Profile</span>
          </button>
        </div>

        {/* ড্যাশবোর্ড কন্টেন্ট এরিয়া */}
        <div className="md:col-span-3 bg-[#0f0918]/60 border border-[#b534e6]/30 p-6 md:p-8 rounded-2xl backdrop-blur-md">
          
          {/* TAB 1: MY BOOKINGS */}
          {activeTab === 'bookings' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black tracking-tight border-b border-[#b534e6]/20 pb-3">My Bookings</h2>
              {bookings.map((book) => (
                <div key={book.id} className="p-6 bg-[#1a1025] border-l-4 border-[#36f9f6] rounded-r-xl border border-y-[#b534e6]/30 border-r-[#b534e6]/30 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-1.5 text-sm font-semibold text-gray-300">
                    <p className="text-xs text-[#36f9f6] font-bold uppercase font-mono">{book.specialty}</p>
                    <h3 className="text-xl font-black text-white">{book.doctorName}</h3>
                    <p>Patient: <span className="text-white">{book.patientName}</span> ({book.gender})</p>
                    <p className="text-xs font-mono text-gray-400">Date: {book.appointmentDate} | Time: {book.appointmentTime}</p>
                  </div>
                  <div className="flex sm:flex-col gap-2.5">
                    <button className="px-4 py-2 bg-[#b534e6]/20 border border-[#b534e6] text-gray-200 text-xs font-bold rounded-lg flex items-center space-x-1.5 hover:bg-[#b534e6] hover:text-white transition-colors">
                      <FileEdit className="w-3.5 h-3.5" /> <span>Update</span>
                    </button>
                    <button className="px-4 py-2 bg-rose-500/10 border border-rose-500 text-rose-400 text-xs font-bold rounded-lg flex items-center space-x-1.5 hover:bg-rose-500 hover:text-white transition-colors">
                      <Trash2 className="w-3.5 h-3.5" /> <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: MY PROFILE */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-black tracking-tight border-b border-[#b534e6]/20 pb-3">My Profile</h2>
              <div className="flex flex-col sm:flex-row items-center gap-6 p-4">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Profile" className="w-24 h-24 rounded-full border-2 border-[#36f9f6] object-cover" />
                <div className="space-y-1.5 text-center sm:text-left text-sm font-semibold text-gray-300">
                  <p className="text-xs text-[#ff7edb] uppercase tracking-wider font-bold">Logged In User</p>
                  <h3 className="text-2xl font-black text-white">Mahmudul Hasan</h3>
                  <p>Email: <span className="text-white font-mono">user@gmail.com</span></p>
                  <button className="mt-2 px-5 py-2.5 bg-gradient-to-r from-[#b534e6] to-blue-600 text-white text-xs font-black tracking-wider uppercase rounded-xl border border-[#36f9f6]/30 shadow-md">
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}