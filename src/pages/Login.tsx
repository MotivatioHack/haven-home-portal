import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Eye, EyeOff } from 'lucide-react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { ForgotPasswordModal } from '@/components/ForgotPasswordModal';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [formData, setFormData] = useState({
    flatNumber: '',
    password: '',
    rememberMe: false,
  });
  const [error, setError] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      navigate('/blank');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const registeredUser = localStorage.getItem('registeredUser');
    if (!registeredUser) {
      setError('No registered user found. Please register first.');
      return;
    }

    const user = JSON.parse(registeredUser);
    const flatId = `${user.tower}-${user.flatNumber}`;

    const flatMatches = 
      formData.flatNumber === flatId || 
      formData.flatNumber === user.flatNumber ||
      formData.flatNumber.toUpperCase() === flatId.toUpperCase();

    if (flatMatches && formData.password === user.password) {
      localStorage.setItem('isLoggedIn', 'true');
      toast({
        title: 'Login Successful',
        description: `Welcome back, ${user.fullName}!`,
      });
      navigate('/blank');
    } else {
      setError('Invalid flat number or password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-8 relative">

      {/* Theme switcher */}
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>

      {/* Back to home */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        ← Back to Home
      </Link>

      {/* Login Card */}
      <div className="w-full max-w-md relative z-10">
        <div className="society-card p-8">

          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-4">
              <Building2 className="w-9 h-9 text-primary-foreground" />
            </div>
            <h1 className="font-heading text-2xl font-bold text-foreground">
              Welcome Back
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Green Valley Housing Society
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Flat Number / User ID
              </label>
              <input
                type="text"
                value={formData.flatNumber}
                onChange={(e) =>
                  setFormData({ ...formData, flatNumber: e.target.value })
                }
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="e.g., A-101 or GVHS001"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-4 py-3 pr-12 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) =>
                    setFormData({ ...formData, rememberMe: e.target.checked })
                  }
                  className="w-4 h-4"
                />
                <span className="text-sm text-muted-foreground">
                  Remember me
                </span>
              </label>
              <button 
                type="button"
                onClick={() => setForgotPasswordOpen(true)}
                className="text-sm text-primary hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="society-btn-primary w-full py-3 text-base"
            >
              Sign In
            </button>

          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                New resident?
              </span>
            </div>
          </div>

          <Link
            to="/register"
            className="society-btn-secondary w-full block text-center"
          >
            Register Your Flat
          </Link>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          Having trouble? Contact the society office at{' '}
          <a href="tel:+912212345678" className="text-primary hover:underline">
            +91 22 1234 5678
          </a>
        </p>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal 
        open={forgotPasswordOpen} 
        onOpenChange={setForgotPasswordOpen} 
      />
    </div>
  );
};

export default Login;
