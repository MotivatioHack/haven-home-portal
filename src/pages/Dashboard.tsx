import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Building2, LogOut, Home, FileText, Bell, Users } from 'lucide-react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const registeredUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="society-container">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-heading text-lg font-bold text-foreground">Green Valley</h1>
                <p className="text-xs text-muted-foreground">Resident Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ThemeSwitcher />
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="society-container py-8">
        {/* Welcome Section */}
        <div className="society-card p-6 mb-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
            Welcome, {registeredUser.fullName || 'Resident'}!
          </h2>
          <p className="text-muted-foreground">
            Flat: {registeredUser.tower}-{registeredUser.flatNumber} | Email: {registeredUser.email}
          </p>
        </div>

        {/* Quick Actions */}
        <h3 className="font-heading text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link to="/" className="society-card p-6 hover:border-primary transition-colors">
            <Home className="w-8 h-8 text-primary mb-3" />
            <h4 className="font-medium text-foreground">Home</h4>
            <p className="text-sm text-muted-foreground">Back to homepage</p>
          </Link>
          <Link to="/complaints" className="society-card p-6 hover:border-primary transition-colors">
            <FileText className="w-8 h-8 text-primary mb-3" />
            <h4 className="font-medium text-foreground">File Complaint</h4>
            <p className="text-sm text-muted-foreground">Submit a new complaint</p>
          </Link>
          <Link to="/notices" className="society-card p-6 hover:border-primary transition-colors">
            <Bell className="w-8 h-8 text-primary mb-3" />
            <h4 className="font-medium text-foreground">Notices</h4>
            <p className="text-sm text-muted-foreground">View society notices</p>
          </Link>
          <Link to="/facilities" className="society-card p-6 hover:border-primary transition-colors">
            <Users className="w-8 h-8 text-primary mb-3" />
            <h4 className="font-medium text-foreground">Facilities</h4>
            <p className="text-sm text-muted-foreground">Book amenities</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
