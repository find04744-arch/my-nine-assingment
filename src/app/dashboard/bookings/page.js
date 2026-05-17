"use client";
import React from 'react';
import { Calendar, Clock, User, CheckCircle, AlertCircle } from 'lucide-react';

export default function BookingsPage() {
  // ডামি বুকিং ডাটা (অ্যাসাইনমেন্টের UI সুন্দর দেখানোর জন্য)
  const dummyBookings = [
    {
      id: "APT-1024",
      doctor: "Dr. Ariful Islam",
      specialty: "Cardiologist",
      date: "May 20, 2026",
      time: "10:30 AM",
      status: "Confirmed"
    },
    {
      id: "APT-1025",
      doctor: "Dr. Nusrat Jahan",
      specialty: "Dermatologist",
      date: "May 22, 2026",
      time: "04:15 PM",
      status: "Pending"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Appointments</h1>
            <p className="text-sm text-gray-500 mt-1">Track and manage your scheduled doctor consultations</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center space-x-2 text-sm font-medium text-gray-700">
            <Calendar size={16} className="text-blue-500" />
            <span>Total Bookings: {dummyBookings.length}</span>
          </div>
        </div>

        {/* Bookings Table / List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <th className="p-4 md:p-5">Appointment ID</th>
                  <th className="p-4 md:p-5">Doctor Details</th>
                  <th className="p-4 md:p-5">Date & Time</th>
                  <th className="p-4 md:p-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-sm text-gray-700">
                {dummyBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 md:p-5 font-mono text-xs font-semibold text-blue-600">
                      {booking.id}
                    </td>
                    <td className="p-4 md:p-5">
                      <div className="flex items-center space-x-3">
                        <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                          <User size={18} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{booking.doctor}</p>
                          <p className="text-xs text-gray-400">{booking.specialty}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 md:p-5">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1.5 text-xs font-medium text-gray-600">
                          <Calendar size={14} className="text-gray-400" />
                          <span>{booking.date}</span>
                        </div>
                        <div className="flex items-center space-x-1.5 text-xs text-gray-400">
                          <Clock size={14} className="text-gray-400" />
                          <span>{booking.time}</span>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 md:p-5">
                      {booking.status === "Confirmed" ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-100">
                          <CheckCircle size={12} className="mr-1" />
                          Confirmed
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                          <AlertCircle size={12} className="mr-1" />
                          Pending
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}