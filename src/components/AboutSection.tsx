import societyBuilding from '@/assets/society-building.jpg';

export const AboutSection = () => {
  return (
    <section id="about" className="society-section bg-[#f5f9fb] dark:bg-muted/50">
      <div className="society-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-left">
            <h2 className="society-heading mb-6">About Our Society</h2>
            <div className="w-20 h-1 bg-primary mb-8 rounded-full" />
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              Green Valley Housing Society has been a harmonious residential community since 1998. 
              With over 250 families calling this place home, we take pride in maintaining a clean, 
              safe, and vibrant environment for all our residents.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="society-card text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">25+</div>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div className="society-card text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">6</div>
                <p className="text-sm text-muted-foreground">Residential Towers</p>
              </div>
              <div className="society-card text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Security Coverage</p>
              </div>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              Our dedicated management committee works tirelessly to address your concerns and 
              ensure the smooth functioning of all society amenities. This complaint management 
              portal is designed to streamline communication between residents and the committee.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="order-first lg:order-last">
            <img 
              src={societyBuilding} 
              alt="Green Valley Housing Society residential buildings with greenery"
              className="w-full h-auto rounded-xl shadow-lg object-cover max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
