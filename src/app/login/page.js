"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'; // অ্যালার্ট দেখানোর জন্য সুইটঅ্যালার্ট (অথবা টোস্ট ব্যবহার করতে পারো)

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 📌 তোমার ব্যাকএন্ড লগইন API রুট (প্রয়োজনে ইউআরএল চেক করে নিও)
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ১. কুকি সেট করা (মিডলওয়্যার যেন রিড করে ড্যাশবোর্ড লক খুলতে পারে)
        // যদি ব্যাকএন্ড থেকে সরাসরি কুকি সেট না করা হয়, তবে ফ্রন্টএন্ডে এভাবে সেট করবে:
        document.cookie = `token=${data.token || 'authenticated'}; path=/; max-age=86400; SameSite=Strict`;

        Swal.fire({
          title: 'Success!',
          text: 'Login Successful',
          icon: 'success',
          confirmButtonColor: '#b534e6',
        });

        // ২. রিফ্রেশ করে ড্যাশবোর্ডে পাঠানো যাতে মিডলওয়্যার ইনস্ট্যান্ট আপডেট পায়
        router.push('/dashboard');
        router.refresh();
      } else {
        Swal.fire({
          title: 'Error!',
          text: data.message || 'Invalid email or password',
          icon: 'error',
          confirmButtonColor: '#b534e6',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonColor: '#b534e6',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1025] flex items-center justify-center p-6 pt-24">
      <div className="w-full max-w-md bg-[#0f0918]/90 border-2 border-[#b534e6]/40 rounded-3xl p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] space-y-6">
        <h1 className="text-3xl font-black text-white text-center tracking-tight">Login</h1>
        
        {/* onSubmit হ্যান্ডলার যুক্ত করা হয়েছে */}
        <form onSubmit={handleLogin} className="space-y-4 font-semibold text-sm">
          <div className="space-y-1.5">
            <label className="text-gray-300 text-xs uppercase tracking-wider">Email Address</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="yourname@gmail.com" 
              className="w-full bg-[#1a1025] border border-[#b534e6]/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]" 
            />
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-gray-300 text-xs uppercase tracking-wider">Password</label>
              <button type="button" className="text-xs text-[#ff7edb] hover:underline">Forgot Password?</button>
            </div>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full bg-[#1a1025] border border-[#b534e6]/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#36f9f6]" 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-3.5 bg-gradient-to-r from-[#b534e6] to-blue-600 text-white font-black tracking-widest uppercase rounded-xl border border-[#36f9f6]/30 shadow-md disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="relative flex items-center justify-center my-4">
          <div className="absolute w-full border-b border-[#b534e6]/20"></div>
          <span className="relative bg-[#0f0918] px-3 text-xs text-gray-400 font-bold uppercase tracking-wider">or secure single sign-on</span>
        </div>

        <button className="w-full py-3 bg-[#1a1025] border border-gray-500 rounded-xl flex items-center justify-center space-x-2 text-sm font-bold text-gray-200 hover:border-[#36f9f6] transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.11C18.436 2.014 15.618 1 12.24 1 5.466 1 0 6.466 0 13.24s5.466 12.24 12.24 12.24c7.07 0 11.784-4.944 11.784-11.974 0-.807-.087-1.427-.193-1.986H12.24z"/>
          </svg>
          <span>Continue with Google</span>
        </button>

        <p className="text-xs text-center text-gray-400 font-medium">
          Don’t have an account? <Link href="/register" className="text-[#36f9f6] font-bold hover:underline ml-1">Register</Link>
        </p>
      </div>
    </div>
  );
}