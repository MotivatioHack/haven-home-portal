import facilityLift from '@/assets/facility-lift.jpg';
import facilityParking from '@/assets/facility-parking.jpg';
import facilityGarden from '@/assets/facility-garden.jpg';
import facilitySecurity from '@/assets/facility-security.jpg';

const facilities = [
  {
    image: facilityLift,
    title: 'Modern Elevators',
    description: 'High-speed elevators in all towers with backup power',
  },
  {
    image: facilityParking,
    title: 'Covered Parking',
    description: 'Designated parking slots for all residents',
  },
  {
    image: facilityGarden,
    title: 'Landscaped Garden',
    description: 'Beautiful green spaces with walking paths',
  },
  {
    image: facilitySecurity,
    title: '24/7 Security',
    description: 'Manned gates with CCTV surveillance',
  },
];

export const FacilitiesSection = () => {
  return (
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
            <div key={facility.title} className="group">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
