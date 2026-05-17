"use client";
import Link from 'next/link';
import { Activity, Facebook, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f0918] border-t border-[#b534e6]/30 text-gray-400 text-sm font-semibold">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        
        {/* Logo and Name */}
        <div className="space-y-3">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <div className="p-1.5 bg-[#b534e6]/20 border border-[#b534e6]/40 rounded-lg">
              <Activity className="w-5 h-5 text-[#36f9f6]" />
            </div>
            <span className="text-lg font-black text-white tracking-tight">DocAppoint</span>
          </div>
          <p className="text-xs text-gray-400 max-w-xs mx-auto md:mx-0 leading-relaxed">
            Premium decentralized ecosystem for instant and secure clinical appointment booking.
          </p>
        </div>

        {/* Copyright text */}
        <div className="text-xs text-gray-500 font-mono text-center">
          © {new Date().getFullYear()} DocAppoint Manager. All rights reserved.
        </div>

        {/* Social Links with the NEW X LOGO */}
        <div className="flex items-center justify-center md:justify-end space-x-5">
          <Link href="#" className="p-2 bg-[#1a1025] border border-[#b534e6]/20 rounded-xl hover:text-[#36f9f6] hover:border-[#36f9f6] transition-colors">
            <Facebook className="w-4 h-4" />
          </Link>
          
          {/* 𝕏 Brand New X Rebrand Logo Rule */}
          <Link href="#" className="p-2 bg-[#1a1025] border border-[#b534e6]/20 rounded-xl hover:text-white hover:border-white transition-colors" aria-label="X">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </Link>

          <Link href="#" className="p-2 bg-[#1a1025] border border-[#b534e6]/20 rounded-xl hover:text-[#ff7edb] hover:border-[#ff7edb] transition-colors">
            <Linkedin className="w-4 h-4" />
          </Link>
          <Link href="#" className="p-2 bg-[#1a1025] border border-[#b534e6]/20 rounded-xl hover:text-[#fede5d] hover:border-[#fede5d] transition-colors">
            <Github className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </footer>
  );
}