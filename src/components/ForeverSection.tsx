import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ForeverSection = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
    { value: timeElapsed.days, label: 'Days' },
    { value: timeElapsed.hours, label: 'Hours' },
    { value: timeElapsed.minutes, label: 'Minutes' },
    { value: timeElapsed.seconds, label: 'Seconds' },
  ];

  return (
    <section id="forever" className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Subtle gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(350 75% 55% / 0.1) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <motion.span
          className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          (Time Together)
        </motion.span>

        {/* Large title */}
        <div className="text-center mb-16">
          <motion.h2
            className="font-display text-[16vw] md:text-[12vw] font-bold text-foreground leading-[0.85]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            FOREVER
          </motion.h2>
          <motion.p
            className="font-display text-[8vw] md:text-[6vw] italic text-accent mt-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            & Counting
          </motion.p>
        </div>

        {/* Timer - minimal style */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center py-8 border-t border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <motion.span
                className="font-display text-5xl md:text-7xl font-bold text-foreground block"
                key={stat.value}
              >
                {String(stat.value).padStart(2, '0')}
              </motion.span>
              <span className="font-body text-[10px] tracking-[0.3em] text-muted-foreground uppercase mt-4 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Message */}
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="font-display text-xl md:text-2xl italic text-foreground/90 leading-relaxed mb-8">
            Every second with you is a second I'd choose again. Here's to 1 year down, 
            and a lifetime of annoying each other to go!
          </p>
          <p className="font-body text-sm text-muted-foreground">
            Happy 1st Anniversary, Sanjana! 
            <span className="text-accent ml-2">— Mukesh</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ForeverSection;
