import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  MapPin
} from 'lucide-react';
import heroImage from '@/assets/hero-chakra-meditation.jpg';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { value: '10,000+', label: 'Verified Practitioners' },
    { value: '95%', label: 'Trust Score' },
    { value: '50K+', label: 'Healers Helped' },
    { value: '20%', label: 'Giveback to Research' }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Yoga Instructor',
      rating: 5,
      text: 'Klear Karma transformed my practice. The scientific validation gave my clients confidence in my healing methods.',
      avatar: '👩‍🏫',
      outcome: '300% increase in bookings'
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Ayurveda Practitioner',
      rating: 5,
      text: 'Finally, a platform that combines ancient wisdom with modern verification. My clients love the Bio Well reports.',
      avatar: '👨‍⚕️',
      outcome: 'Verified healer badge'
    },
    {
      name: 'Sarah Williams',
      role: 'Wellness Seeker',
      rating: 5,
      text: 'Found my perfect Reiki master through the AI matching. The community reviews were spot-on!',
      avatar: '🧘‍♀️',
      outcome: 'Life transformation'
    }
  ];

  const practitioners = [
    { name: 'Master Chen', specialty: 'Acupuncture', rating: 4.9, sessions: 1200, image: '🧙‍♂️' },
    { name: 'Dr. Anjali', specialty: 'Ayurveda', rating: 4.8, sessions: 800, image: '👩‍⚕️' },
    { name: 'Guru Ravi', specialty: 'Meditation', rating: 5.0, sessions: 2000, image: '🧘‍♂️' },
    { name: 'Lisa Thompson', specialty: 'Crystal Healing', rating: 4.7, sessions: 600, image: '💎' },
    { name: 'David Kim', specialty: 'Sound Therapy', rating: 4.9, sessions: 900, image: '🎵' },
    { name: 'Maya Patel', specialty: 'Reiki', rating: 4.8, sessions: 1100, image: '✨' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* Section 1: Hero with Immersive 3D Elements */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-radial"></div>
        <div className="absolute inset-0 bg-chakra-gradient opacity-10 animate-gradient"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-chakra-heart rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <Badge className="mb-6 px-4 py-2 bg-bg-glass border-border-accent text-chakra-heart">
              ✨ World's First Community-Verified Healing Platform
            </Badge>
            
            <h1 className="text-hero text-gradient mb-8 animate-scale-in">
              Clear Your Karma,<br />
              Transform Your Life
            </h1>
            
            <p className="text-large text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover authentic alternative healing practitioners through our revolutionary platform that combines 
              <span className="text-chakra-heart font-semibold"> community verification</span>, 
              <span className="text-chakra-throat font-semibold"> scientific validation</span>, and 
              <span className="text-chakra-crown font-semibold"> ancient wisdom</span> with modern technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button className="btn-hero group px-8 py-4 text-lg">
                <Smartphone className="mr-2 h-5 w-5" />
                Download Seeker App
                <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button className="btn-secondary px-8 py-4 text-lg">
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

        {/* Hero Image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20 hidden lg:block">
          <img 
            src={heroImage} 
            alt="Chakra Meditation" 
            className="w-full h-full object-cover animate-float"
          />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* Section 2: Trust Verification Showcase */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-gradient-trust text-white border-0">
              <Shield className="mr-2 h-4 w-4" />
              Trust & Verification
            </Badge>
            <h2 className="text-section-title text-gradient-primary mb-6">
              Every Practitioner, Verified.<br />
              Every Session, Trusted.
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Our revolutionary verification system ensures you connect with authentic, qualified healers
            </p>
          </div>

          {/* Live Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="card-glass p-8 text-center hover-lift">
                <div className="text-4xl font-bold text-gradient mb-2 font-display">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Verification Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-glass p-8 hover-lift glow-heart">
              <div className="text-chakra-heart mb-4">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-display">Community Verified</h3>
              <p className="text-muted-foreground">
                Peer-to-peer validation by our healing community ensures authentic practitioners
              </p>
            </Card>

            <Card className="card-glass p-8 hover-lift glow-throat">
              <div className="text-chakra-throat mb-4">
                <Brain className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-display">Scientific Validation</h3>
              <p className="text-muted-foreground">
                Bio Well technology measures energy fields for quantifiable healing outcomes
              </p>
            </Card>

            <Card className="card-glass p-8 hover-lift glow-crown">
              <div className="text-chakra-crown mb-4">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-display">Certified Excellence</h3>
              <p className="text-muted-foreground">
                Klear Karma certification program maintains the highest standards
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Scientific Validation Demo */}
      <section className="py-24 px-6 bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 px-4 py-2 bg-gradient-transformation text-white border-0">
                <Zap className="mr-2 h-4 w-4" />
                Bio Well Technology
              </Badge>
              <h2 className="text-section-title text-gradient mb-6">
                Experience Measurable Healing
              </h2>
              <p className="text-large text-muted-foreground mb-8">
                Our cutting-edge Bio Well technology captures your energy field before and after sessions, 
                providing scientific validation of healing outcomes.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-chakra-heart" />
                  <span className="text-muted-foreground">Real-time energy field visualization</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-chakra-heart" />
                  <span className="text-muted-foreground">Before & after session comparisons</span>
                </div>
                <div className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-chakra-heart" />
                  <span className="text-muted-foreground">Quantifiable healing metrics</span>
                </div>
              </div>

              <Button className="btn-hero">
                <Play className="mr-2 h-5 w-5" />
                See Demo Video
              </Button>
            </div>

            <div className="relative">
              <Card className="card-glass p-8">
                <div className="aspect-video bg-gradient-healing rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Brain className="h-16 w-16 mx-auto mb-4 animate-pulse-slow" />
                    <p className="text-lg font-semibold">Energy Field Visualization</p>
                    <p className="text-sm opacity-80">Interactive Bio Well Demo</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-chakra-heart">85%</div>
                    <div className="text-sm text-muted-foreground">Measurable Outcomes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-chakra-throat">95%</div>
                    <div className="text-sm text-muted-foreground">User Satisfaction</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Community Stories Carousel */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-gradient-healing text-white border-0">
              <Heart className="mr-2 h-4 w-4" />
              Transformation Stories
            </Badge>
            <h2 className="text-section-title text-gradient-primary mb-6">
              Real People, Real Healing
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Discover how our platform has transformed lives across the healing community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-glass p-8 hover-lift">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                
                <Badge className="bg-chakra-heart/20 text-chakra-heart border-chakra-heart/30">
                  {testimonial.outcome}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: AI Matching Engine Visualization */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-gradient-trust text-white border-0">
              <Brain className="mr-2 h-4 w-4" />
              AI-Powered Matching
            </Badge>
            <h2 className="text-section-title text-gradient mb-6">
              Find Your Perfect Healing Match
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Our intelligent algorithm analyzes compatibility factors to connect you with ideal practitioners
            </p>
          </div>

          <Card className="card-glass p-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 font-display">Intelligent Recommendations</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-chakra-heart rounded-full"></div>
                    <span>Location & Availability</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-chakra-throat rounded-full"></div>
                    <span>Healing Specializations</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-chakra-crown rounded-full"></div>
                    <span>Community Reviews</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-chakra-solar rounded-full"></div>
                    <span>Scientific Outcomes</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-radial rounded-full flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gradient">87%</div>
                    <div className="text-sm text-muted-foreground">Match Accuracy</div>
                  </div>
                  
                  {/* Animated connection lines */}
                  <div className="absolute inset-0 animate-pulse-slow">
                    <div className="absolute top-4 left-4 w-2 h-2 bg-chakra-heart rounded-full"></div>
                    <div className="absolute top-4 right-4 w-2 h-2 bg-chakra-throat rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-chakra-crown rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-chakra-solar rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 6: Practitioner Spotlight Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-gradient-transformation text-white border-0">
              <Sparkles className="mr-2 h-4 w-4" />
              Featured Practitioners
            </Badge>
            <h2 className="text-section-title text-gradient-primary mb-6">
              Meet Our Verified Healers
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Connect with authenticated practitioners who have transformed thousands of lives
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {practitioners.map((practitioner, index) => (
              <Card key={index} className="card-glass p-6 hover-lift group cursor-pointer">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {practitioner.image}
                  </div>
                  <h4 className="font-semibold text-lg mb-1">{practitioner.name}</h4>
                  <p className="text-chakra-heart text-sm font-medium">{practitioner.specialty}</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Rating</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">{practitioner.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Sessions</span>
                    <span className="font-semibold">{practitioner.sessions.toLocaleString()}+</span>
                  </div>
                  
                  <div className="pt-2">
                    <Badge className="bg-chakra-heart/20 text-chakra-heart border-chakra-heart/30 w-full justify-center">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Verified
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Revenue Impact Calculator */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 px-4 py-2 bg-gradient-trust text-white border-0">
                <TrendingUp className="mr-2 h-4 w-4" />
                Practitioner Growth
              </Badge>
              <h2 className="text-section-title text-gradient mb-6">
                Grow Your Practice 10x<br />
                with Klear Karma
              </h2>
              <p className="text-large text-muted-foreground mb-8">
                Join thousands of practitioners who have transformed their healing practice through our platform
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Average Monthly Revenue</span>
                  <span className="text-2xl font-bold text-chakra-heart">₹2.5 Lakh</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Client Growth Rate</span>
                  <span className="text-2xl font-bold text-chakra-throat">300%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Session Completion Rate</span>
                  <span className="text-2xl font-bold text-chakra-crown">95%</span>
                </div>
              </div>

              <Button className="btn-hero">
                <BarChart3 className="mr-2 h-5 w-5" />
                Calculate Your Growth
              </Button>
            </div>

            <Card className="card-glass p-8">
              <h3 className="text-xl font-semibold mb-6 font-display">Success Metrics</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Booking Rate</span>
                    <span className="text-sm font-semibold">85%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-healing"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Client Retention</span>
                    <span className="text-sm font-semibold">92%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-gradient-trust"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Revenue Growth</span>
                    <span className="text-sm font-semibold">78%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[78%] bg-gradient-transformation"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border-primary">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">₹5.2 Cr</div>
                  <div className="text-sm text-muted-foreground">Total revenue generated by practitioners</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 8: Global Impact Visualization */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-4 py-2 bg-gradient-healing text-white border-0">
              <Globe className="mr-2 h-4 w-4" />
              Global Impact
            </Badge>
            <h2 className="text-section-title text-gradient-primary mb-6">
              20% Giveback Model<br />
              Healing the World
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Every transaction contributes to global healing research and makes authentic healing accessible worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="card-glass p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-chakra-heart mb-2">₹1.2 Cr</div>
              <div className="text-sm text-muted-foreground">Donated to Research</div>
            </Card>
            
            <Card className="card-glass p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-chakra-throat mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Countries Reached</div>
            </Card>
            
            <Card className="card-glass p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-chakra-crown mb-2">25</div>
              <div className="text-sm text-muted-foreground">Research Projects</div>
            </Card>
            
            <Card className="card-glass p-6 text-center hover-lift">
              <div className="text-3xl font-bold text-chakra-solar mb-2">100K+</div>
              <div className="text-sm text-muted-foreground">Lives Impacted</div>
            </Card>
          </div>

          {/* World Map Placeholder */}
          <Card className="card-glass p-12">
            <div className="aspect-video bg-gradient-radial rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-muted-foreground">
                <Globe className="h-24 w-24 mx-auto mb-6 animate-pulse-slow" />
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Global Healing Network</h3>
                <p className="text-lg">Connecting healers and seekers across 50+ countries</p>
              </div>
              
              {/* Animated impact points */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-chakra-heart rounded-full animate-pulse"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Section 9: App Download Hub */}
      <section className="py-24 px-6 bg-secondary/30">
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
                <Card className="card-glass p-8 mx-auto max-w-sm">
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
                <Card className="card-glass p-8 mx-auto max-w-sm">
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
            <Card className="card-glass p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gradient font-display">
                Ready to Clear Your Karma?
              </h3>
              <p className="text-muted-foreground mb-8">
                Join thousands who have already transformed their lives through authentic healing
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">
                  <Heart className="mr-2 h-5 w-5" />
                  Start Your Journey
                </Button>
                <Button className="btn-secondary">
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
