import HeroBanner from '@/components/home/HeroBanner';
import TopDoctors from '@/components/home/TopDoctors';
import Specialities from '@/components/home/Specialities';
import WorkingProcess from '@/components/home/WorkingProcess';

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      {/* ১. হিরো ব্যানার সেকশন (Swiper.js স্লাইডার) */}
      <HeroBanner />

      {/* ২. টপ রেটেড ডক্টর সেকশন (৩টি ডাইনামিক কার্ড) */}
      <TopDoctors />

      {/* ৩. অতিরিক্ত সেকশন ১: স্পেশালিটি */}
      <Specialities />

      {/* ৪. অতিরিক্ত সেকশন ২: কাজের ধাপসমূহ */}
      <WorkingProcess />
    </div>
  );
}