import { Navbar } from '@/components/Navbar';
import { NoticeBoard } from '@/components/NoticeBoard';
import { Footer } from '@/components/Footer';

const Notices = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <NoticeBoard />
      </div>
      <Footer />
    </div>
  );
};

export default Notices;
