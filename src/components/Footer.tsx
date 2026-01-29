import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';
import buildingWatermark from '@/assets/building-watermark.png';

export const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Watermark */}
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url(${buildingWatermark})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
        }}
      />

      <div className="society-container py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-background">
                  Green Valley
                </h3>
                <p className="text-xs text-background/60">Housing Society</p>
              </div>
            </div>
            <p className="text-sm text-background/70 max-w-md">
              A premier residential community dedicated to providing a safe, clean, 
              and harmonious living environment for all our residents since 1998.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#complaints" className="hover:text-background transition-colors">File Complaint</a></li>
              <li><a href="#notices" className="hover:text-background transition-colors">Notices</a></li>
              <li><a href="#facilities" className="hover:text-background transition-colors">Facilities</a></li>
              <li><Link to="/login" className="hover:text-background transition-colors">Resident Login</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-background">Contact Info</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 22 1234 5678
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                office@greenvalley.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Sector 15, New Town<br />Mumbai - 400001</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© 2026 Green Valley Housing Society. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-background transition-colors">Society Rules</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
