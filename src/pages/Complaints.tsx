import { Navbar } from '@/components/Navbar';
import { ComplaintCategories } from '@/components/ComplaintCategories';
import { HowItWorks } from '@/components/HowItWorks';
import { Footer } from '@/components/Footer';

const Complaints = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <ComplaintCategories />
        <HowItWorks />
      </div>
      <Footer />
    </div>
  );
};

export default Complaints;
