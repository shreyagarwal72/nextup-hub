import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ParallaxOrbs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb1 = orb1Ref.current;
    const orb2 = orb2Ref.current;
    const orb3 = orb3Ref.current;

    if (!orb1 || !orb2 || !orb3) return;

    // Floating animations
    gsap.to(orb1, {
      y: -30,
      x: 15,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(orb2, {
      y: 25,
      x: -20,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1
    });

    gsap.to(orb3, {
      y: -20,
      x: 10,
      scale: 1.05,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2
    });

    // Parallax on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      gsap.to(orb1, {
        yPercent: scrollY * 0.05,
        duration: 0.3,
        ease: "power1.out"
      });

      gsap.to(orb2, {
        yPercent: scrollY * 0.08,
        duration: 0.3,
        ease: "power1.out"
      });

      gsap.to(orb3, {
        yPercent: scrollY * 0.03,
        duration: 0.3,
        ease: "power1.out"
      });
    };

    // Parallax on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = (e.clientX - centerX) / centerX;
      const mouseY = (e.clientY - centerY) / centerY;

      gsap.to(orb1, {
        x: mouseX * 40,
        y: mouseY * 30,
        duration: 1,
        ease: "power2.out"
      });

      gsap.to(orb2, {
        x: mouseX * -30,
        y: mouseY * -25,
        duration: 1.2,
        ease: "power2.out"
      });

      gsap.to(orb3, {
        x: mouseX * 20,
        y: mouseY * 15,
        duration: 1.4,
        ease: "power2.out"
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Primary orb - top left */}
      <div 
        ref={orb1Ref}
        className="absolute top-20 left-[10%] w-72 h-72 rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, hsl(var(--primary) / 0.1) 50%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      
      {/* Accent orb - bottom right */}
      <div 
        ref={orb2Ref}
        className="absolute bottom-32 right-[15%] w-96 h-96 rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.2) 0%, hsl(var(--accent) / 0.08) 50%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Center orb */}
      <div 
        ref={orb3Ref}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full will-change-transform"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, hsl(var(--accent) / 0.05) 50%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Additional subtle orbs for depth */}
      <div 
        className="absolute top-[60%] left-[5%] w-48 h-48 rounded-full animate-pulse"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animationDuration: '4s'
        }}
      />
      
      <div 
        className="absolute top-[20%] right-[8%] w-64 h-64 rounded-full animate-pulse"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.12) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animationDuration: '5s',
          animationDelay: '1s'
        }}
      />
    </div>
  );
};

export default ParallaxOrbs;
