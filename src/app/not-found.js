"use client";
import Link from 'next/link';
import { ShieldAlert, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1a1025] flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="relative p-6 bg-[#0f0918] border-2 border-rose-500 rounded-3xl shadow-[0_0_30px_rgba(244,63,94,0.3)] animate-bounce">
        <ShieldAlert className="w-16 h-16 text-rose-500 filter drop-shadow-[0_0_8px_#f43f5e]" />
      </div>
      
      <div className="space-y-2">
        <h1 className="text-6xl font-mono font-black text-white tracking-tighter">404</h1>
        <h2 className="text-2xl font-black text-[#36f9f6]">Route Unauthorized / Not Found</h2>
        <p className="text-sm text-gray-400 font-medium max-w-sm">
          The tactical module or page you are searching for does not exist in the dashboard infrastructure.
        </p>
      </div>

      <Link 
        href="/" 
        className="px-6 py-3.5 bg-gradient-to-r from-[#b534e6] to-blue-600 border border-[#36f9f6]/30 text-white text-xs font-black tracking-widest uppercase rounded-xl flex items-center space-x-2 shadow-lg hover:scale-105 transition-all"
      >
        <Home className="w-4 h-4" />
        <span>Return to Safe Terminal</span>
      </Link>
    </div>
  );
}