import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';

interface ForgotPasswordModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ForgotPasswordModal = ({ open, onOpenChange }: ForgotPasswordModalProps) => {
  const [identifier, setIdentifier] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState<'verify' | 'reset'>('verify');
  const [error, setError] = useState('');

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const registeredUser = localStorage.getItem('registeredUser');
    if (!registeredUser) {
      setError('No registered user found. Please register first.');
      return;
    }

    const user = JSON.parse(registeredUser);
    const flatId = `${user.tower}-${user.flatNumber}`;

    if (identifier === user.email || identifier === flatId || identifier === user.flatNumber) {
      setStep('reset');
      toast({
        title: 'User Verified',
        description: 'Please set your new password.',
      });
    } else {
      setError('No account found with this email or flat number.');
    }
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    const registeredUser = JSON.parse(localStorage.getItem('registeredUser') || '{}');
    registeredUser.password = newPassword;
    localStorage.setItem('registeredUser', JSON.stringify(registeredUser));

    toast({
      title: 'Password Reset Successful',
      description: 'You can now login with your new password.',
    });

    // Reset and close
    setIdentifier('');
    setNewPassword('');
    setConfirmPassword('');
    setStep('verify');
    onOpenChange(false);
  };

  const handleClose = () => {
    setIdentifier('');
    setNewPassword('');
    setConfirmPassword('');
    setStep('verify');
    setError('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Forgot Password</DialogTitle>
          <DialogDescription>
            {step === 'verify'
              ? 'Enter your registered email or flat number to verify your account.'
              : 'Set your new password.'}
          </DialogDescription>
        </DialogHeader>

        {step === 'verify' ? (
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email or Flat Number
              </label>
              <input
                type="text"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                placeholder="e.g., your@email.com or A-101"
                required
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button type="submit" className="society-btn-primary w-full py-3">
              Verify Account
            </button>
          </form>
        ) : (
          <form onSubmit={handleReset} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                placeholder="Min. 8 characters"
                required
                minLength={8}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                placeholder="Re-enter new password"
                required
              />
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            <button type="submit" className="society-btn-primary w-full py-3">
              Reset Password
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
