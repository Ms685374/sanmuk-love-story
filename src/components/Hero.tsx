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

  const title = "SANMUK";

  return (
    <section ref={containerRef} className="relative h-[100vh] overflow-hidden flex items-center justify-center">
      {/* Subtle animated gradient */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(ellipse at 30% 50%, hsl(350 80% 60% / 0.05) 0%, transparent 50%)',
            'radial-gradient(ellipse at 70% 50%, hsl(350 80% 60% / 0.07) 0%, transparent 50%)',
            'radial-gradient(ellipse at 30% 50%, hsl(350 80% 60% / 0.05) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Main content */}
      <motion.div 
        className="relative z-10 text-center w-full px-4"
        style={{ opacity, scale, y }}
      >
        {/* Ghost layers */}
        <div className="relative">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={`ghost-${i}`}
              className="font-display text-[20vw] md:text-[16vw] font-bold leading-[0.85] tracking-[-0.02em] text-outline opacity-[0.06]"
              initial={{ opacity: 0, y: 120 }}
              animate={{ opacity: 0.06, y: 0 }}
              transition={{
                duration: 1.4,
                delay: i * 0.04,
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
          
          {/* Main title */}
          <div className="font-display text-[20vw] md:text-[16vw] font-bold leading-[0.85] tracking-[-0.02em] text-foreground relative flex justify-center overflow-hidden">
            {title.split('').map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3 + i * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <div className="relative mt-6">
          {[0, 1, 2].map((i) => (
            <motion.p
              key={`sub-ghost-${i}`}
              className="font-display text-[5vw] md:text-[3.5vw] italic text-outline-thin opacity-[0.05]"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0.05, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.9 + i * 0.03,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              style={{
                position: 'absolute',
                top: `${i * 2}px`,
                left: 0,
                right: 0
              }}
            >
              Forever Yours
            </motion.p>
          ))}
          <motion.p
            className="font-display text-[5vw] md:text-[3.5vw] italic text-accent relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            Forever Yours
          </motion.p>
        </div>

        {/* Bottom info */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="font-body text-[10px] md:text-xs tracking-[0.4em] text-muted-foreground uppercase">
            Est. December 2024
          </span>
          
          <motion.div
            className="w-[1px] h-16 bg-gradient-to-b from-muted-foreground/50 to-transparent"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>
      </motion.div>

      {/* Side text */}
      <motion.div
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden md:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="font-body text-[10px] tracking-[0.3em] text-muted-foreground uppercase writing-vertical">
          Mukesh & Sanjana
        </span>
      </motion.div>

      <motion.div
        className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden md:block"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="font-body text-[10px] tracking-[0.3em] text-muted-foreground uppercase writing-vertical">
          One Year Together
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;