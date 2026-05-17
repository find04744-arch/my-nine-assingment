"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Activity, Menu, X, User } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // অ্যাসাইনমেন্ট টেস্ট করার জন্য ডেমো স্টেট (True/False করে চেক করতে পারবেন)
  const [isLoggedIn, setIsLoggedIn] = useState(true); 

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Appointment', path: '/appointments' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0f0918]/80 backdrop-blur-xl border-b border-[#b534e6]/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo + Name */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-[#ff7edb]/10 border border-[#ff7edb]/50 rounded-xl group-hover:shadow-[0_0_15px_rgba(255,126,219,0.5)] transition-all">
              <Activity className="w-6 h-6 text-[#36f9f6] filter drop-shadow-[0_0_4px_#36f9f6]" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white">
              Doc<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7edb] to-[#fede5d]">Appoint</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 font-black text-xs uppercase tracking-widest">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors duration-300 ${
                  isActive(link.path) 
                    ? 'text-[#36f9f6] filter drop-shadow-[0_0_4px_#36f9f6]' 
                    : 'text-gray-300 hover:text-[#ff7edb]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Conditional Auth States */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4 border-l border-[#b534e6]/30 pl-4">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" 
                  alt="User Profile" 
                  className="w-9 h-9 rounded-full border-2 border-[#36f9f6] object-cover shadow-[0_0_10px_rgba(54,249,246,0.3)]"
                />
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="px-4 py-2 border border-rose-500/50 bg-rose-500/10 text-rose-400 text-xs font-black tracking-wider uppercase rounded-xl hover:bg-rose-500 hover:text-white transition-all duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/login" className="text-gray-300 hover:text-white text-xs font-black tracking-wider uppercase px-4 py-2">
                  Login
                </Link>
                <Link href="/register" className="px-5 py-2.5 bg-gradient-to-r from-[#b534e6] to-blue-600 border border-[#36f9f6]/30 text-white text-xs font-black tracking-wider uppercase rounded-xl shadow-md hover:scale-[1.02] transition-transform">
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300 hover:text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-[#0f0918] border-b border-[#b534e6]/30 px-6 py-6 space-y-4 font-bold text-sm uppercase tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className={`block ${isActive(link.path) ? 'text-[#36f9f6]' : 'text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-[#b534e6]/20 flex flex-col space-y-3">
            {isLoggedIn ? (
              <button onClick={() => { setIsLoggedIn(false); setIsOpen(false); }} className="w-full py-2.5 text-center bg-rose-500/20 border border-rose-500 text-rose-400 rounded-xl">
                Logout
              </button>
            ) : (
              <>
                <Link href="/login" onClick={() => setIsOpen(false)} className="w-full py-2.5 text-center text-gray-300 bg-[#1a1025] rounded-xl">Login</Link>
                <Link href="/register" onClick={() => setIsOpen(false)} className="w-full py-2.5 text-center bg-[#b534e6] text-white rounded-xl">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}