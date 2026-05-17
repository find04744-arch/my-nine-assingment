"use client";
import Link from 'next/link';
import { Chrome } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#1a1025] flex items-center justify-center p-6 pt-24">
      <div className="w-full max-w-md bg-[#0f0918]/90 border-2 border-[#b534e6]/40 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] space-y-6">
        <h1 className="text-3xl font-black text-white text-center tracking-tight">Login</h1>
        
        <form className="space-y-4 font-semibold text-sm">
          <div className="space-y-1.5">
            <label className="text-gray-300 text-xs uppercase tracking-wider">Email Address</label>
            <input type="email" required placeholder="yourname@gmail.com" className="w-full bg-[#1a1025] border border-[#b534e6]/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]" />
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-gray-300 text-xs uppercase tracking-wider">Password</label>
              <button type="button" className="text-xs text-[#ff7edb] hover:underline">Forgot Password?</button>
            </div>
            <input type="password" required placeholder="••••••••" className="w-full bg-[#1a1025] border border-[#b534e6]/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]" />
          </div>

          <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-[#b534e6] to-blue-600 text-white font-black tracking-widest uppercase rounded-xl border border-[#36f9f6]/30 shadow-md">
            Login
          </button>
        </form>

        <div className="relative flex items-center justify-center my-4">
          <div className="absolute w-full border-b border-[#b534e6]/20"></div>
          <span className="relative bg-[#0f0918] px-3 text-xs text-gray-400 font-bold uppercase tracking-wider">or secure single sign-on</span>
        </div>

        <button className="w-full py-3 bg-[#1a1025] border border-gray-500 rounded-xl flex items-center justify-center space-x-2 text-sm font-bold text-gray-200 hover:border-[#36f9f6] transition-colors">
          <Chrome className="w-4 h-4 text-[#36f9f6]" />
          <span>Continue with Google</span>
        </button>

        <p className="text-xs text-center text-gray-400 font-medium">
          Don’t have an account? <Link href="/register" className="text-[#36f9f6] font-bold hover:underline ml-1">Register</Link>
        </p>
      </div>
    </div>
  );
}