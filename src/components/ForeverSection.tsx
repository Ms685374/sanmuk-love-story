import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const ForeverSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 0.3]);

  useEffect(() => {
    const startDate = new Date('2024-12-29T00:00:00');

    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: timeElapsed.days, label: 'Days', suffix: 'of chaos' },
    { value: timeElapsed.hours, label: 'Hours', suffix: 'of calls' },
    { value: timeElapsed.minutes, label: 'Minutes', suffix: 'of "I love you"s' },
    { value: timeElapsed.seconds, label: 'Seconds', suffix: 'of being stupid' },
  ];

  return (
    <section ref={containerRef} id="forever" className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          scale: backgroundScale,
          opacity: backgroundOpacity,
          background: 'radial-gradient(ellipse at center, hsl(350 75% 55% / 0.15) 0%, transparent 60%)',
        }}
      />

      {/* Floating hearts */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-accent/20 text-4xl pointer-events-none"
          initial={{ 
            x: `${20 + i * 15}%`, 
            y: '100%',
            opacity: 0,
            rotate: 0
          }}
          animate={{ 
            y: '-100%',
            opacity: [0, 0.5, 0],
            rotate: 360
          }}
          transition={{ 
            duration: 8 + i * 2, 
            repeat: Infinity, 
            delay: i * 1.5,
            ease: 'linear'
          }}
        >
          ❤️
        </motion.div>
      ))}

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.span
          className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-12 text-center"
          initial={{ opacity: 0, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          (Zuro + Zubi = Forever)
        </motion.span>

        {/* Large title */}
        <div className="text-center mb-16">
          <motion.h2
            className="font-display text-[16vw] md:text-[12vw] font-bold text-foreground leading-[0.85]"
            initial={{ opacity: 0, y: 80, filter: 'blur(15px)', scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            FOREVER
          </motion.h2>
          <motion.p
            className="font-display text-[8vw] md:text-[6vw] italic text-accent mt-2"
            initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            & Counting
          </motion.p>
        </div>

        {/* Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center py-8 border-t border-border group"
              initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ scale: 1.05 }}
            >
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={stat.value}
                  className="font-display text-5xl md:text-7xl font-bold text-foreground block"
                  initial={{ y: -20, opacity: 0, filter: 'blur(5px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: 20, opacity: 0, filter: 'blur(5px)' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                  {String(stat.value).padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
              <span className="font-body text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-4 block group-hover:text-accent transition-colors duration-500">
                {stat.label}
              </span>
              <span className="font-body text-[9px] text-accent/60 mt-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {stat.suffix}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Message */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="font-display text-xl md:text-2xl italic text-foreground/90 leading-relaxed mb-8">
            Hey Pichi, every second with you makes this stupid old man the happiest. 
            Here's to 1 year of you tolerating my nonsense, and a lifetime more of me annoying you! 
          </p>
          <motion.p 
            className="font-body text-sm text-muted-foreground"
            whileHover={{ scale: 1.02 }}
          >
            Happy 1st Anniversary, Zubi! 
            <motion.span 
              className="text-accent ml-2 inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ❤️
            </motion.span>
            <span className="text-accent ml-2">— Your Zuro</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ForeverSection;