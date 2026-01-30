import { useState } from 'react';
import facilityLift from '@/assets/facility-lift.jpg';
import facilityParking from '@/assets/facility-parking.jpg';
import facilityGarden from '@/assets/facility-garden.jpg';
import facilitySecurity from '@/assets/facility-security.jpg';
import { FacilityDetailModal } from './FacilityDetailModal';

const facilities = [
  {
    image: facilityLift,
    title: 'Modern Elevators',
    description: 'High-speed elevators in all towers with backup power',
    features: [
      'High-speed automatic doors with safety sensors',
      'Emergency backup power for uninterrupted service',
      'Intercom system connected to security room',
      'Stainless steel interior with anti-bacterial coating',
      'Weight capacity: 8 persons / 600 kg',
    ],
    guidelines: [
      'Do not overload the elevator beyond capacity',
      'Keep children away from door edges',
      'Report any unusual sounds or movements immediately',
      'Use stairs in case of fire or emergency',
    ],
    timing: '24/7 availability',
  },
  {
    image: facilityParking,
    title: 'Covered Parking',
    description: 'Designated parking slots for all residents',
    features: [
      'Covered parking protects vehicles from weather',
      'One designated slot per flat',
      'Well-lit parking area with CCTV surveillance',
      'Separate two-wheeler parking zone',
      'Visitor parking available near main gate',
    ],
    guidelines: [
      'Park only in your designated slot',
      'Do not block common pathways',
      'Visitor vehicles must register at gate',
      'No car washing in parking area',
      'Report any vehicle damage immediately',
    ],
    timing: '24/7 access with security monitoring',
  },
  {
    image: facilityGarden,
    title: 'Landscaped Garden',
    description: 'Beautiful green spaces with walking paths',
    features: [
      'Jogging and walking tracks around the perimeter',
      'Children\'s play area with safe equipment',
      'Gazebo and seating areas for relaxation',
      'Flowering plants and seasonal gardens',
      'Open lawn for community gatherings',
    ],
    guidelines: [
      'Do not pluck flowers or damage plants',
      'Children below 10 must be supervised',
      'No littering - use designated dustbins',
      'Pets must be on leash at all times',
      'Maintain silence after 9 PM',
    ],
    timing: '6:00 AM - 9:00 PM',
  },
  {
    image: facilitySecurity,
    title: '24/7 Security',
    description: 'Manned gates with CCTV surveillance',
    features: [
      'Round-the-clock security personnel at all entry points',
      'CCTV cameras covering all common areas',
      'Digital visitor management system',
      'Emergency panic buttons in common areas',
      'Night patrol service every hour',
    ],
    guidelines: [
      'Always carry your resident ID card',
      'Inform security when expecting visitors',
      'Report suspicious activities immediately',
      'Register all domestic help at society office',
      'Emergency contact: Security desk - Ext. 100',
    ],
    timing: '24/7 manned security',
  },
];

export const FacilitiesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFacility, setSelectedFacility] = useState<typeof facilities[0] | null>(null);

  const handleFacilityClick = (facility: typeof facilities[0]) => {
    setSelectedFacility(facility);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="facilities" className="society-section bg-background">
        <div className="society-container">
          <div className="text-center mb-12">
            <h2 className="society-heading mb-4">Society Facilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              World-class amenities for comfortable living
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility) => (
              <div 
                key={facility.title} 
                className="group cursor-pointer"
                onClick={() => handleFacilityClick(facility)}
              >
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {facility.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {facility.description}
                </p>
                <p className="text-xs text-primary mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Click for details →
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FacilityDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        facility={selectedFacility}
      />
    </>
  );
};
