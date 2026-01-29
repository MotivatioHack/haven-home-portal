import { Pin, Calendar, AlertCircle, Info } from 'lucide-react';

const notices = [
  {
    type: 'urgent',
    title: 'Water Tank Cleaning',
    date: 'Jan 30, 2026',
    description: 'Water supply will be interrupted from 10 AM to 4 PM for tank cleaning.',
  },
  {
    type: 'info',
    title: 'Monthly Maintenance Meeting',
    date: 'Feb 5, 2026',
    description: 'All residents are requested to attend the meeting at the community hall.',
  },
  {
    type: 'general',
    title: 'Holi Celebration',
    date: 'Mar 14, 2026',
    description: 'Society Holi celebration at the garden area. All families are welcome.',
  },
  {
    type: 'info',
    title: 'New Security Protocol',
    date: 'Feb 1, 2026',
    description: 'All visitors must register at the gate. New intercom system installed.',
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
  return (
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
                className={`society-card border-l-4 ${getNoticeStyle(notice.type)}`}
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
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button className="society-btn-secondary">View All Notices</button>
        </div>
      </div>
    </section>
  );
};
