import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AnimatedOrb } from '@/components/ui/animated-orb';
import { FloatingNav } from '@/components/ui/floating-nav';
import { 
  Sparkles, 
  Shield, 
  Heart, 
  Users, 
  Brain,
  Smartphone,
  Download,
  Star,
  CheckCircle,
  TrendingUp,
  Globe,
  Play,
  ChevronDown,
  Zap,
  Award,
  BarChart3,
  MapPin,
  Search,
  Wand2,
  Stethoscope,
  Gem,
  Music,
  Flame,
  Eye,
  Circle,
  Wind
} from 'lucide-react';
import heroImage from '@/assets/hero-chakra-meditation.jpg';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const heroSection = document.getElementById('home');
      const fogOverlay = document.getElementById('fog-overlay');
      
      if (heroSection && fogOverlay) {
        const rect = heroSection.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        fogOverlay.style.setProperty('--mouse-x', `${x}%`);
        fogOverlay.style.setProperty('--mouse-y', `${y}%`);
        
        // Add sparkle effect
        const newSparkle = {
          id: Date.now() + Math.random(),
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        };
        
        setSparkles(prev => [...prev.slice(-5), newSparkle]);
        
        // Remove sparkle after animation
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 1000);
      }
    };

    const heroSection = document.getElementById('home');
    if (heroSection) {
      heroSection.addEventListener('mousemove', handleMouseMove);
      return () => heroSection.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const stats = [
    { value: '500K+', label: 'Market Practitioners', icon: 'users' },
    { value: '87%', label: 'AI Match Potential', icon: 'brain' },
    { value: '200+', label: 'Healing Modalities', icon: 'heart' },
    { value: '$24B', label: 'Market Opportunity', icon: 'shield' }
  ];

  const testimonials = [
    {
      name: 'Industry Research',
      role: 'Market Analysis',
      rating: 5,
      text: 'The healing industry lacks standardized verification. Platforms like Klear Karma could revolutionize practitioner credibility.',
      avatar: 'BarChart3',
      outcome: 'Market validation'
    },
    {
      name: 'Wellness Trends',
      role: 'Global Insights',
      rating: 5,
      text: 'AI-powered matching in wellness shows 300% better outcomes than traditional discovery methods.',
      avatar: 'Globe',
      outcome: 'Research backed'
    },
    {
      name: 'Community Need',
      role: 'User Research',
      rating: 5,
      text: '89% of wellness seekers want verified practitioners but struggle to find trustworthy platforms.',
      avatar: 'Search',
      outcome: 'Proven demand'
    }
  ];

  const getAvatarIcon = (iconName: string) => {
    const iconProps = { className: "h-8 w-8" };
    switch (iconName) {
      case 'BarChart3': return <BarChart3 {...iconProps} />;
      case 'Globe': return <Globe {...iconProps} />;
      case 'Search': return <Search {...iconProps} />;
      default: return <Circle {...iconProps} />;
    }
  };

  const practitioners = [
    { name: 'Sound Healing', specialty: 'Vibrational Balance', rating: '15K+', sessions: 'Practitioners', image: 'Music' },
    { name: 'Chakra Healing', specialty: 'Energy Center Alignment', rating: '25K+', sessions: 'Specialists', image: 'Circle' },
    { name: 'Reiki', specialty: 'Energy Healing', rating: '30K+', sessions: 'Masters', image: 'Sparkles' },
    { name: 'Crystal Healing', specialty: 'Energy & Vibrational', rating: '8K+', sessions: 'Healers', image: 'Gem' },
    { name: 'Breathwork', specialty: 'Emotional Freedom', rating: '12K+', sessions: 'Practitioners', image: 'Wind' },
    { name: 'Ayurveda', specialty: 'Ancient Indian Healing', rating: '22K+', sessions: 'Consultants', image: 'Stethoscope' }
  ];

  const getPractitionerIcon = (iconName: string) => {
    const iconProps = { className: "h-8 w-8" };
    switch (iconName) {
      case 'Wand2': return <Wand2 {...iconProps} />;
      case 'Stethoscope': return <Stethoscope {...iconProps} />;
      case 'Brain': return <Brain {...iconProps} />;
      case 'Gem': return <Gem {...iconProps} />;
      case 'Music': return <Music {...iconProps} />;
      case 'Sparkles': return <Sparkles {...iconProps} />;
      case 'Circle': return <Circle {...iconProps} />;
      case 'Wind': return <Wind {...iconProps} />;
      default: return <Circle {...iconProps} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <FloatingNav />
      
      {/* Section 1: Hero with Immersive 3D Elements */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-textured">
        {/* Premium Mesh Background */}
        <div className="absolute inset-0 bg-mesh-premium"></div>
        <div className="absolute inset-0 bg-gradient-radial"></div>
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Chakra meditation and healing" 
            className="w-full h-full object-cover opacity-20 animate-float"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-mesh opacity-15 animate-gradient"></div>
        
        {/* Interactive Fog Overlay */}
        <div 
          id="fog-overlay" 
          className="absolute inset-0 fog-overlay"
          style={{
            zIndex: 5
          }}
        ></div>
        
        {/* Chakra Energy Flow */}
        <div className="absolute inset-0">
          {/* Main Chakra Energy Centers */}
          {[
            { color: 'chakra-root', size: 'w-4 h-4', position: { left: '20%', top: '80%' } },
            { color: 'chakra-sacral', size: 'w-3 h-3', position: { left: '25%', top: '70%' } },
            { color: 'chakra-solar', size: 'w-4 h-4', position: { left: '30%', top: '60%' } },
            { color: 'chakra-crown', size: 'w-5 h-5', position: { left: '35%', top: '50%' } },
            { color: 'chakra-throat', size: 'w-4 h-4', position: { left: '40%', top: '40%' } },
            { color: 'chakra-third-eye', size: 'w-3 h-3', position: { left: '45%', top: '30%' } },
            { color: 'chakra-crown', size: 'w-4 h-4', position: { left: '50%', top: '20%' } }
          ].map((chakra, i) => (
            <div
              key={`chakra-${i}`}
              className={`absolute ${chakra.size} bg-${chakra.color} rounded-full animate-energy-pulse chakra-particle`}
              style={{
                left: chakra.position.left,
                top: chakra.position.top,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
          
          {/* Flowing Energy Particles */}
          {[...Array(12)].map((_, i) => {
            const chakraColors = ['chakra-root', 'chakra-sacral', 'chakra-solar', 'chakra-crown', 'chakra-throat', 'chakra-third-eye', 'chakra-crown'];
            const color = chakraColors[i % chakraColors.length];
            return (
              <div
                key={`flow-${i}`}
                className={`absolute w-2 h-2 bg-${color} rounded-full opacity-40 animate-chakra-flow chakra-particle`}
                style={{
                  left: `${10 + (i * 7)}%`,
                  top: `${60 + Math.sin(i * 0.5) * 20}%`,
                  animationDelay: `${i * 0.7}s`
                }}
              />
            );
          })}
          
          {/* Spiral Energy Flows */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`spiral-${i}`}
              className="absolute w-1 h-1 bg-chakra-crown rounded-full opacity-30 animate-spiral-flow"
              style={{
                left: `${70 + i * 5}%`,
                top: `${30 + i * 8}%`,
                animationDelay: `${i * 2}s`
              }}
            />
          ))}
        </div>

        {/* Sparkle Effects */}
         {sparkles.map(sparkle => (
           <div key={sparkle.id} className="absolute pointer-events-none z-15" style={{ left: sparkle.x, top: sparkle.y }}>
             <div className="w-3 h-3 bg-chakra-crown rounded-full animate-sparkle-burst shadow-lg shadow-chakra-crown/50" />
             <div className="absolute inset-0 w-2 h-2 bg-white rounded-full animate-ping opacity-75" style={{ transform: 'translate(25%, 25%)' }} />
             <div className="absolute inset-0 w-1 h-1 bg-chakra-third-eye rounded-full animate-pulse" style={{ transform: 'translate(50%, 50%)' }} />
           </div>
         ))}

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 px-4 py-2 bg-bg-glass border-border-accent text-chakra-crown">
              ✨ Community-Verified Healing Platform
            </Badge>
            
            <div className="mb-6 text-sm text-muted-foreground/80 animate-pulse">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 bg-chakra-crown rounded-full animate-ping"></span>
                Move your cursor to clear the fog and reveal clarity
              </span>
            </div>
            
            <h1 className="text-hero text-gradient-mesh mb-8 animate-scale-in">
              Clear Your Karma,<br />
              Transform Your Life
            </h1>
            
            <p className="text-large text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect with verified healing practitioners through our trusted community platform. 
              Experience the transformative power of <span className="text-gradient-soft font-semibold">ancient wisdom</span> with 
              <span className="text-gradient-soft font-semibold">modern accessibility</span> and 
              <span className="text-gradient-soft font-semibold">community support</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button className="btn-liquid text-white font-semibold px-8 py-4 text-lg hover-glass-glow group">
                <Smartphone className="mr-2 h-5 w-5" />
                Download Seeker App
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button className="btn-liquid border-liquid text-chakra-crown px-8 py-4 text-lg hover-liquid-lift">
                <Heart className="mr-2 h-5 w-5" />
                Join as Practitioner
              </Button>
            </div>
            
            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <img 
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                alt="Download on the App Store" 
                className="h-12 hover:scale-105 transition-transform cursor-pointer opacity-80 hover:opacity-100"
              />
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play" 
                className="h-16 hover:scale-105 transition-transform cursor-pointer opacity-80 hover:opacity-100"
              />
            </div>
          </div>
        </div>



        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Section 2: Trust Verification Showcase */}
      <section id="features" className="py-24 px-6 relative bg-mesh-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-gradient-trust text-white border-0 backdrop-blur-sm">
              <Shield className="mr-2 h-4 w-4" />
              Trust & Verification
            </Badge>
            <h2 className="text-section-title text-gradient-soft mb-6">
              Building Trust in Healing.<br />
              Launching Soon.
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Our revolutionary verification system will ensure you connect with authentic, qualified healers in India's vast healing ecosystem
            </p>
          </div>

          {/* Live Stats with AI Connection Elements */}
          <div className="relative">
            {/* AI Neural Network Background */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Connection Lines */}
              <svg className="w-full h-full opacity-20" viewBox="0 0 800 400">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--chakra-third-eye)" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="var(--chakra-crown)" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="var(--chakra-crown)" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                {/* Animated connection lines between stats */}
                 <path d="M100,200 Q250,100 400,200 T700,200" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" className="animate-connection-flow" />
                 <path d="M150,150 Q350,250 550,150 T750,150" stroke="url(#connectionGradient)" strokeWidth="1.5" fill="none" className="animate-connection-flow" style={{animationDelay: '1s'}} />
                 <path d="M50,250 Q200,300 400,250 T750,250" stroke="url(#connectionGradient)" strokeWidth="1" fill="none" className="animate-connection-flow" style={{animationDelay: '2s'}} />
                 
                 {/* Neural network nodes */}
                 <circle cx="200" cy="180" r="4" fill="var(--chakra-third-eye)" className="animate-neural-pulse" />
                 <circle cx="400" cy="220" r="5" fill="var(--chakra-crown)" className="animate-neural-pulse" style={{animationDelay: '0.5s'}} />
                 <circle cx="600" cy="160" r="3" fill="var(--chakra-crown)" className="animate-neural-pulse" style={{animationDelay: '1s'}} />
                
                {/* Floating AI nodes */}
                {[...Array(8)].map((_, i) => (
                  <circle
                    key={i}
                    cx={100 + i * 85}
                    cy={200 + Math.sin(i * 0.8) * 50}
                    r="3"
                    fill="var(--chakra-third-eye)"
                    className="animate-energy-pulse"
                    style={{animationDelay: `${i * 0.5}s`}}
                  />
                ))}
              </svg>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative z-10">
              {stats.map((stat, index) => {
                const getIcon = (iconType: string) => {
                  switch(iconType) {
                    case 'users': return <Users className="h-8 w-8 text-chakra-crown mb-4 mx-auto" />;
                    case 'brain': return <Brain className="h-8 w-8 text-chakra-third-eye mb-4 mx-auto animate-pulse" />;
                    case 'heart': return <Heart className="h-8 w-8 text-chakra-root mb-4 mx-auto" />;
                    case 'shield': return <Shield className="h-8 w-8 text-chakra-crown mb-4 mx-auto" />;
                    default: return <Zap className="h-8 w-8 text-chakra-solar mb-4 mx-auto" />;
                  };
                };
                
                return (
                   <Card key={index} className={`card-glass p-8 text-center hover-glow hover-reveal group relative overflow-hidden ${
                     stat.icon === 'brain' ? 'animate-ai-glow border-chakra-third-eye/30' : ''
                   }`}>
                     {/* AI-themed background pattern for brain stat */}
                     {stat.icon === 'brain' && (
                       <div className="absolute inset-0 opacity-10">
                         <div className="absolute top-2 left-2 w-2 h-2 bg-chakra-third-eye rounded-full animate-ping" />
                         <div className="absolute top-4 right-3 w-1 h-1 bg-chakra-crown rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
                         <div className="absolute bottom-3 left-4 w-1.5 h-1.5 bg-chakra-crown rounded-full animate-ping" style={{animationDelay: '1s'}} />
                         <div className="absolute bottom-2 right-2 w-1 h-1 bg-chakra-solar rounded-full animate-ping" style={{animationDelay: '1.5s'}} />
                         
                         {/* Neural network pattern */}
                         <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                           <path d="M20,20 L80,30 M30,50 L70,40 M25,80 L75,70" stroke="currentColor" strokeWidth="0.5" opacity="0.3" className="animate-pulse" />
                           <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.4" />
                           <circle cx="80" cy="30" r="1" fill="currentColor" opacity="0.4" />
                           <circle cx="30" cy="50" r="1" fill="currentColor" opacity="0.4" />
                           <circle cx="70" cy="40" r="1" fill="currentColor" opacity="0.4" />
                         </svg>
                       </div>
                     )}
                     
                     {getIcon(stat.icon)}
                     <div className={`text-4xl font-bold mb-2 font-display group-hover:scale-110 transition-transform duration-300 ${
                       stat.icon === 'brain' ? 'text-gradient-mesh' : 'text-gradient'
                     }`}>
                       {stat.value}
                     </div>
                     <div className="text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
                     
                     {/* Special AI indicator for brain stat */}
                     {stat.icon === 'brain' && (
                       <div className="absolute top-2 right-2 opacity-60">
                         <div className="w-3 h-3 bg-gradient-to-r from-chakra-third-eye to-chakra-crown rounded-full animate-pulse" />
                         <div className="absolute -top-1 -right-1 w-5 h-5 border border-chakra-third-eye/30 rounded-full animate-ping" />
                       </div>
                     )}
                   </Card>
                 );
              })}
            </div>
          </div>

          {/* Verification Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="liquid-glass p-8 hover-liquid-lift hover-refract animate-light-scatter group">
              <div className="text-chakra-crown mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-display group-hover:text-chakra-crown transition-colors text-liquid-glow">Community Verified</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                Peer-to-peer validation by our healing community ensures authentic practitioners
              </p>
            </Card>

            <Card className="liquid-glass p-8 hover-liquid-lift hover-refract animate-light-scatter group">
              <div className="text-chakra-throat mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-display group-hover:text-chakra-throat transition-colors text-liquid-glow">Holistic Approach</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                Comprehensive healing methods that address mind, body, and spirit for complete wellness
              </p>
            </Card>

            <Card className="liquid-glass p-8 hover-liquid-lift hover-refract animate-light-scatter group">
              <div className="text-chakra-crown mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-display group-hover:text-chakra-crown transition-colors text-liquid-glow">Certified Excellence</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                Klear Karma certification program maintains the highest standards
              </p>
            </Card>
          </div>
        </div>
      </section>



      {/* Section 3: Community Stories Carousel */}
      <section id="testimonials" className="py-24 px-6 bg-textured">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-gradient-healing text-white border-0 backdrop-blur-sm">
              <Heart className="mr-2 h-4 w-4" />
              Transformation Stories
            </Badge>
            <h2 className="text-section-title text-gradient-primary mb-6">
              Market Research & Insights
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Discover the research and market insights driving our mission to transform the healing ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-glass p-8 hover-glow hover-reveal group">
                <div className="flex items-center mb-6">
                  <div className="text-chakra-crown mr-4 group-hover:scale-110 transition-transform duration-300">{getAvatarIcon(testimonial.avatar)}</div>
                  <div>
                    <h4 className="font-semibold text-lg group-hover:text-chakra-crown transition-colors">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current group-hover:text-yellow-300 transition-colors" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic group-hover:text-foreground transition-colors">"{testimonial.text}"</p>
                
                <Badge className="bg-chakra-crown/20 text-chakra-crown border-chakra-crown/30 group-hover:bg-chakra-crown/30 group-hover:scale-105 transition-all">
                  {testimonial.outcome}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: AI Matching Engine Visualization */}
      <section id="ai-matching" className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
        {/* Mystical Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Neural Network */}
          <div className="absolute top-20 left-10 w-32 h-32 opacity-20 animate-float">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <radialGradient id="neuralGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--chakra-third-eye)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--chakra-crown)" stopOpacity="0.2" />
                </radialGradient>
              </defs>
              <circle cx="20" cy="30" r="3" fill="url(#neuralGlow)" className="animate-neural-pulse" />
              <circle cx="80" cy="20" r="2" fill="var(--chakra-crown)" className="animate-neural-pulse" style={{animationDelay: '0.5s'}} />
              <circle cx="60" cy="70" r="4" fill="var(--chakra-third-eye)" className="animate-neural-pulse" style={{animationDelay: '1s'}} />
              <circle cx="30" cy="80" r="2" fill="var(--chakra-crown)" className="animate-neural-pulse" style={{animationDelay: '1.5s'}} />
              <path d="M20,30 Q50,10 80,20 M60,70 Q40,50 20,30 M80,20 Q70,45 60,70" stroke="var(--chakra-third-eye)" strokeWidth="0.5" fill="none" opacity="0.6" className="animate-connection-flow" />
            </svg>
          </div>
          
          {/* Floating Chakra Symbols */}
          <div className="absolute top-40 right-20 text-6xl text-chakra-crown/10 animate-spin-slow">
                  <Circle className="w-16 h-16" />
                </div>
                <div className="absolute bottom-32 left-20 text-4xl text-chakra-third-eye/15 animate-float" style={{animationDelay: '2s'}}>
                  <Gem className="w-10 h-10" />
                </div>
          <div className="absolute top-60 right-40 text-5xl text-chakra-solar/10 animate-pulse" style={{animationDelay: '1s'}}>
              <Sparkles className="w-12 h-12" />
            </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 px-6 py-3 bg-gradient-to-r from-chakra-third-eye/20 to-chakra-crown/20 text-white border border-chakra-crown/30 backdrop-blur-sm">
              <Brain className="mr-2 h-5 w-5 animate-pulse" />
              Mystical AI Consciousness
            </Badge>
            <h2 className="text-section-title text-gradient-mesh mb-8 animate-scale-in">
              Soul-Deep Matching Algorithm
            </h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our consciousness-aware AI reads between the lines of your energy signature, connecting you with healers whose vibrations align with your soul's journey
            </p>
          </div>

          {/* Interactive Matching Flow */}
          <div className="relative">
            {/* Soul Resonance Accuracy Display */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-6 px-8 py-6 bg-gradient-to-r from-chakra-heart/10 via-chakra-crown/15 to-chakra-third-eye/10 rounded-3xl border border-chakra-crown/20 backdrop-blur-sm">
                <div className="relative">
                  <AnimatedOrb 
                    percentage={87}
                    label="Match Accuracy"
                    size="120"
                    showParticles={false}
                    glowIntensity="0.8"
                    chakraTheme="heart"
                    className=""
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-chakra-crown mb-2">Soul-Deep Matching</h3>
                  <p className="text-chakra-third-eye font-medium">AI-powered consciousness alignment</p>
                  <p className="text-sm text-muted-foreground mt-1">Based on energy signature analysis</p>
                </div>
              </div>
            </div>

            {/* Floating Matching Factors */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Energy Alignment */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-chakra-root/20 to-chakra-sacral/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Card className="liquid-glass p-8 text-center hover-liquid-lift hover-refract relative z-10 group border-chakra-root/30">
                  <div className="text-chakra-root mb-4 group-hover:scale-125 transition-transform duration-500">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-chakra-root to-chakra-sacral flex items-center justify-center text-2xl animate-energy-pulse">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 font-display text-liquid-glow group-hover:text-chakra-root transition-colors">Energy Alignment</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    Vibrational frequency matching based on your chakra energy signature
                  </p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-chakra-root to-chakra-sacral rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </Card>
              </div>

              {/* Healing Resonance */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-chakra-heart/20 to-chakra-throat/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Card className="liquid-glass p-8 text-center hover-liquid-lift hover-refract relative z-10 group border-chakra-heart/30">
                  <div className="text-chakra-heart mb-4 group-hover:scale-125 transition-transform duration-500">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-chakra-heart to-chakra-throat flex items-center justify-center text-2xl animate-energy-pulse" style={{animationDelay: '0.5s'}}>
                  <Heart className="w-8 h-8 text-white" />
                </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 font-display text-liquid-glow group-hover:text-chakra-heart transition-colors">Healing Resonance</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    Specialized modalities that resonate with your unique healing needs
                  </p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-chakra-heart to-chakra-throat rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </Card>
              </div>

              {/* Intuitive Wisdom */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-chakra-third-eye/20 to-chakra-crown/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Card className="liquid-glass p-8 text-center hover-liquid-lift hover-refract relative z-10 group border-chakra-third-eye/30">
                  <div className="text-chakra-third-eye mb-4 group-hover:scale-125 transition-transform duration-500">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-chakra-third-eye to-chakra-crown flex items-center justify-center text-2xl animate-energy-pulse" style={{animationDelay: '1s'}}>
                  <Eye className="w-8 h-8 text-white" />
                </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 font-display text-liquid-glow group-hover:text-chakra-third-eye transition-colors">Intuitive Wisdom</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    Community insights and practitioner intuition scores for deeper connection
                  </p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-chakra-third-eye to-chakra-crown rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </Card>
              </div>

              {/* Karmic Compatibility */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-chakra-crown/20 to-chakra-solar/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Card className="liquid-glass p-8 text-center hover-liquid-lift hover-refract relative z-10 group border-chakra-crown/30">
                  <div className="text-chakra-crown mb-4 group-hover:scale-125 transition-transform duration-500">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-chakra-crown to-chakra-solar flex items-center justify-center text-2xl animate-energy-pulse" style={{animationDelay: '1.5s'}}>
                  <Star className="w-8 h-8 text-white" />
                </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 font-display text-liquid-glow group-hover:text-chakra-crown transition-colors">Karmic Compatibility</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    Past healing outcomes and transformational journey alignment
                  </p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-chakra-crown to-chakra-solar rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </Card>
              </div>
            </div>

            {/* Subtle Energy Connections */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1200 400">
              <defs>
                <linearGradient id="energyFlow1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--chakra-root)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--chakra-heart)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--chakra-crown)" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="energyFlow2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--chakra-third-eye)" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="var(--chakra-throat)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="var(--chakra-solar)" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              
              {/* Horizontal energy flow connecting cards */}
              <path d="M100,200 Q300,180 500,200 Q700,220 900,200 Q1000,180 1100,200" stroke="url(#energyFlow1)" strokeWidth="1" fill="none" className="animate-connection-flow" opacity="0.4" />
              
              {/* Subtle energy particles */}
              {[...Array(6)].map((_, i) => (
                <circle
                  key={i}
                  cx={200 + i * 160}
                  cy={200 + Math.sin(i * 0.8) * 20}
                  r="1.5"
                  fill="var(--chakra-crown)"
                  className="animate-energy-pulse"
                  style={{animationDelay: `${i * 0.5}s`}}
                  opacity="0.4"
                />
              ))}
            </svg>
          </div>

          {/* Mystical Call to Action */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-chakra-third-eye/20 via-chakra-crown/20 to-chakra-third-eye/20 rounded-full border border-chakra-crown/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300 cursor-pointer group">
              <div className="w-3 h-3 bg-chakra-crown rounded-full animate-ping"></div>
              <span className="text-chakra-crown font-medium group-hover:text-white transition-colors">Experience the mystical matching when we launch</span>
              <div className="w-3 h-3 bg-chakra-third-eye rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Practitioner Spotlight Grid */}
      <section id="practitioners" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-gradient-transformation text-white border-0">
              <Sparkles className="mr-2 h-4 w-4" />
              Featured Practitioners
            </Badge>
            <h2 className="text-section-title text-gradient-primary mb-6">
              Healing Modalities We'll Connect
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Discover the vast network of healing traditions we're bringing together on one trusted platform
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {practitioners.map((practitioner, index) => (
              <Card key={index} className="card-glass p-6 hover-border-glow hover-reveal group cursor-pointer">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300 text-chakra-crown flex items-center justify-center">
                    {getPractitionerIcon(practitioner.image)}
                  </div>
                  <h4 className="font-semibold text-lg mb-1 group-hover:text-chakra-crown transition-colors">{practitioner.name}</h4>
                  <p className="text-chakra-root text-sm font-medium group-hover:text-chakra-throat transition-colors">{practitioner.specialty}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform">
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">In India</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current group-hover:text-yellow-300 group-hover:scale-110 transition-all" />
                      <span className="font-semibold group-hover:text-chakra-crown transition-colors">{practitioner.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center group-hover:translate-x-1 transition-transform delay-75">
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Available</span>
                    <span className="font-semibold group-hover:text-chakra-throat transition-colors">{practitioner.sessions}</span>
                  </div>
                  
                  <div className="pt-2">
                    <Badge className="bg-chakra-crown/20 text-chakra-crown border-chakra-crown/30 w-full justify-center group-hover:bg-chakra-crown/40 group-hover:scale-105 transition-all">
                      <CheckCircle className="mr-1 h-3 w-3 group-hover:scale-110 transition-transform" />
                      Coming Soon
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Revenue Impact Calculator */}
      <section id="growth" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 px-4 py-2 bg-gradient-trust text-white border-0">
                <TrendingUp className="mr-2 h-4 w-4" />
                Practitioner Growth
              </Badge>
              <h2 className="text-section-title text-gradient mb-6">
                Unlock Your Practice<br />
                Potential with Klear Karma
              </h2>
              <p className="text-large text-muted-foreground mb-8">
                Research shows verified platforms can help practitioners achieve 10x growth. Be among the first to join our revolutionary ecosystem.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Market Potential Revenue</span>
                  <span className="text-2xl font-bold text-chakra-root">$30K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Industry Growth Rate</span>
                  <span className="text-2xl font-bold text-chakra-throat">300%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Platform Success Rate</span>
                  <span className="text-2xl font-bold text-chakra-crown">95%</span>
                </div>
              </div>

              <Button className="btn-liquid text-white font-semibold px-6 py-3 hover-glass-glow">
                <BarChart3 className="mr-2 h-5 w-5" />
                Calculate Your Growth
              </Button>
            </div>

            <Card className="card-glass p-8 hover-border-glow hover-reveal group">
              <h3 className="text-xl font-semibold mb-6 font-display group-hover:text-chakra-crown transition-colors">Target Metrics</h3>
              
              <div className="space-y-6">
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Target Booking Rate</span>
                    <span className="text-sm font-semibold group-hover:text-chakra-crown transition-colors">85%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden group-hover:h-3 transition-all">
                    <div className="h-full w-[85%] bg-gradient-healing group-hover:animate-pulse transition-all"></div>
                  </div>
                </div>
                
                <div className="group-hover:translate-x-2 transition-transform duration-300 delay-75">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Target Retention</span>
                    <span className="text-sm font-semibold group-hover:text-chakra-throat transition-colors">92%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden group-hover:h-3 transition-all">
                    <div className="h-full w-[92%] bg-gradient-trust group-hover:animate-pulse transition-all"></div>
                  </div>
                </div>
                
                <div className="group-hover:translate-x-2 transition-transform duration-300 delay-150">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Projected Growth</span>
                    <span className="text-sm font-semibold group-hover:text-chakra-crown transition-colors">78%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden group-hover:h-3 transition-all">
                    <div className="h-full w-[78%] bg-gradient-transformation group-hover:animate-pulse transition-all"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border-primary group-hover:border-chakra-crown/30 transition-colors">
                <div className="text-center group-hover:scale-105 transition-transform">
                  <div className="text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">$24B</div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Total addressable market opportunity</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 7: Fundraising Goal */}
      <section id="fundraising" className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <Badge className="mb-6 px-4 py-2 bg-gradient-transformation text-white border-0">
              <TrendingUp className="mr-2 h-4 w-4" />
              Fundraising Goal
            </Badge>
            <h2 className="text-section-title text-gradient-primary mb-6">
              Raising $1 Million USD<br />
              To Transform Healing
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Join us in revolutionizing the healing industry by supporting authentic practitioners and making holistic wellness accessible to everyone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-healing p-6 text-center hover-liquid-lift animate-refraction group border-0">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-all duration-300 text-liquid-glow">$1M</div>
              <div className="text-sm text-white/90 group-hover:text-white group-hover:translate-y-1 transition-all duration-300">Fundraising Target</div>
            </Card>
            
            <Card className="bg-gradient-trust p-6 text-center hover-liquid-lift animate-refraction group border-0">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-all duration-300 text-liquid-glow">50K+</div>
              <div className="text-sm text-white/90 group-hover:text-white group-hover:translate-y-1 transition-all duration-300">Practitioners to Onboard</div>
            </Card>
            
            <Card className="bg-gradient-transformation p-6 text-center hover-liquid-lift animate-refraction group border-0">
              <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-all duration-300 text-liquid-glow">1M+</div>
              <div className="text-sm text-white/90 group-hover:text-white group-hover:translate-y-1 transition-all duration-300">Lives to Transform</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 8: Global Impact Visualization */}
      <section id="impact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-gradient-healing text-white border-0">
              <Globe className="mr-2 h-4 w-4" />
              Global Impact
            </Badge>
            <h2 className="text-section-title text-gradient-primary mb-6">
              20% Giveback Vision<br />
              Healing the World
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Our planned giveback model will contribute to global healing research and make authentic healing accessible worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="liquid-glass p-6 text-center hover-liquid-lift animate-refraction group">
              <div className="text-3xl font-bold text-chakra-root mb-2 group-hover:scale-110 group-hover:text-chakra-root/90 transition-all duration-300 text-liquid-glow">$4.8B</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground group-hover:translate-y-1 transition-all duration-300">Research Funding Gap</div>
            </Card>
            
            <Card className="liquid-glass p-6 text-center hover-liquid-lift animate-refraction group">
              <div className="text-3xl font-bold text-chakra-throat mb-2 group-hover:scale-110 group-hover:text-chakra-throat/90 transition-all duration-300 text-liquid-glow">195+</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground group-hover:translate-y-1 transition-all duration-300">Countries to Reach</div>
            </Card>
            
            <Card className="liquid-glass p-6 text-center hover-liquid-lift animate-refraction group">
              <div className="text-3xl font-bold text-chakra-crown mb-2 group-hover:scale-110 group-hover:text-chakra-crown/90 transition-all duration-300 text-liquid-glow">1000+</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground group-hover:translate-y-1 transition-all duration-300">Research Opportunities</div>
            </Card>
            
            <Card className="liquid-glass p-6 text-center hover-liquid-lift animate-refraction group">
              <div className="text-3xl font-bold text-chakra-solar mb-2 group-hover:scale-110 group-hover:text-chakra-solar/90 transition-all duration-300 text-liquid-glow">1B+</div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground group-hover:translate-y-1 transition-all duration-300">Lives to Impact</div>
            </Card>
          </div>

          {/* World Map Placeholder */}
          <Card className="liquid-glass p-12 animate-liquid-flow">
            <div className="aspect-video bg-gradient-radial rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-muted-foreground">
                <Globe className="h-24 w-24 mx-auto mb-6 animate-pulse-slow" />
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Global Healing Vision</h3>
                <p className="text-lg">Envisioning connections across 195+ countries worldwide</p>
              </div>
              
              {/* Global Healing Network Connections */}
              <div className="absolute inset-0">
                {/* Major Healing Centers */}
                {[
                  { color: 'chakra-crown', position: { left: '15%', top: '25%' }, size: 'w-4 h-4' }, // North America
                  { color: 'chakra-throat', position: { left: '45%', top: '20%' }, size: 'w-3 h-3' }, // Europe
                  { color: 'chakra-crown', position: { left: '75%', top: '30%' }, size: 'w-4 h-4' }, // Asia
                  { color: 'chakra-solar', position: { left: '50%', top: '60%' }, size: 'w-3 h-3' }, // Africa
                  { color: 'chakra-sacral', position: { left: '25%', top: '75%' }, size: 'w-3 h-3' }, // South America
                  { color: 'chakra-third-eye', position: { left: '80%', top: '70%' }, size: 'w-3 h-3' }, // Australia
                ].map((center, i) => (
                  <div
                    key={`healing-center-${i}`}
                    className={`absolute ${center.size} bg-${center.color} rounded-full animate-energy-pulse chakra-particle`}
                    style={{
                      left: center.position.left,
                      top: center.position.top,
                      animationDelay: `${i * 0.4}s`
                    }}
                  />
                ))}
                
                {/* Energy Connections Between Centers */}
                {[...Array(6)].map((_, i) => {
                  const chakraColors = ['chakra-crown', 'chakra-throat', 'chakra-root', 'chakra-solar', 'chakra-sacral', 'chakra-third-eye'];
                  const color = chakraColors[i % chakraColors.length];
                  return (
                    <div
                      key={`connection-${i}`}
                      className={`absolute w-1 h-1 bg-${color} rounded-full opacity-50 animate-chakra-flow`}
                      style={{
                        left: `${20 + i * 12}%`,
                        top: `${30 + Math.sin(i * 1.2) * 25}%`,
                        animationDelay: `${i * 1.2}s`
                      }}
                    />
                  );
                })}
                
                {/* Healing Energy Ripples */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={`ripple-${i}`}
                    className="absolute w-2 h-2 bg-chakra-crown rounded-full opacity-20 animate-spiral-flow"
                    style={{
                      left: `${40 + i * 15}%`,
                      top: `${40 + i * 10}%`,
                      animationDelay: `${i * 3}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 8: App Download Hub */}
      <section id="download" className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 px-4 py-2 bg-gradient-transformation text-white border-0">
            <Download className="mr-2 h-4 w-4" />
            Download Now
          </Badge>
          
          <h2 className="text-section-title text-gradient mb-6">
            Transform Lives Today
          </h2>
          
          <p className="text-large text-muted-foreground max-w-2xl mx-auto mb-12">
            Join the healing revolution. Download our apps and be part of the world's most trusted alternative healing community.
          </p>

          {/* App Screenshots */}
          <div className="grid md:grid-cols-2 gap-16 mb-16 max-w-4xl mx-auto">
            {/* Seeker App */}
            <div className="text-center">
              <div className="mb-8">
                <Card className="liquid-glass p-8 mx-auto max-w-sm hover-liquid-lift animate-glass-shimmer">
                  <div className="aspect-[9/16] bg-gradient-healing rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Heart className="h-16 w-16 mx-auto mb-4" />
                      <p className="font-semibold">Klear Karma</p>
                      <p className="text-sm opacity-80">Seeker App</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 font-display">For Healing Seekers</h3>
              <p className="text-muted-foreground mb-6">Find verified practitioners, book sessions, and track your healing journey</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="Download on the App Store" 
                    className="h-12 hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Get it on Google Play" 
                    className="h-16 hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Practitioner App */}
            <div className="text-center">
              <div className="mb-8">
                <Card className="liquid-glass p-8 mx-auto max-w-sm hover-liquid-lift animate-glass-shimmer">
                  <div className="aspect-[9/16] bg-gradient-trust rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-white text-center">
                      <Sparkles className="h-16 w-16 mx-auto mb-4" />
                      <p className="font-semibold">Klear Karma</p>
                      <p className="text-sm opacity-80">Practitioner App</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 font-display">For Practitioners</h3>
              <p className="text-muted-foreground mb-6">Grow your practice, manage clients, and showcase your healing expertise</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                    alt="Download on the App Store" 
                    className="h-12 hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-center gap-4">
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Get it on Google Play" 
                    className="h-16 hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="max-w-2xl mx-auto">
            <Card className="liquid-glass p-8 hover-liquid-lift animate-refraction">
              <h3 className="text-2xl font-semibold mb-4 text-gradient font-display">
                Ready to Clear Your Karma?
              </h3>
              <p className="text-muted-foreground mb-8">
                Be among the first to experience the future of authentic healing connections
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-liquid text-white font-semibold px-8 py-3 hover-glass-glow">
                  <Heart className="mr-2 h-5 w-5" />
                  Start Your Journey
                </Button>
                <Button className="btn-liquid border-liquid text-chakra-crown hover-liquid-lift">
                  <Users className="mr-2 h-5 w-5" />
                  Join as Healer
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border-primary">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-gradient mb-4 font-display">Klear Karma</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Clear Your Karma, Transform Your Life
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Seeker App</div>
                <div>Practitioner App</div>
                <div>Verification</div>
                <div>Bio Well Tech</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Find Healers</div>
                <div>Join Network</div>
                <div>Success Stories</div>
                <div>Reviews</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Help Center</div>
                <div>Contact Us</div>
                <div>FAQ</div>
                <div>Safety</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>About Us</div>
                <div>Careers</div>
                <div>Press</div>
                <div>Investors</div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border-primary">
            <p className="text-muted-foreground">
              © 2024 Klear Karma. All rights reserved. • 20% of revenue donated to healing research
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
