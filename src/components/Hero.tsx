import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  // Stagger animation for letters
  const title = "SANMUK";
  const subtitle = "Zuro & Zubi";

  return (
    <section ref={containerRef} className="relative h-[100vh] overflow-hidden flex items-center justify-center">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse at 30% 50%, hsl(350 80% 60% / 0.06) 0%, transparent 50%)',
            'radial-gradient(ellipse at 70% 50%, hsl(350 80% 60% / 0.08) 0%, transparent 50%)',
            'radial-gradient(ellipse at 30% 50%, hsl(350 80% 60% / 0.06) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent/30 rounded-full"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            opacity: 0 
          }}
          animate={{ 
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{ 
            duration: 4 + i, 
            repeat: Infinity, 
            delay: i * 0.5,
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Main content */}
      <motion.div 
        className="relative z-10 text-center w-full px-4"
        style={{ opacity, scale, y, filter: `blur(${blur}px)` }}
      >
        {/* Large stacked SANMUK text */}
        <div className="relative">
          {/* Ghost layers */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={`ghost-${i}`}
              className="font-display text-[20vw] md:text-[16vw] font-bold leading-[0.85] tracking-[-0.02em] text-outline opacity-[0.08]"
              initial={{ opacity: 0, y: 150, filter: 'blur(20px)', rotateX: 45 }}
              animate={{ opacity: 0.08, y: 0, filter: 'blur(0px)', rotateX: 0 }}
              transition={{
                duration: 1.5,
                delay: i * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{
                position: 'absolute',
                top: `${i * 3}px`,
                left: 0,
                right: 0,
              }}
            >
              {title}
            </motion.div>
          ))}
          
          {/* Main title - letter by letter */}
          <div className="font-display text-[20vw] md:text-[16vw] font-bold leading-[0.85] tracking-[-0.02em] text-foreground relative flex justify-center overflow-hidden">
            {title.split('').map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 200, opacity: 0, rotateY: 90 }}
                animate={{ y: 0, opacity: 1, rotateY: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3 + i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="inline-block"
                whileHover={{ 
                  scale: 1.1, 
                  color: 'hsl(350, 75%, 55%)',
                  transition: { duration: 0.2 }
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle - Zuro & Zubi */}
        <div className="relative mt-6">
          {[0, 1, 2].map((i) => (
            <motion.p
              key={`sub-ghost-${i}`}
              className="font-display text-[6vw] md:text-[4vw] italic text-outline-thin opacity-[0.06]"
              initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
              animate={{ opacity: 0.06, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 1.2,
                delay: 0.8 + i * 0.03,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{
                position: 'absolute',
                top: `${i * 2}px`,
                left: 0,
                right: 0
              }}
            >
              {subtitle}
            </motion.p>
          ))}
          <motion.p
            className="font-display text-[6vw] md:text-[4vw] italic text-accent relative"
            initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 1.2,
              delay: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Tagline */}
        <motion.p
          className="font-body text-sm md:text-base text-muted-foreground mt-8 tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          One year of Pichi calling Zuro a stupid old man
        </motion.p>

        {/* Bottom info */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="font-body text-[10px] md:text-xs tracking-[0.4em] text-muted-foreground uppercase">
            Est. December 2024
          </span>
          
          {/* Animated scroll indicator */}
          <motion.div
            className="w-[1px] h-16 bg-gradient-to-b from-accent/60 to-transparent relative overflow-hidden"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            style={{ transformOrigin: 'top' }}
          >
            <motion.div
              className="absolute top-0 left-0 right-0 h-4 bg-accent"
              animate={{ y: [0, 64, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Side text elements */}
      <motion.div
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:block"
        initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        transition={{ delay: 1.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="font-body text-[10px] tracking-[0.3em] text-muted-foreground uppercase writing-vertical">
          Stupid Old Man & His Pichi
        </span>
      </motion.div>

      <motion.div
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden md:block"
        initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        transition={{ delay: 1.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span className="font-body text-[10px] tracking-[0.3em] text-muted-foreground uppercase writing-vertical">
          One Year Anniversary ❤️
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;