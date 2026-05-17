"use client";
import React from 'react';
import { User, Mail, Calendar, Settings } from 'lucide-react';

export default function BookingsProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Profile Header Banner */}
        <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

        {/* Profile Content */}
        <div className="p-6 md:p-8 relative">
          {/* Avatar */}
          <div className="w-24 h-24 bg-indigo-100 rounded-full border-4 border-white absolute -top-12 left-6 md:left-8 flex items-center justify-center text-indigo-600">
            <User size={40} />
          </div>

          {/* User Meta */}
          <div className="mt-14">
            <h1 className="text-2xl font-bold text-gray-900">Patient Profile</h1>
            <p className="text-gray-500 text-sm mt-1">Manage your appointments and medical profile info</p>
          </div>

          <hr className="my-6 border-gray-100" />

          {/* Profile Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
              <div className="p-2.5 bg-blue-100 text-blue-600 rounded-lg">
                <User size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Full Name</p>
                <p className="text-sm font-semibold text-gray-800">John Doe</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
              <div className="p-2.5 bg-green-100 text-green-600 rounded-lg">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Email Address</p>
                <p className="text-sm font-semibold text-gray-800">patient@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
              <div className="p-2.5 bg-purple-100 text-purple-600 rounded-lg">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Total Bookings</p>
                <p className="text-sm font-semibold text-gray-800">0 Active Appointments</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl">
              <div className="p-2.5 bg-orange-100 text-orange-600 rounded-lg">
                <Settings size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Account Status</p>
                <p className="text-sm font-semibold text-green-600">Verified Patient</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}