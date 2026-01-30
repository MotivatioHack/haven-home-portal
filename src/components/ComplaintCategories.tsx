import { useState } from 'react';
import { 
  Droplets, 
  Lightbulb, 
  ArrowUpDown, 
  Car, 
  Trash2, 
  Camera, 
  Volume2, 
  Wrench 
} from 'lucide-react';
import { ComplaintFormModal } from './ComplaintFormModal';
import { Button } from './ui/button';

const categories = [
  {
    icon: Droplets,
    title: 'Water Supply',
    description: 'Leakage, pressure issues, tank cleaning',
  },
  {
    icon: Lightbulb,
    title: 'Electrical',
    description: 'Common area lighting, meter issues',
  },
  {
    icon: ArrowUpDown,
    title: 'Lift & Elevator',
    description: 'Maintenance, breakdowns, safety',
  },
  {
    icon: Car,
    title: 'Parking',
    description: 'Slot disputes, unauthorized parking',
  },
  {
    icon: Trash2,
    title: 'Cleanliness',
    description: 'Garbage, common area hygiene',
  },
  {
    icon: Camera,
    title: 'Security & CCTV',
    description: 'Gate security, camera issues',
  },
  {
    icon: Volume2,
    title: 'Noise & Disturbance',
    description: 'Loud music, construction noise',
  },
  {
    icon: Wrench,
    title: 'General Maintenance',
    description: 'Plumbing, civil work, repairs',
  },
];

export const ComplaintCategories = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<{
    title: string;
    description: string;
  } | null>(null);

  const handleCategoryClick = (category: { title: string; description: string }) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCTAClick = () => {
    // Open modal with first category as default, user can select from dropdown
    setSelectedCategory(null);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="complaints" className="society-section bg-muted/50">
        <div className="society-container">
          <div className="text-center mb-12">
            <h2 className="society-heading mb-4">Complaint Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select the appropriate category to register your complaint. 
              Our team will address it within 24-48 hours.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category) => (
              <div
                key={category.title}
                onClick={() => handleCategoryClick(category)}
                className="society-card group cursor-pointer hover:border-primary/50 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ))}
          </div>

          {/* Helper text and CTA button */}
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Select a category above to register your complaint.
            </p>
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="px-8"
            >
              Register a Complaint
            </Button>
          </div>
        </div>
      </section>

      <ComplaintFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category={selectedCategory}
      />
    </>
  );
};
