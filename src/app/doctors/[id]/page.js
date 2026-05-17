"use client";
import { useState, useEffect, use } from 'react';
import { ShieldCheck, Star, Clock, MapPin, Briefcase } from 'lucide-react';
import BookingModal from '@/components/BookingModal';

export default function DoctorDetailsPage({ params }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [doctor, setDoctor] = useState(null);
  
  // Next.js-এর নতুন Promise বেসড params আনর‍্যাপ করার অফিশিয়াল নিয়ম
  const unwrappedParams = use(params);
  const doctorId = unwrappedParams.id;

  // ১০ জন ডক্টরের ডাটাবেজ
  const allDoctors = [
    {
      id: "d1",
      name: "Dr. Sarah Al-Mehmood",
      specialty: "Cardiologist",
      hospital: "National Heart Institute",
      location: "Dhanmondi, Dhaka",
      experience: "10 years",
      availability: ["09:00 AM - 12:00 PM", "04:00 PM - 07:00 PM"],
      description: "Highly experienced cardiologist specializing in complex heart diseases, cardiac diagnostics, preventive care, and patient-centered management loops.",
      rating: 4.9,
      reviews: 120,
      fee: 1500,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "d2",
      name: "Prof. Dr. Asif Rahman",
      specialty: "Neurologist",
      hospital: "Neuroscience Medical Center",
      location: "Mirpur, Dhaka",
      experience: "14 years",
      availability: ["10:00 AM - 01:00 PM", "05:00 PM - 08:00 PM"],
      description: "Renowned expert in neurological disorders, brain mapping, stroke preventions, and comprehensive neuro-muscular medical care systems.",
      rating: 5.0,
      reviews: 98,
      fee: 2000,
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "d3",
      name: "Dr. Elena Rostova",
      specialty: "Dermatologist",
      hospital: "Laser & Skin Care Clinic",
      location: "Gulshan, Dhaka",
      experience: "8 years",
      availability: ["11:00 AM - 02:00 PM", "06:00 PM - 09:00 PM"],
      description: "Specialized in professional clinical dermatology, advanced laser therapy, skin care optimization, and corrective cosmetic treatments.",
      rating: 4.8,
      reviews: 145,
      fee: 1200,
      image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "d4",
      name: "Dr. Michael Chang",
      specialty: "Orthopedic Surgeon",
      hospital: "Bone & Joint Specialty Hospital",
      location: "Uttara, Dhaka",
      experience: "12 years",
      availability: ["09:00 AM - 01:00 PM", "03:00 PM - 06:00 PM"],
      description: "Dedicated orthopedic surgeon focusing on sports injuries, joint replacement surgeries, and trauma reconstruction mechanics.",
      rating: 4.9,
      reviews: 210,
      fee: 1800,
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "d5",
      name: "Dr. Amrita Patel",
      specialty: "Pediatrician",
      hospital: "Lotus Children's Care",
      location: "Banani, Dhaka",
      experience: "9 years",
      availability: ["10:00 AM - 12:30 PM", "04:30 PM - 07:30 PM"],
      description: "Compassionate child healthcare specialist handling infant nutrition, critical pediatric diseases, and routine developmental checks.",
      rating: 5.0,
      reviews: 185,
      fee: 1000,
      image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "d6",
      name: "Prof. Dr. Raymond Holt",
      specialty: "General Medicine",
      hospital: "Metro General Hospital",
      location: "Badda, Dhaka",
      experience: "20 years",
      availability: ["08:00 AM - 11:00 AM", "05:00 PM - 09:00 PM"],
      description: "Veteran clinical practitioner specializing in general health diagnosis, chronic condition control, and multi-disciplinary medical advice.",
      rating: 4.7,
      reviews: 320,
      fee: 1200,
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "d7",
      name: "Dr. Sophia Martinez",
      specialty: "Ophthalmologist",
      hospital: "Vision Care Laser Center",
      location: "Dhanmondi, Dhaka",
      experience: "11 years",
      availability: ["10:00 AM - 01:00 PM", "04:00 PM - 07:00 PM"],
      description: "Expert eye surgeon specialized in laser vision correction, advanced cataract procedures, and comprehensive retinal disease screenings.",
      rating: 4.9,
      reviews: 160,
      fee: 1300,
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "d8",
      name: "Dr. Tariqul Islam",
      specialty: "Gastroenterologist",
      hospital: "Central Liver & Gastric Care",
      location: "Khilgaon, Dhaka",
      experience: "15 years",
      availability: ["09:30 AM - 12:30 PM", "05:30 PM - 08:30 PM"],
      description: "Expert in liver diseases, gastrointestinal endoscopic procedures, ulcer therapies, and complex digestive system diagnoses.",
      rating: 4.8,
      reviews: 140,
      fee: 1500,
      image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "d9",
      name: "Dr. Linda Watson",
      specialty: "Psychiatrist",
      hospital: "Mind Care Rehabilitation",
      location: "Gulshan, Dhaka",
      experience: "13 years",
      availability: ["11:00 AM - 02:00 PM", "06:00 PM - 09:30 PM"],
      description: "Specialized in mental health care counseling, clinical depression treatment, behavioral therapies, and psychiatric wellness evaluations.",
      rating: 5.0,
      reviews: 95,
      fee: 2500,
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=600&auto=format&fit=crop&q=80"
    },
    {
      id: "d10",
      name: "Dr. James Anderson",
      specialty: "Endocrinologist",
      hospital: "Diabetes Control & Research",
      location: "Mohakhali, Dhaka",
      experience: "16 years",
      availability: ["09:00 AM - 12:00 PM", "04:00 PM - 07:00 PM"],
      description: "Dedicated endocrinology consultant working closely on diabetes management, thyroid disorders, and metabolic hormone regulations.",
      rating: 4.8,
      reviews: 270,
      fee: 1600,
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&auto=format&fit=crop&q=80"
    }
  ];

  // আইডি ট্র্যাকিং করে রিয়েল-টাইমে ডক্টর অবজেক্ট স্টেট-এ সেট করা
  useEffect(() => {
    if (doctorId) {
      // URL-এর আইডি "d1" নাকি "doc1" সেটি নিখুঁতভাবে হ্যান্ডেল করার চেক
      const normalizedId = doctorId.startsWith('doc') ? doctorId.replace('doc', 'd') : doctorId;
      const foundDoctor = allDoctors.find(doc => doc.id === normalizedId);
      
      if (foundDoctor) {
        setDoctor(foundDoctor);
      } else {
        setDoctor(allDoctors[0]); // ডিফেন্সিভ ফলব্যাক
      }
    }
  }, [doctorId]);

  // ডাটা ম্যাচ হওয়ার আগ পর্যন্ত লোডিং বাবল দেখানো
  if (!doctor) {
    return (
      <div className="min-h-screen bg-[#1a1025] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#36f9f6] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1025] text-white pt-28 pb-16 px-6 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto bg-[#0f0918]/80 border-2 border-[#b534e6]/40 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
          
          {/* ইমেজ সেকশন */}
          <div className="relative group rounded-2xl overflow-hidden border border-[#b534e6]/40 h-[380px] md:h-[420px] bg-[#0f0918]">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0918] via-transparent to-transparent" />
          </div>

          {/* ইনফরমেশন সেকশন */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="px-3 py-1 bg-[#36f9f6]/10 border border-[#36f9f6]/40 text-[#36f9f6] text-xs font-black tracking-widest uppercase rounded-md shadow-[0_0_10px_rgba(54,249,246,0.2)] inline-block">
                {doctor.specialty}
              </span>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">{doctor.name}</h1>
              
              <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-300">
                <div className="flex items-center space-x-1 bg-[#1a1025] px-2.5 py-1.5 border border-[#b534e6]/30 rounded-lg">
                  <Briefcase className="w-4 h-4 text-[#ff7edb]" />
                  <span>Exp: {doctor.experience}</span>
                </div>
                <div className="flex items-center space-x-1 bg-[#1a1025] px-2.5 py-1.5 border border-[#b534e6]/30 rounded-lg">
                  <Star className="w-4 h-4 text-[#fede5d] fill-[#fede5d]" />
                  <span>{doctor.rating.toFixed(1)} ({doctor.reviews} Reviews)</span>
                </div>
              </div>

              <p className="text-sm text-gray-200 leading-relaxed font-semibold">{doctor.description}</p>
              
              <div className="space-y-3 pt-2 text-sm font-bold text-gray-300">
                <p className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-[#ff7edb]" /> 
                  <span className="text-white">{doctor.hospital}</span> 
                  <span className="text-gray-400 font-medium">({doctor.location})</span>
                </p>
                
                <div className="space-y-1.5">
                  <p className="flex items-center space-x-2 text-[#36f9f6] text-xs uppercase tracking-wider font-black">
                    <Clock className="w-4 h-4" /> 
                    <span>Available Slots:</span>
                  </p>
                  <ul className="pl-6 list-disc text-xs space-y-1 font-mono text-gray-300 font-semibold">
                    {doctor.availability.map((time, i) => (
                      <li key={i}>{time}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ফি এবং অ্যাপয়েন্টমেন্ট বাটন */}
            <div className="flex items-center justify-between pt-6 border-t border-[#b534e6]/30">
              <div>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-wider">Consultation Fee</p>
                <p className="text-3xl font-black text-[#fede5d] font-mono filter drop-shadow-[0_0_6px_rgba(254,222,93,0.4)]">৳{doctor.fee}</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-gradient-to-r from-[#b534e6] to-blue-600 text-white text-sm font-black tracking-widest uppercase rounded-xl border border-[#36f9f6]/30 shadow-[0_0_20px_rgba(54,249,246,0.3)] hover:shadow-[0_0_30px_rgba(54,249,246,0.6)] hover:scale-[1.03] transition-all duration-300"
              >
                Book Appointment
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* মডাল উইন্ডো */}
      {isModalOpen && <BookingModal doctor={doctor} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}