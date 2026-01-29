import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ComplaintCategories } from '@/components/ComplaintCategories';
import { HowItWorks } from '@/components/HowItWorks';
import { NoticeBoard } from '@/components/NoticeBoard';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ComplaintCategories />
      <HowItWorks />
      <NoticeBoard />
      <FacilitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
