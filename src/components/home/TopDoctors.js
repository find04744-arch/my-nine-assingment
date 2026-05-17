"use client";
import Link from 'next/link';
import { Star, ArrowRight, ShieldCheck, MapPin, Briefcase } from 'lucide-react';

export default function TopDoctors() {
  // অ্যাসাইনমেন্টের নিয়ম অনুযায়ী শুধুমাত্র ৩ জন হাই-রেটেড ডক্টর এবং অফিশিয়াল ডাটা স্ট্রাকচার
  const doctors = [
    {
      id: "d1",
      name: "Dr. Sarah Al-Mehmood",
      specialty: "Cardiologist",
      hospital: "National Heart Institute",
      location: "Dhanmondi, Dhaka",
      experience: "10 years",
      availability: ["09:00 AM - 12:00 PM", "04:00 PM - 07:00 PM"],
      rating: 4.9,
      reviews: 120,
      fee: 1500,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: "d2",
      name: "Prof. Dr. Asif Rahman",
      specialty: "Neurologist",
      hospital: "Neuroscience Medical Center",
      location: "Mirpur, Dhaka",
      experience: "14 years",
      availability: ["10:00 AM - 01:00 PM", "05:00 PM - 08:00 PM"],
      rating: 5.0,
      reviews: 98,
      fee: 2000,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: "d3",
      name: "Dr. Elena Rostova",
      specialty: "Dermatologist",
      hospital: "Laser & Skin Care Clinic",
      location: "Gulshan, Dhaka",
      experience: "8 years",
      availability: ["11:00 AM - 02:00 PM", "06:00 PM - 09:00 PM"],
      rating: 4.8,
      reviews: 145,
      fee: 1200,
      image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?w=500&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="top-doctors" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16">
      
      {/* জমকালো সেকশন হেডার */}
      <div className="text-center space-y-4 mb-16">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-[#ff7edb]/10 border border-[#ff7edb]/40 rounded-full shadow-[0_0_15px_rgba(255,126,219,0.2)]">
          <span className="w-2 h-2 rounded-full bg-[#ff7edb] animate-ping"></span>
          <span className="text-xs font-black tracking-widest text-[#ff7edb] uppercase">
            Meet Our Elite Panel
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Top Rated <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36f9f6] via-[#ff7edb] to-[#fede5d] neon-text-cyan">Specialists</span>
        </h2>
        <p className="text-sm text-gray-300 max-w-lg mx-auto font-medium">
          Choose from our highest-evaluated and premium practitioners for secure consultations.
        </p>
      </div>

      {/* অ্যাসাইনমেন্টের নিয়ম অনুযায়ী ঠিক ৩টি কার্ডের গ্রিড লেআউট */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctors.map((doc) => (
          <div 
            key={doc.id} 
            className="group relative bg-[#1a1025]/80 backdrop-blur-md rounded-2xl border border-[#b534e6]/40 overflow-hidden hover:border-[#36f9f6] shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(54,249,246,0.3)] hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between"
          >
            {/* ইমেজ কন্টেইনার */}
            <div className="relative h-72 w-full overflow-hidden bg-[#0f0918]">
              <img 
                src={doc.image} 
                alt={doc.name} 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1025] via-transparent to-black/20" />
              
              {/* গ্লোয়িং রেটিং বাবল */}
              <div className="absolute top-4 right-4 flex items-center space-x-1.5 bg-[#0f0918]/90 backdrop-blur-md border border-[#fede5d] px-3 py-1 rounded-xl shadow-[0_0_10px_rgba(254,222,93,0.3)]">
                <Star className="w-4 h-4 text-[#fede5d] fill-[#fede5d]" />
                <span className="text-xs font-extrabold text-white font-mono">{doc.rating.toFixed(1)}</span>
              </div>
            </div>

            {/* টেক্সট কন্টেন্ট এরিয়া */}
            <div className="p-6 flex-grow flex flex-col justify-between space-y-5">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-[#36f9f6] text-xs font-bold tracking-wider uppercase">
                  <div className="flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#36f9f6] filter drop-shadow-[0_0_4px_#36f9f6]" />
                    <span className="neon-text-cyan">{doc.specialty}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-300 font-mono lowercase">
                    <Briefcase className="w-3.5 h-3.5 text-[#fede5d]" />
                    <span>{doc.experience}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-[#ff7edb] transition-colors duration-300">
                  {doc.name}
                </h3>
                <p className="text-xs text-gray-300 font-semibold">{doc.hospital}</p>
                
                {/* লোকেশন ফিল্ড */}
                <div className="flex items-center space-x-1 text-gray-400 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#ff7edb]" />
                  <span>{doc.location}</span>
                </div>
              </div>

              {/* ফি এবং রিভিউ ইনফো */}
              <div className="flex items-center justify-between pt-4 border-t border-[#b534e6]/30 text-sm">
                <div className="text-gray-300 font-medium">
                  Reviews: <span className="text-[#36f9f6] font-black font-mono">{doc.reviews}</span>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-gray-400 uppercase font-black tracking-wider">Consultation Fee</p>
                  <p className="text-xl font-black text-[#fede5d] font-mono filter drop-shadow-[0_0_6px_rgba(254,222,93,0.4)]">৳{doc.fee}</p>
                </div>
              </div>

              {/* অ্যাসাইনমেন্টের নিয়ম অনুযায়ী "View Details" বাটন */}
              <Link 
                href={`/doctors/${doc.id}`} 
                className="w-full mt-2 py-3.5 bg-gradient-to-r from-[#b534e6]/40 via-[#1a1025] to-[#b534e6]/10 border border-[#b534e6] text-gray-200 text-xs font-black tracking-widest uppercase rounded-xl text-center group-hover:from-[#b534e6] group-hover:to-blue-600 group-hover:text-white group-hover:border-[#36f9f6] group-hover:shadow-[0_0_20px_rgba(54,249,246,0.4)] transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}