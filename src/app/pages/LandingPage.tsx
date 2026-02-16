import React, { useState } from 'react';
import { Moon, Sun, Video, MessageSquare, Package, Search } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from '../components/ui/button';
import { RoleSelectionModal } from '../components/RoleSelectionModal';
import logo from '../../assets/logo.png';

export function LandingPage() {
  const { theme, toggleTheme } = useTheme();
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

  const features = [
    {
      icon: Video,
      title: 'Video-Based Support',
      description: 'Structured video tutorials for every product feature and common issue.',
    },
    {
      icon: Search,
      title: 'Issue-Based Troubleshooting',
      description: 'Find solutions quickly with categorized problem-solving guides.',
    },
    {
      icon: Package,
      title: 'Product-Specific Access',
      description: 'Access support content tailored to your purchased machines.',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat Assistance',
      description: 'Connect with our support team for real-time help when you need it.',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Purchase from CCC',
      description: 'Buy any CCC machine from our authorized dealers.',
    },
    {
      number: '02',
      title: 'Receive Portal Access',
      description: 'Get your exclusive portal credentials after purchase.',
    },
    {
      number: '03',
      title: 'Access Machine Support',
      description: 'Browse comprehensive support materials for your products.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-muted dark:from-card dark:via-card dark:to-card transition-colors duration-200">
      {/* Top Navbar */}
      <nav className="border-b border-border dark:border-border bg-white/80 dark:bg-card/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <img src={logo} alt="CCC Support Portal" className="h-10" />
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="transition-colors duration-200"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
            
            <Button
              onClick={() => setIsRoleModalOpen(true)}
              className="bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)]"
            >
              Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">🎯 Premier Customer Support</span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-[#111111] dark:text-[#FFFFFF] tracking-tight">
            CCC Support Portal
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Exclusive digital support platform for CCC machine owners with comprehensive resources and live assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={() => setIsRoleModalOpen(true)}
              className="bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] h-11 px-8 text-base font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="h-11 px-8 text-base font-medium hover:bg-muted transition-colors"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 py-16 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-[#111111] dark:text-[#FFFFFF] tracking-tight">
              Why Choose CCC Support Portal
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Access comprehensive support resources designed specifically for your CCC machines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white dark:bg-card border border-border rounded-lg p-5 transition-all duration-200 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2 text-[#111111] dark:text-[#FFFFFF]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-[#111111] dark:text-[#FFFFFF] tracking-tight">
              How It Works
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Get started with CCC Support Portal in three simple steps.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connecting Line - Desktop only */}
              <div className="hidden md:block absolute top-[28px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-border to-transparent" />
              
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex flex-col items-center">
                  {/* Number Badge with White Background */}
                  <div className="relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-full bg-white dark:bg-card border-[3px] border-primary mb-4">
                    <span className="font-heading text-lg font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-heading text-lg font-semibold mb-2 text-[#111111] dark:text-[#FFFFFF]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Mobile Connecting Line - Below badge */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden w-[2px] h-8 bg-gradient-to-b from-border to-transparent my-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white/80 dark:bg-card/80 backdrop-blur-sm py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-sm text-muted-foreground">
              © 2026 CCC Support Portal. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="mailto:support@ccc.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                support@ccc.com
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Role Selection Modal */}
      <RoleSelectionModal
        isOpen={isRoleModalOpen}
        onClose={() => setIsRoleModalOpen(false)}
      />
    </div>
  );
}
