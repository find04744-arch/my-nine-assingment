import HeroBanner from '@/components/home/HeroBanner';
import TopDoctors from '@/components/home/TopDoctors';
import Specialities from '@/components/home/Specialities';
import WorkingProcess from '@/components/home/WorkingProcess';

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      
      <HeroBanner />

     
      <TopDoctors />

 
      <Specialities />

      
      <WorkingProcess />
    </div>
  );
}