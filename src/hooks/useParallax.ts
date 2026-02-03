import { useEffect, useState } from 'react';

interface ParallaxOffset {
  x: number;
  y: number;
}

export function useParallax(speed: number = 0.1): ParallaxOffset {
  const [offset, setOffset] = useState<ParallaxOffset>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset({
        x: 0,
        y: scrollY * speed
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const mouseX = (e.clientX - centerX) * speed * 0.5;
      const mouseY = (e.clientY - centerY) * speed * 0.5;
      
      setOffset(prev => ({
        x: mouseX,
        y: prev.y + mouseY * 0.01
      }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [speed]);

  return offset;
}
