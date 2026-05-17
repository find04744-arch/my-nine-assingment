"use client";
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#1a1025] flex items-center justify-center p-6 pt-24">
      <div className="w-full max-w-md bg-[#0f0918]/90 border-2 border-[#b534e6]/40 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] space-y-6">
        <h1 className="text-3xl font-black text-white text-center tracking-tight">Register</h1>
        
        <form className="space-y-4 font-semibold text-sm">
          <div className="space-y-1.5">
            <label className="text-gray-300 text-xs uppercase tracking-wider">Full Name</label>
            <input type="text" required placeholder="Mahmudul Hasan" className="w-full bg-[#1a1025] border border-[#b534e6]/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]" />
          </div>
          <div className="space-y-1.5">
            <label className="text-gray-300 text-xs uppercase tracking-wider">Email Address</label>
            <input type="email" required placeholder="user@gmail.com" className="w-full bg-[#1a1025] border border-[#b534e6]/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]" />
          </div>
          <div className="space-y-1.5">
            <label className="text-gray-300 text-xs uppercase tracking-wider">Photo URL</label>
            <input type="url" placeholder="https://example.com/photo.jpg" className="w-full bg-[#1a1025] border border-[#b534e6]/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]" />
          </div>
          <div className="space-y-1.5">
            <label className="text-gray-300 text-xs uppercase tracking-wider">Password</label>
            <input type="password" required placeholder="At least 6 characters" className="w-full bg-[#1a1025] border border-[#b534e6]/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]" />
            <p className="text-[10px] text-gray-400 font-medium">Must contain 1 uppercase letter, 1 lowercase letter, and min 6 characters.</p>
          </div>

          <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-[#b534e6] to-blue-600 text-white font-black tracking-widest uppercase rounded-xl border border-[#36f9f6]/30 shadow-md">
            Register Account
          </button>
        </form>

        <div className="relative flex items-center justify-center my-4">
          <div className="absolute w-full border-b border-[#b534e6]/20"></div>
          <span className="relative bg-[#0f0918] px-3 text-xs text-gray-400 font-bold uppercase tracking-wider">or sign up with</span>
        </div>

        {/* এক্সটার্নাল আইকন বাদ দিয়ে ডিরেক্ট গুগল SVG বসানো হয়েছে */}
        <button className="w-full py-3 bg-[#1a1025] border border-gray-500 rounded-xl flex items-center justify-center space-x-2 text-sm font-bold text-gray-200 hover:border-[#36f9f6] transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.11C18.436 2.014 15.618 1 12.24 1 5.466 1 0 6.466 0 13.24s5.466 12.24 12.24 12.24c7.07 0 11.784-4.944 11.784-11.974 0-.807-.087-1.427-.193-1.986H12.24z"/>
          </svg>
          <span>Sign up with Google</span>
        </button>

        <p className="text-xs text-center text-gray-400 font-medium">
          Already have an account? <Link href="/login" className="text-[#36f9f6] font-bold hover:underline ml-1">Login</Link>
        </p>
      </div>
    </div>
  );
}