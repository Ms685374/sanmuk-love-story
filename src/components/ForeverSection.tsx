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
    const startDate = new Date('2024-12-29'); // Adjust to your actual proposal date

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
    <section id="forever" className="relative py-32 px-6 md:px-12 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(350 80% 60% / 0.1) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          💕
        </motion.div>
      ))}

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Section label */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase">
            (Time Together)
          </span>
        </motion.div>

        {/* Large title */}
        <motion.h2
          className="font-display text-[12vw] md:text-[10vw] font-bold text-foreground leading-none mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          FOREVER
          <br />
          <span className="text-accent italic">& Counting</span>
        </motion.h2>

        {/* Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-4xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="relative p-6 md:p-8 bg-card rounded-lg border border-border"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, borderColor: 'hsl(var(--accent))' }}
            >
              <motion.span
                className="font-display text-4xl md:text-6xl font-bold text-foreground block"
                key={stat.value}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {stat.value}
              </motion.span>
              <span className="font-body text-xs tracking-widest text-muted-foreground uppercase mt-2 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Message */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="font-display text-xl md:text-2xl italic text-foreground/90 leading-relaxed mb-8">
            Every second with you is a second I'd choose again. Here's to 1 year down, 
            and a lifetime of annoying each other to go! 🎉
          </p>
          <p className="font-body text-muted-foreground">
            Happy 1st Anniversary, Sanjana! From your forever partner-in-crime, Mukesh 💕
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ForeverSection;
