"use client"; // ১. সবার উপরে এই ডিরেক্টিভ দিতেই হবে এরর ফিক্স করার জন্য

import React, { useState } from "react";
import Link from "next/link"; // ২. react-router-dom এর বদলে Next.js এর লিংকিং
import { usePathname, useRouter } from "next/navigation"; // ৩. Next.js এর নিজস্ব রাউটিং হুকস
import { Menu, X, LogOut } from "lucide-react";

const Navbar = () => {
  // ডামি অথ স্টেট (তোমার AuthContext রেডি হলে তার সাথে কানেক্ট করবে)
  const [user, setUser] = useState({
    name: "Mahmudul Hasan",
    email: "user@gmail.com",
    photoURL: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
  });
  
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // একটিভ রুট ট্র্যাক করার জন্য

  const handleLogout = () => {
    setUser(null);
    router.push("/login");
  };

  // একটিভ লিংক চেক করার ফাংশন
  const getLinkStyles = (path) => {
    const isActive = pathname === path;
    return `text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-indigo-400 font-semibold border-b-2 border-indigo-400 pb-1"
        : "text-gray-300 hover:text-white"
    }`;
  };

  const navLinks = (
    <>
      <Link href="/" className={getLinkStyles("/")}>Home</Link>
      <Link href="/appointments" className={getLinkStyles("/appointments")}>All Appointment</Link>
      {user && <Link href="/dashboard" className={getLinkStyles("/dashboard")}>Dashboard</Link>}
    </>
  );

  return (
    <nav className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo + Name */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-indigo-600 p-2 rounded-lg text-white font-bold text-xl tracking-wider group-hover:bg-indigo-500 transition-colors">
              DA
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              DocAppoint
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks}
          </div>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <img
                  src={user.photoURL}
                  alt={user.name}
                  className="w-9 h-9 rounded-full object-cover border-2 border-indigo-500 hover:scale-105 transition-transform"
                  title={user.name}
                />
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white px-3 py-1.5 rounded-md text-sm font-medium border border-red-600/30 transition-all duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white px-3 py-2 transition-colors">
                  Login
                </Link>
                <Link href="/register" className="text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-md shadow-lg shadow-indigo-600/20 transition-all">
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-3 sm:px-3 flex flex-col pl-4">
            {navLinks}
          </div>
          
          <div className="pt-4 pb-4 border-t border-slate-800 px-4">
            {user ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img src={user.photoURL} alt={user.name} className="w-10 h-10 rounded-full object-cover border border-indigo-500" />
                  <div>
                    <p className="text-sm font-medium text-white">{user.name}</p>
                    <p className="text-xs text-gray-400">{user.email}</p>
                  </div>
                </div>
                <button onClick={handleLogout} className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link href="/login" onClick={() => setIsOpen(false)} className="text-center text-sm font-medium text-gray-300 hover:text-white py-2 border border-slate-700 rounded-md">
                  Login
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)} className="text-center text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-md">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;