import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const phrases = [
    'ENDLESS LOVE',
    'PURE MAGIC',
    'CRAZY VIBES',
    'BEST FRIENDS',
    'SOULMATES'
  ];

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Animated background gradient */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsl(350 80% 60% / 0.2) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-accent/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Rotating text ring */}
      <motion.div
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />
          </defs>
          <text className="fill-muted-foreground/30 text-[8px] font-body uppercase tracking-[0.3em]">
            <textPath href="#circlePath">
              MUKESH & SANJANA · 1 YEAR OF LOVE · 2024-2025 · FOREVER & ALWAYS · 
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* Marquee phrases */}
      <div className="absolute top-1/4 left-0 right-0 overflow-hidden opacity-10">
        <motion.div 
          className="whitespace-nowrap font-display text-[8vw] font-bold"
          animate={{ x: [0, '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {phrases.map((phrase, i) => (
            <span key={i} className="mx-8">{phrase}</span>
          ))}
          {phrases.map((phrase, i) => (
            <span key={`dup-${i}`} className="mx-8">{phrase}</span>
          ))}
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 text-center px-4"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        {/* Stacked large text */}
        <div className="relative mb-8">
          {[...Array(5)].map((_, i) => (
            <motion.h1
              key={i}
              className={`font-display text-[15vw] md:text-[12vw] font-bold leading-none ${
                i === 4 ? 'text-foreground' : 'text-outline opacity-20'
              }`}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: i === 4 ? 1 : 0.2, y: 0 }}
              transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: i === 4 ? 'relative' : 'absolute',
                top: i === 4 ? 'auto' : `${i * 8}px`,
                left: 0,
                right: 0,
              }}
            >
              SANMUK
            </motion.h1>
          ))}
        </div>

        {/* Subtitle stack */}
        <div className="relative mb-12">
          {[...Array(5)].map((_, i) => (
            <motion.p
              key={i}
              className={`font-display text-[6vw] md:text-[4vw] italic ${
                i === 4 ? 'text-accent' : 'text-outline-thin opacity-10'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: i === 4 ? 1 : 0.1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: i === 4 ? 'relative' : 'absolute',
                top: i === 4 ? 'auto' : `${i * 4}px`,
                left: 0,
                right: 0,
              }}
            >
              Forever Yours
            </motion.p>
          ))}
        </div>

        <motion.p
          className="font-body text-sm md:text-base tracking-widest text-muted-foreground uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          Est. December 2024 · A Love Story
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="inline-block font-body text-xs tracking-[0.3em] text-muted-foreground">
            SCROLL TO EXPLORE OUR JOURNEY
          </span>
          <motion.div
            className="w-px h-12 bg-muted-foreground/30 mx-auto mt-4"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
