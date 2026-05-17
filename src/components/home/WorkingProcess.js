"use client";
import { Search, CalendarDays, CheckCircle } from 'lucide-react';

export default function WorkingProcess() {
  const steps = [
    {
      step: '01',
      title: 'Search Doctor',
      desc: 'Filter top-rated specialists easily by their names, clinical expertise, or preferred hospital locations.',
      icon: Search,
      color: 'from-[#36f9f6] to-blue-500 shadow-[0_0_20px_rgba(54,249,246,0.3)]',
      textColor: 'text-[#36f9f6]'
    },
    {
      step: '02',
      title: 'Book Safe Slot',
      desc: 'Select your preferred available date & time slot under completely secure session management.',
      icon: CalendarDays,
      color: 'from-[#ff7edb] to-[#b534e6] shadow-[0_0_20px_rgba(255,126,219,0.3)]',
      textColor: 'text-[#ff7edb]'
    },
    {
      step: '03',
      title: 'Get Consultant',
      desc: 'Meet your healthcare practitioner instantly and manage your digital medical prescriptions effortlessly.',
      icon: CheckCircle,
      color: 'from-[#fede5d] to-orange-500 shadow-[0_0_20px_rgba(254,222,93,0.3)]',
      textColor: 'text-[#fede5d]'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16">
      
      {/* জমকালো হেডার */}
      <div className="text-center space-y-4 mb-20">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#ff7edb]/10 border border-[#ff7edb]/30 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#ff7edb] animate-ping"></span>
          <span className="text-[11px] font-black tracking-widest text-[#ff7edb] uppercase">Workflow</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
          How DocAppoint <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36f9f6] to-[#b534e6] filter drop-shadow-[0_0_8px_rgba(54,249,246,0.4)]">Works</span>
        </h2>
        <p className="text-sm text-gray-300 font-medium max-w-sm mx-auto">
          Three interactive steps to instantly secure your premium medical appointment.
        </p>
      </div>

      {/* ৩টি হাই-রিডেবল প্রসেস কার্ড */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((item, i) => {
          const Icon = item.icon;
          return (
            <div 
              key={i} 
              className="relative p-8 bg-[#1a1025]/90 backdrop-blur-lg border border-[#b534e6]/30 rounded-2xl flex flex-col items-center text-center space-y-5 hover:border-[#36f9f6]/60 transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              {/* হাই-কন্ট্রাস্ট স্টেপ বাবল */}
              <div className="absolute -top-4 left-6 px-4 py-1 bg-[#0f0918] border-2 border-[#b534e6] rounded-xl text-xs font-black text-white font-mono shadow-[0_0_10px_rgba(181,52,230,0.4)]">
                STEP <span className={item.textColor}>{item.step}</span>
              </div>

              {/* গ্লোয়িং আইকন কন্টেইনার */}
              <div className={`p-4 bg-gradient-to-br ${item.color} rounded-2xl text-white transform group-hover:scale-110 transition-transform`}>
                <Icon className="w-8 h-8 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]" />
              </div>

              {/* টেক্সট এরিয়া - স্পষ্ট কালার টিউনিং */}
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-200 font-semibold leading-relaxed max-w-[260px] mx-auto">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}