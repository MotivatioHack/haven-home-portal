import { ClipboardList, Send, Eye, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    step: '01',
    title: 'Register',
    description: 'Login and fill the complaint form with details',
  },
  {
    icon: Send,
    step: '02',
    title: 'Submit',
    description: 'Submit your complaint to the management',
  },
  {
    icon: Eye,
    step: '03',
    title: 'Track',
    description: 'Monitor status updates in real-time',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Resolved',
    description: 'Get notified when issue is resolved',
  },
];

export const HowItWorks = () => {
  return (
    <section className="society-section bg-background">
      <div className="society-container">
        <div className="text-center mb-12">
          <h2 className="society-heading mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple four-step process to get your issues resolved quickly
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-border" />
          
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center">
              {/* Step circle */}
              <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-card border-2 border-primary flex items-center justify-center">
                <item.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
              </div>
              
              {/* Step number badge */}
              <div className="absolute top-0 right-1/2 transform translate-x-14 -translate-y-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                {item.step}
              </div>

              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
