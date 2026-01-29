export const AboutSection = () => {
  return (
    <section id="about" className="society-section bg-[#f5f9fb] dark:bg-muted/50">
      <div className="society-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="society-heading mb-6">About Our Society</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Green Valley Housing Society has been a harmonious residential community since 1998. 
            With over 250 families calling this place home, we take pride in maintaining a clean, 
            safe, and vibrant environment for all our residents.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="society-card">
              <div className="text-4xl font-heading font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
            <div className="society-card">
              <div className="text-4xl font-heading font-bold text-primary mb-2">6</div>
              <p className="text-muted-foreground">Residential Towers</p>
            </div>
            <div className="society-card">
              <div className="text-4xl font-heading font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Security Coverage</p>
            </div>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mt-12 max-w-3xl mx-auto">
            Our dedicated management committee works tirelessly to address your concerns and 
            ensure the smooth functioning of all society amenities. This complaint management 
            portal is designed to streamline communication between residents and the committee.
          </p>
        </div>
      </div>
    </section>
  );
};
