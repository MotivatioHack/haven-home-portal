import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-society.jpg';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 society-container text-center py-20 pt-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight animate-fade-in">
            Welcome to <br />
            <span className="text-society-gold">Green Valley</span> Housing Society
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-slide-up font-body">
            Your trusted community complaint management portal. 
            Submit, track, and resolve society issues efficiently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              to="/login"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-md font-medium text-lg hover:opacity-90 transition-opacity"
            >
              Register Complaint
            </Link>
            <a
              href="#complaints"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/20 text-white border border-white/30 rounded-md font-medium text-lg hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              View Categories
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-lg mx-auto">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold text-white">250+</p>
              <p className="text-sm text-white/80 mt-1">Residents</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold text-white">98%</p>
              <p className="text-sm text-white/80 mt-1">Resolved</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold text-white">24hr</p>
              <p className="text-sm text-white/80 mt-1">Response</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};
