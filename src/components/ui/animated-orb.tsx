import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedOrbProps {
  percentage: number;
  label: string;
  size?: string;
  className?: string;
  showParticles?: boolean;
  glowIntensity?: string;
  chakraTheme?: 'throat' | 'crown' | 'third-eye' | 'solar' | 'sacral' | 'root' | 'heart';
}

export const AnimatedOrb = ({
  percentage,
  label,
  size = '200',
  className,
  showParticles = false,
  glowIntensity = '0.3',
  chakraTheme = 'crown'
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = percentage / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= percentage) {
        current = percentage;
        clearInterval(timer);
      }
      setAnimatedPercentage(Math.round(current));
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isVisible, percentage]);

  const orbSize = parseInt(size);
  const circumference = 2 * Math.PI * 35; // Fixed radius for consistency
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

  return (
    <div 
      className={cn(
        "relative flex items-center justify-center",
        className
      )}
      style={{ width: `${orbSize}px`, height: `${orbSize}px` }}
    >
      {/* Liquid Glass Container */}
      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/20 shadow-2xl">
        {/* Progress Ring */}
        <svg className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] transform -rotate-90" viewBox="0 0 100 100">
          {/* Background Ring */}
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="3"
          />
          
          {/* Animated Progress Ring */}
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke="hsl(var(--chakra-crown))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
            style={{
              filter: 'drop-shadow(0 0 8px hsl(var(--chakra-crown) / 0.6))'
            }}
          />
        </svg>
        
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div 
            className="font-bold text-white"
            style={{ 
              fontSize: `${orbSize * 0.18}px`,
              textShadow: '0 2px 8px rgba(0,0,0,0.3)'
            }}
          >
            {animatedPercentage}%
          </div>
        </div>
        
        {/* Subtle Inner Glow */}
        <div className="absolute inset-4 rounded-full bg-gradient-radial from-chakra-crown/20 via-transparent to-transparent opacity-60" />
      </div>
    </div>
  );
};

export default AnimatedOrb;