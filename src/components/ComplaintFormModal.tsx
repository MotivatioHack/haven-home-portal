import { useState } from 'react';
import { X, Upload, AlertCircle, CheckCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ComplaintFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: {
    title: string;
    description: string;
  } | null;
}

export const ComplaintFormModal = ({ isOpen, onClose, category }: ComplaintFormModalProps) => {
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    flatNumber: '',
    urgency: 'normal',
    image: null as File | null,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!formData.flatNumber.trim()) {
      newErrors.flatNumber = 'Flat/Block number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate submission
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          subject: '',
          description: '',
          flatNumber: '',
          urgency: 'normal',
          image: null,
        });
        setIsSubmitted(false);
        onClose();
      }, 3000);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  if (!category) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl">Register Complaint</DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
              Complaint Registered Successfully!
            </h3>
            <p className="text-muted-foreground">
              Your complaint has been submitted. You will be notified once it is addressed.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Category - Read Only */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Complaint Category
              </label>
              <input
                type="text"
                value={category.title}
                readOnly
                className="w-full px-4 py-2 rounded-md border border-input bg-muted text-muted-foreground cursor-not-allowed"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Subject / Title *
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Brief subject of your complaint"
              />
              {errors.subject && (
                <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Describe your complaint in detail..."
              />
              {errors.description && (
                <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.description}
                </p>
              )}
            </div>

            {/* Flat Number */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Flat / Block Number *
              </label>
              <input
                type="text"
                value={formData.flatNumber}
                onChange={(e) => setFormData({ ...formData, flatNumber: e.target.value })}
                className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="e.g., A-101"
              />
              {errors.flatNumber && (
                <p className="text-destructive text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.flatNumber}
                </p>
              )}
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Urgency Level
              </label>
              <select
                value={formData.urgency}
                onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="normal">Normal</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">
                Attach Image (Optional)
              </label>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 px-4 py-2 rounded-md border border-input bg-background cursor-pointer hover:bg-muted transition-colors">
                  <Upload className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {formData.image ? formData.image.name : 'Choose file'}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
                {formData.image && (
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, image: null })}
                    className="text-destructive text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="society-btn-primary w-full mt-6">
              Submit Complaint
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
