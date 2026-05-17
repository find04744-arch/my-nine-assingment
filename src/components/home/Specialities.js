"use client";
import { Heart, Brain, Baby, Sparkles, Eye, Activity, Bone, Stethoscope } from 'lucide-react';

export default function Specialities() {
  const specialities = [
    { name: 'Cardiology', desc: 'Heart Care', icon: Heart, color: 'text-rose-400 border-rose-500/40 hover:border-rose-400 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] bg-rose-500/5' },
    { name: 'Neurology', desc: 'Brain & Nervous', icon: Brain, color: 'text-[#36f9f6] border-[#36f9f6]/40 hover:border-[#36f9f6] hover:shadow-[0_0_20px_rgba(54,249,246,0.4)] bg-[#36f9f6]/5' },
    { name: 'Pediatrics', desc: 'Child Health', icon: Baby, color: 'text-[#fede5d] border-[#fede5d]/40 hover:border-[#fede5d] hover:shadow-[0_0_20px_rgba(254,222,93,0.4)] bg-[#fede5d]/5' },
    { name: 'Dermatology', desc: 'Skin & Laser', icon: Sparkles, color: 'text-[#ff7edb] border-[#ff7edb]/40 hover:border-[#ff7edb] hover:shadow-[0_0_20px_rgba(255,126,219,0.4)] bg-[#ff7edb]/5' },
    { name: 'Ophthalmology', desc: 'Eye Specialist', icon: Eye, color: 'text-cyan-400 border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] bg-cyan-500/5' },
    { name: 'Orthopedics', desc: 'Bone & Joints', icon: Bone, color: 'text-orange-400 border-orange-500/40 hover:border-orange-400 hover:shadow-[0_0_20px_rgba(251,146,60,0.4)] bg-orange-500/5' },
    { name: 'General Medicine', desc: 'Family Doctor', icon: Stethoscope, color: 'text-purple-400 border-purple-500/40 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(192,132,252,0.4)] bg-purple-500/5' },
    { name: 'Diagnostics', desc: 'Full Lab Tests', icon: Activity, color: 'text-emerald-400 border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] bg-emerald-500/5' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20">
      
      {/* ঝকঝকে হেডার */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#36f9f6]/10 border border-[#36f9f6]/30 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#36f9f6] animate-pulse"></span>
          <span className="text-[11px] font-black tracking-widest text-[#36f9f6] uppercase">Departments</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
          Our Medical <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7edb] to-[#fede5d] filter drop-shadow-[0_0_10px_rgba(255,126,219,0.5)]">Specialities</span>
        </h2>
        <p className="text-sm text-gray-300 font-medium max-w-md mx-auto">
          Access high-end therapeutic departments right from your secure patient dashboard.
        </p>
      </div>

      {/* ৮ টি গ্রিড কার্ড */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {specialities.map((spec, i) => {
          const IconComponent = spec.icon;
          return (
            <div 
              key={i} 
              className={`p-6 backdrop-blur-md border rounded-2xl hover:scale-[1.03] transition-all duration-300 group cursor-pointer flex flex-col items-center text-center space-y-4 ${spec.color}`}
            >
              {/* আইকন বক্স গ্লো */}
              <div className="p-3.5 bg-[#0f0918]/90 rounded-xl border border-[#b534e6]/30 group-hover:border-current transition-colors duration-300 shadow-inner">
                <IconComponent className="w-8 h-8 filter drop-shadow-[0_0_6px_currentColor]" />
              </div>
              
              <div>
                <h3 className="text-lg font-black text-white tracking-tight group-hover:text-white">
                  {spec.name}
                </h3>
                <p className="text-xs text-gray-200 font-bold tracking-wide mt-1 opacity-90">{spec.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}