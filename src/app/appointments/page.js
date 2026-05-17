"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Search, Star, ShieldCheck, ArrowRight, Briefcase, MapPin } from 'lucide-react';

export default function AllAppointmentsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const allDoctors = [
    { id: "d1", name: "Dr. Sarah Al-Mehmood", specialty: "Cardiologist", hospital: "National Heart Institute", location: "Dhanmondi, Dhaka", experience: "10 years", rating: 4.9, fee: 1500, image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&auto=format&fit=crop&q=80" },
    { id: "d2", name: "Prof. Dr. Asif Rahman", specialty: "Neurologist", hospital: "Neuroscience Medical Center", location: "Mirpur, Dhaka", experience: "14 years", rating: 5.0, fee: 2000, image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=80" },
    { id: "d3", name: "Dr. Elena Rostova", specialty: "Dermatologist", hospital: "Laser & Skin Care Clinic", location: "Gulshan, Dhaka", experience: "8 years", rating: 4.8, fee: 1200, image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?w=500&auto=format&fit=crop&q=80" },
    { id: "d4", name: "Dr. Michael Chang", specialty: "Orthopedic Surgeon", hospital: "Bone & Joint Hospital", location: "Uttara, Dhaka", experience: "12 years", rating: 4.9, fee: 1800, image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&auto=format&fit=crop&q=80" },
    { id: "d5", name: "Dr. Amrita Patel", specialty: "Pediatrician", hospital: "Lotus Children's Care", location: "Banani, Dhaka", experience: "9 years", rating: 5.0, fee: 1000, image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=500&auto=format&fit=crop&q=80" },
    { id: "d6", name: "Prof. Dr. Raymond Holt", specialty: "General Medicine", hospital: "Metro General Hospital", location: "Badda, Dhaka", experience: "20 years", rating: 4.7, fee: 1200, image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500&auto=format&fit=crop&q=80" },
    { id: "d7", name: "Dr. Sophia Martinez", specialty: "Ophthalmologist", hospital: "Vision Care Laser Center", location: "Dhanmondi, Dhaka", experience: "11 years", rating: 4.9, fee: 1300, image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500&auto=format&fit=crop&q=80" },
    { id: "d8", name: "Dr. Tariqul Islam", specialty: "Gastroenterologist", hospital: "Central Liver Care", location: "Khilgaon, Dhaka", experience: "15 years", rating: 4.8, fee: 1500, image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?w=500&auto=format&fit=crop&q=80" },
    { id: "d9", name: "Dr. Linda Watson", specialty: "Psychiatrist", hospital: "Mind Care Rehab", location: "Gulshan, Dhaka", experience: "13 years", rating: 5.0, fee: 2500, image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=500&auto=format&fit=crop&q=80" },
    { id: "d10", name: "Dr. James Anderson", specialty: "Endocrinologist", hospital: "Diabetes Research Center", location: "Mohakhali, Dhaka", experience: "16 years", rating: 4.8, fee: 1600, image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=80" }
  ];

  const filteredDoctors = allDoctors.filter(doc => 
    doc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#1a1025] text-white pt-24 pb-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36f9f6] via-[#ff7edb] to-[#fede5d] neon-text-cyan">Appointments</span>
          </h1>
          <p className="text-sm text-gray-300 max-w-md mx-auto">
            Browse through our full panel of elite medical consultants and book your secured session.
          </p>
        </div>

        <div className="max-w-xl mx-auto relative group">
          <input 
            type="text" 
            placeholder="Search appointments by Doctor Name..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-28 py-4 bg-[#0f0918]/80 border-2 border-[#b534e6]/50 rounded-2xl text-white placeholder-gray-400 font-medium focus:outline-none focus:border-[#36f9f6] focus:shadow-[0_0_20px_rgba(54,249,246,0.3)] transition-all duration-300"
          />
          <Search className="absolute left-4 top-4.5 w-5 h-5 text-[#36f9f6]" />
          <button className="absolute right-2 top-2 px-5 py-2.5 bg-gradient-to-r from-[#b534e6] to-blue-600 rounded-xl text-xs font-black tracking-wider uppercase border border-[#36f9f6]/30 shadow-lg">
            Search
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="group relative bg-[#1a1025]/90 backdrop-blur-md rounded-2xl border border-[#b534e6]/40 overflow-hidden hover:border-[#36f9f6] hover:shadow-[0_0_25px_rgba(54,249,246,0.3)] hover:scale-[1.02] transition-all duration-500 flex flex-col justify-between">
              <div className="relative h-64 w-full overflow-hidden bg-[#0f0918]">
                <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1025] via-transparent to-black/20" />
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-[#0f0918]/90 border border-[#fede5d] px-2.5 py-1 rounded-xl">
                  <Star className="w-3.5 h-3.5 text-[#fede5d] fill-[#fede5d]" />
                  <span className="text-xs font-extrabold font-mono">{doc.rating.toFixed(1)}</span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[#36f9f6] text-xs font-bold uppercase">
                    <div className="flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#36f9f6] filter drop-shadow-[0_0_4px_#36f9f6]" />
                      <span>{doc.specialty}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-300 font-mono">
                      <Briefcase className="w-3.5 h-3.5 text-[#fede5d]" />
                      <span>{doc.experience}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-white group-hover:text-[#ff7edb] transition-colors">{doc.name}</h3>
                  <p className="text-xs text-gray-300 font-semibold">{doc.hospital}</p>
                  <div className="flex items-center space-x-1 text-gray-400 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#ff7edb]" />
                    <span>{doc.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#b534e6]/30 text-sm">
                  <span className="text-gray-300 font-medium">Fee:</span>
                  <span className="text-xl font-black text-[#fede5d] font-mono">৳{doc.fee}</span>
                </div>

                <Link href={`/doctors/${doc.id}`} className="w-full py-3 bg-gradient-to-r from-[#b534e6]/30 to-[#1a1025] border border-[#b534e6] text-gray-200 text-xs font-black tracking-widest uppercase rounded-xl text-center group-hover:from-[#b534e6] group-hover:to-blue-600 group-hover:text-white group-hover:border-[#36f9f6] transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <p className="text-center text-gray-400 font-bold text-lg pt-12">No specialists found with that name.</p>
        )}
      </div>
    </div>
  );
}