import { Calendar, AlertCircle, Info, Pin } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Notice {
  type: string;
  title: string;
  date: string;
  description: string;
  fullMessage?: string;
}

interface NoticeDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  notice: Notice | null;
}

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

export const NoticeDetailModal = ({ isOpen, onClose, notice }: NoticeDetailModalProps) => {
  if (!notice) return null;

  const IconComponent = getNoticeIcon(notice.type);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <IconComponent className={`w-5 h-5 ${
              notice.type === 'urgent' ? 'text-destructive' : 'text-primary'
            }`} />
            <span className={`text-xs font-medium uppercase tracking-wide px-2 py-0.5 rounded ${
              notice.type === 'urgent' 
                ? 'bg-destructive/10 text-destructive' 
                : notice.type === 'info'
                ? 'bg-primary/10 text-primary'
                : 'bg-accent/10 text-accent'
            }`}>
              {notice.type}
            </span>
          </div>
          <DialogTitle className="font-heading text-xl">{notice.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>{notice.date}</span>
          </div>

          <div className="border-t border-border pt-4">
            <h4 className="font-medium text-foreground mb-2">Notice Details</h4>
            <p className="text-muted-foreground leading-relaxed">
              {notice.fullMessage || notice.description}
            </p>
          </div>

          <div className="bg-muted/50 rounded-md p-4 text-sm">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Issued by:</span> Green Valley Housing Society Management Committee
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
