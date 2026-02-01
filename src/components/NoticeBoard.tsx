import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pin, Calendar, AlertCircle, Info } from 'lucide-react';
import { NoticeDetailModal } from './NoticeDetailModal';

const notices = [
  {
    type: 'urgent',
    title: 'Water Tank Cleaning',
    date: 'Jan 30, 2026',
    description: 'Water supply will be interrupted from 10 AM to 4 PM for tank cleaning.',
    fullMessage: 'Dear Residents,\n\nPlease be informed that the water supply will be temporarily interrupted on January 30, 2026, from 10:00 AM to 4:00 PM. This is due to the scheduled cleaning and maintenance of all overhead water tanks in the society.\n\nWe request all residents to store sufficient water for their daily needs before 10:00 AM.\n\nWe apologize for any inconvenience caused and appreciate your cooperation in maintaining the hygiene standards of our society.\n\nFor any emergency water requirements, please contact the security desk.',
  },
  {
    type: 'info',
    title: 'Monthly Maintenance Meeting',
    date: 'Feb 5, 2026',
    description: 'All residents are requested to attend the meeting at the community hall.',
    fullMessage: 'Dear Residents,\n\nYou are cordially invited to the Monthly Maintenance Meeting scheduled for February 5, 2026, at 6:00 PM in the Community Hall.\n\nAgenda:\n1. Review of pending complaints and resolution status\n2. Discussion on upcoming maintenance projects\n3. Budget review for Q1 2026\n4. Open floor for suggestions and feedback\n\nAt least one member from each flat is requested to attend. Your participation is valuable for the smooth functioning of our society.\n\nLight refreshments will be served after the meeting.',
  },
  {
    type: 'general',
    title: 'Holi Celebration',
    date: 'Mar 14, 2026',
    description: 'Society Holi celebration at the garden area. All families are welcome.',
    fullMessage: 'Dear Residents,\n\nGreen Valley Housing Society is excited to announce our annual Holi celebration!\n\nDate: March 14, 2026\nTime: 10:00 AM onwards\nVenue: Society Garden Area\n\nHighlights:\n• Organic colors will be provided\n• DJ and music arrangements\n• Traditional Holi snacks (gujiya, thandai)\n• Rain dance area for children\n• Photography booth\n\nAll families are welcome to participate. Please use organic colors only and help us keep the celebration eco-friendly.\n\nKindly RSVP at the society office by March 10, 2026.',
  },
  {
    type: 'info',
    title: 'New Security Protocol',
    date: 'Feb 1, 2026',
    description: 'All visitors must register at the gate. New intercom system installed.',
    fullMessage: 'Dear Residents,\n\nAs part of our continuous efforts to enhance security, we are implementing new security protocols effective February 1, 2026.\n\nNew Measures:\n1. All visitors must register at the main gate with valid ID proof\n2. New digital intercom system has been installed in all flats\n3. Delivery personnel will be allowed only after resident confirmation\n4. All domestic help must carry society-issued ID cards\n5. CCTV coverage has been extended to all entry/exit points\n\nPlease collect your new intercom user guide from the society office.\n\nFor any queries regarding the new system, contact the security supervisor between 9 AM - 6 PM.',
  },
];

const getNoticeStyle = (type: string) => {
  switch (type) {
    case 'urgent':
      return 'border-l-destructive bg-destructive/5';
    case 'info':
      return 'border-l-primary bg-primary/5';
    default:
      return 'border-l-accent bg-accent/5';
  }
};

const getNoticeIcon = (type: string) => {
  switch (type) {
    case 'urgent':
      return AlertCircle;
    case 'info':
      return Info;
    default:
      return Pin;
  }
};

export const NoticeBoard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState<typeof notices[0] | null>(null);
  const navigate = useNavigate();

  const handleNoticeClick = (notice: typeof notices[0]) => {
    setSelectedNotice(notice);
    setIsModalOpen(true);
  };

  const handleViewAllNotices = () => {
    navigate('/notices');
  };

  return (
    <>
      <section id="notices" className="society-section bg-society-cream">
        <div className="society-container">
          <div className="text-center mb-12">
            <h2 className="society-heading mb-4">Notice Board</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest announcements from the management
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {notices.map((notice, index) => {
              const IconComponent = getNoticeIcon(notice.type);
              return (
                <div
                  key={index}
                  onClick={() => handleNoticeClick(notice)}
                  className={`society-card border-l-4 ${getNoticeStyle(notice.type)} cursor-pointer hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Pin className="w-5 h-5 text-accent rotate-45" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <IconComponent className={`w-4 h-4 ${
                          notice.type === 'urgent' ? 'text-destructive' : 'text-primary'
                        }`} />
                        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {notice.type}
                        </span>
                      </div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">
                        {notice.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                        <Calendar className="w-3 h-3" />
                        {notice.date}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {notice.description}
                      </p>
                      <p className="text-xs text-primary mt-2 font-medium">
                        Click to view full details →
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <button onClick={handleViewAllNotices} className="society-btn-secondary">View All Notices</button>
          </div>
        </div>
      </section>

      <NoticeDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        notice={selectedNotice}
      />
    </>
  );
};
