import React, { useState, useEffect } from 'react';
import { Home, Sparkles, Users, Heart, Brain, TrendingUp, Download, Sun, Moon, Menu, X, Shield, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FloatingNavProps {
  className?: string;
}

export const FloatingNav = ({ className = '' }: FloatingNavProps) => {
  const [isDark, setIsDark] = useState(() => {
    // Initialize from localStorage or system preference
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    return !window.matchMedia('(prefers-color-scheme: light)').matches;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply theme to document with proper persistence
    const theme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    
    // Remove all theme classes and attributes first
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.removeAttribute('data-theme');
    
    // Apply the correct theme
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.add(theme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Shield, label: 'Features', href: '#features' },
    { icon: Users, label: 'Stories', href: '#testimonials' },
    { icon: Brain, label: 'AI Match', href: '#ai-matching' },
    { icon: Heart, label: 'Healers', href: '#practitioners' },
    { icon: TrendingUp, label: 'Growth', href: '#growth' },
    { icon: Globe, label: 'Impact', href: '#impact' },
    { icon: Download, label: 'Apps', href: '#download' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Floating Navigation */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrollY > 100 ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-90'
      } ${className}`}>
        <div className="nav-glass px-6 py-3 flex items-center gap-4">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2 mr-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-chakra-crown to-chakra-root flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-semibold text-foreground hidden sm:block">Klear Karma</span>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.href)}
                  className="nav-item-glass text-foreground/80 hover:text-foreground hover:bg-white/10 transition-all duration-300 group hover:backdrop-blur-md"
                >
                  <Icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform text-chakra-crown" />
                  <span className="text-sm text-gradient-soft">{item.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="theme-toggle-glass ml-2 p-2 text-foreground/80 hover:text-foreground hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 group"
          >
            {isDark ? (
              <Sun className="w-4 h-4 group-hover:rotate-180 group-hover:scale-110 transition-all duration-500 text-chakra-solar hover:text-chakra-crown" />
            ) : (
              <Moon className="w-4 h-4 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500 text-chakra-third-eye hover:text-chakra-crown" />
            )}
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden theme-toggle-glass ml-2 p-2 text-foreground/80 hover:text-foreground hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300"
          >
            {isMenuOpen ? (
              <X className="w-4 h-4 text-chakra-crown" />
            ) : (
              <Menu className="w-4 h-4 text-chakra-crown" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-80 max-w-[90vw]">
            <div className="nav-glass p-6 space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    onClick={() => scrollToSection(item.href)}
                    className="w-full justify-start text-foreground/80 hover:text-foreground hover:bg-white/10 transition-all duration-300 group hover:backdrop-blur-md"
                  >
                    <Icon className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform text-chakra-crown" />
                    <span className="text-gradient-soft">{item.label}</span>
                  </Button>
                );
              })}
              
              <Button
                variant="ghost"
                onClick={toggleTheme}
                className="w-full justify-start text-foreground/80 hover:text-foreground hover:bg-white/10 transition-all duration-300 group hover:backdrop-blur-md"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 mr-3 group-hover:rotate-180 group-hover:scale-110 transition-all duration-500 text-chakra-solar" />
                ) : (
                  <Moon className="w-5 h-5 mr-3 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500 text-chakra-third-eye" />
                )}
                <span className="text-gradient-soft">{isDark ? 'Switch to Light' : 'Switch to Dark'}</span>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingNav;