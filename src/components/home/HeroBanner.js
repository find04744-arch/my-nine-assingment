"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import Link from 'next/link';

// Swiper CSS Import
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function HeroBanner() {
  // 10 high-quality dynamic professional medical images & text
  const slides = [
    {
      title: "Your Journey to Better Health Starts Here",
      desc: "Connect with certified and top-rated medical specialists near you. Book appointments instantly with secure session management.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&auto=format&fit=crop&q=80"
    },
    {
      title: "Consult Best Doctors Anywhere, Anytime",
      desc: "Skip the waiting room. Experience premium healthcare management tailored just for you and your family.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80"
    },
    {
      title: "Advanced Cardiac Care & Diagnostics",
      desc: "Expert cardiologists providing patient-centered treatment and advanced heart screening solutions.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&auto=format&fit=crop&q=80"
    },
    {
      title: "State of the Art Medical Facilities",
      desc: "Equipped with futuristic technologies to ensure high accuracy in medical diagnostics and regular follow-ups.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80"
    },
    {
      title: "Expert Neurological Consultations",
      desc: "Get elite guidance for brain and nervous system health from top-rated neurologists in the country.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=1200&auto=format&fit=crop&q=80"
    },
    {
      title: "Compassionate Pediatric & Child Care",
      desc: "Ensuring healthy smiles for your little ones with safe, friendly, and expert child health specialists.",
      image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1200&auto=format&fit=crop&q=80"
    },
    {
      title: "Precision Surgical and Operative Care",
      desc: "World-class operation theaters backed by decades of clinical excellence and highly skilled surgeons.",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&auto=format&fit=crop&q=80"
    },
    {
      title: "24/7 Emergency Support & Booking",
      desc: "Critical support whenever you need it most. Our active dynamic system is ready to connect you instantly.",
      image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&auto=format&fit=crop&q=80"
    },
    {
      title: "Expert Dermatology & Skincare",
      desc: "Regain your confidence with modern medical treatments for critical skin, hair, and laser therapies.",
      image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1200&auto=format&fit=crop&q=80"
    },
    {
      title: "Holistic Physical Therapy & Rehab",
      desc: "Restore your full mobility and strength under the close supervision of top-tier physiotherapists.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="relative w-full h-[75vh] md:h-[85vh] bg-[#0f0918] overflow-hidden border-b border-[#b534e6]/30">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect={'fade'}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full flex items-center">
            
            {/* 1. Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* 2. Professional Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f0918] via-[#1a1025]/95 to-[#0f0918]/40" />
            <div className="absolute inset-0 bg-black/50" /> {/* Added solid overlay layer for perfect readability */}

            {/* 3. Content Area */}
            <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 z-10">
              <div className="max-w-2xl space-y-6 md:space-y-8">
                
                {/* Neon Badge */}
                <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-[#b534e6]/20 border border-[#36f9f6]/40 rounded-full shadow-[0_0_10px_rgba(54,249,246,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-[#36f9f6] animate-pulse"></span>
                  <span className="text-xs font-bold tracking-widest text-[#36f9f6] uppercase">
                    Premium Care System
                  </span>
                </div>

                {/* Main Heading with SynthWave Neon Glow */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.2] drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  {slide.title.includes("Journey") ? (
                    <>
                      Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36f9f6] to-[#b534e6] filter drop-shadow-[0_0_8px_rgba(54,249,246,0.5)]">Journey</span> to <br className="hidden md:block" />
                      Better <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7edb] to-[#fede5d]">Health</span> Starts Here
                    </>
                  ) : slide.title.includes("Consult") ? (
                    <>
                      Consult <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36f9f6] to-[#ff7edb]">Best Doctors</span> <br className="hidden md:block" />
                      Anywhere, Anytime
                    </>
                  ) : (
                    <>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36f9f6] via-[#ff7edb] to-[#fede5d]">
                        {slide.title}
                      </span>
                    </>
                  )}
                </h1>

                {/* Description */}
                <p className="text-gray-200 text-base md:text-lg font-medium leading-relaxed max-w-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
                  {slide.desc}
                </p>

                {/* Neon Buttons */}
                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <Link 
                    href="/appointments" 
                    className="px-6 py-3.5 bg-gradient-to-r from-[#b534e6] to-blue-600 text-white text-sm font-bold rounded-lg border border-[#36f9f6]/30 shadow-[0_0_15px_rgba(54,249,246,0.2)] hover:shadow-[0_0_25px_rgba(54,249,246,0.5)] hover:scale-[1.02] transition-all duration-300 whitespace-nowrap"
                  >
                    Book Appointment Now
                  </Link>
                  <a 
                    href="#top-doctors" 
                    className="px-6 py-3.5 bg-[#1a1025]/80 backdrop-blur-sm border border-gray-500 text-gray-200 text-sm font-bold rounded-lg hover:border-[#ff7edb] hover:text-[#ff7edb] hover:shadow-[0_0_15px_rgba(255,126,219,0.3)] hover:scale-[1.02] transition-all duration-300 whitespace-nowrap"
                  >
                    Explore Specialists
                  </a>
                </div>

              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}