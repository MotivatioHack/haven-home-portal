import { Clock, CheckCircle2, Info } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Facility {
  image: string;
  title: string;
  description: string;
  features?: string[];
  guidelines?: string[];
  timing?: string;
}

interface FacilityDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  facility: Facility | null;
}

export const FacilityDetailModal = ({ isOpen, onClose, facility }: FacilityDetailModalProps) => {
  if (!facility) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">{facility.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Facility Image */}
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <Info className="w-4 h-4 text-primary" />
              Description
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {facility.description}
            </p>
          </div>

          {/* Features */}
          {facility.features && facility.features.length > 0 && (
            <div>
              <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Features & Benefits
              </h4>
              <ul className="space-y-2">
                {facility.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Guidelines */}
          {facility.guidelines && facility.guidelines.length > 0 && (
            <div className="bg-muted/50 rounded-md p-4">
              <h4 className="font-medium text-foreground mb-2">Usage Guidelines</h4>
              <ul className="space-y-1">
                {facility.guidelines.map((guideline, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary">•</span>
                    {guideline}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Timing */}
          {facility.timing && (
            <div className="flex items-center gap-2 text-sm border-t border-border pt-4">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-medium text-foreground">Availability:</span>
              <span className="text-muted-foreground">{facility.timing}</span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
