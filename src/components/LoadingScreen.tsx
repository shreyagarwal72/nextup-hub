import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorBoxRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const cursorBox = cursorBoxRef.current;
    const cursorDot = cursorDotRef.current;
    const logo = logoRef.current;
    const text = textRef.current;
    const progressBar = progressRef.current;
    const orb1 = orb1Ref.current;
    const orb2 = orb2Ref.current;

    if (!container || !cursorBox || !cursorDot || !logo || !text || !progressBar || !orb1 || !orb2) return;

    const tl = gsap.timeline({
      onComplete: () => {
        // Exit animation
        gsap.to(container, {
          opacity: 0,
          scale: 1.05,
          filter: 'blur(10px)',
          duration: 0.6,
          ease: 'power2.inOut',
          onComplete: onComplete
        });
      }
    });

    // Orb ambient float
    gsap.to(orb1, { x: 30, y: -20, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to(orb2, { x: -25, y: 15, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 });

    // Phase 1: Cursor appears in center with rotation
    tl.fromTo(cursorBox, 
      { opacity: 0, scale: 0, rotation: -180 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: 'elastic.out(1, 0.6)' }
    );

    tl.fromTo(cursorDot,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(2)' },
      '-=0.3'
    );

    // Phase 2: Cursor traces a path
    tl.to(cursorBox, {
      x: -60, y: -30, rotation: 90, duration: 0.5, ease: 'power2.inOut'
    });
    tl.to(cursorDot, { x: -60, y: -30, duration: 0.4, ease: 'power2.out' }, '-=0.4');

    tl.to(cursorBox, {
      x: 60, y: 20, rotation: 180, duration: 0.6, ease: 'power2.inOut'
    });
    tl.to(cursorDot, { x: 60, y: 20, duration: 0.5, ease: 'power2.out' }, '-=0.5');

    tl.to(cursorBox, {
      x: 0, y: 0, rotation: 360, duration: 0.5, ease: 'power2.inOut'
    });
    tl.to(cursorDot, { x: 0, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.4');

    // Phase 3: Cursor expands into logo shape
    tl.to(cursorBox, {
      width: 70, height: 70, borderRadius: 20, duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
    tl.to(cursorDot, { scale: 0, duration: 0.2 }, '-=0.3');

    // Phase 4: Logo and text reveal
    tl.fromTo(logo,
      { opacity: 0, y: 20, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(2)' },
      '-=0.2'
    );

    tl.to(cursorBox, { opacity: 0, scale: 0.5, duration: 0.3 }, '-=0.3');

    tl.fromTo(text,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.1'
    );

    // Phase 5: Progress bar
    tl.fromTo(progressBar,
      { opacity: 0, scaleX: 0 },
      { opacity: 1, scaleX: 1, duration: 0.3, ease: 'power2.out' }
    );

    // Animate progress value
    const progressAnim = { val: 0 };
    tl.to(progressAnim, {
      val: 100,
      duration: 1.2,
      ease: 'power1.inOut',
      onUpdate: () => setProgress(Math.round(progressAnim.val))
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center"
      style={{ background: 'hsl(var(--background))' }}
    >
      {/* Background orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.15) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated cursor */}
        <div className="relative h-20 flex items-center justify-center">
          <div
            ref={cursorBoxRef}
            className="absolute"
            style={{
              width: 36,
              height: 36,
              opacity: 0,
              background: `
                linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) top left,
                linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) bottom left,
                linear-gradient(to bottom, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) top left,
                linear-gradient(to bottom, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) top right,
                linear-gradient(to left, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) top right,
                linear-gradient(to left, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) bottom right,
                linear-gradient(to top, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) bottom left,
                linear-gradient(to top, hsl(var(--primary)) 0%, hsl(var(--primary)) 8px, transparent 8px) bottom right
              `,
              backgroundSize: '8px 2px, 8px 2px, 2px 8px, 2px 8px, 8px 2px, 8px 2px, 2px 8px, 2px 8px',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div
            ref={cursorDotRef}
            className="absolute w-2 h-2 rounded-full"
            style={{
              opacity: 0,
              background: 'hsl(var(--accent))',
              boxShadow: '0 0 12px hsl(var(--primary) / 0.6)',
            }}
          />
          {/* Logo appears here */}
          <div ref={logoRef} className="absolute opacity-0">
            <div className="flex items-center gap-3">
              <div
                className="p-3 rounded-2xl"
                style={{ background: 'var(--gradient-primary)' }}
              >
                <Sparkles className="h-7 w-7 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Brand text */}
        <div ref={textRef} className="text-center opacity-0">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text mb-1">
            Nextup Studio
          </h1>
          <p className="text-sm text-muted-foreground tracking-widest uppercase">
            Crafting Digital Excellence
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-48 sm:w-64 flex flex-col items-center gap-2">
          <div
            ref={progressRef}
            className="w-full h-1 rounded-full overflow-hidden opacity-0"
            style={{
              background: 'hsl(var(--muted))',
              transformOrigin: 'left',
            }}
          >
            <div
              className="h-full rounded-full transition-all duration-100 ease-out"
              style={{
                width: `${progress}%`,
                background: 'var(--gradient-primary)',
              }}
            />
          </div>
          <span className="text-xs text-muted-foreground tabular-nums font-medium">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
