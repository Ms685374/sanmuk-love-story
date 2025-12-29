import { motion } from 'framer-motion';

const timelineEvents = [
  {
    date: 'December 2024',
    title: 'The Beginning',
    description: 'Two souls collided. Mukesh said something stupid, Sanjana laughed anyway. The rest is history.',
    emoji: '💫',
  },
  {
    date: 'First Week',
    title: 'The Realization',
    description: 'Wait... we actually like each other? This wasn\'t in the plan but we\'re not complaining.',
    emoji: '🤯',
  },
  {
    date: 'First Month',
    title: 'The "Official" Talk',
    description: 'After 47 hints from Sanjana, Mukesh finally got the message. We made it official!',
    emoji: '💕',
  },
  {
    date: 'Ongoing',
    title: 'Building Memories',
    description: 'Every day is a new adventure. Some days we fight, some days we can\'t stop laughing. Perfect balance.',
    emoji: '🎢',
  },
  {
    date: 'Forever',
    title: 'The Promise',
    description: 'To annoy each other, support each other, and love each other. Till the WiFi do us part.',
    emoji: '💍',
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative py-32 px-6 md:px-12">
      {/* Section label */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase">
          (Our Journey)
        </span>
      </motion.div>

      {/* Stacked titles */}
      <div className="relative mb-8">
        {[...Array(5)].map((_, i) => (
          <motion.h2
            key={i}
            className={`font-display text-[10vw] md:text-[7vw] font-bold leading-none ${
              i === 4 ? 'text-foreground' : 'text-outline opacity-15'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: i === 4 ? 1 : 0.15, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            style={{
              position: i === 4 ? 'relative' : 'absolute',
              top: i === 4 ? 'auto' : `${i * 5}px`,
              left: 0,
            }}
          >
            LOVE
          </motion.h2>
        ))}
      </div>

      <div className="relative mb-20">
        {[...Array(5)].map((_, i) => (
          <motion.h2
            key={i}
            className={`font-display text-[10vw] md:text-[7vw] font-bold leading-none ${
              i === 4 ? 'text-accent' : 'text-outline-thin opacity-10'
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: i === 4 ? 1 : 0.1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.05, duration: 0.6 }}
            style={{
              position: i === 4 ? 'relative' : 'absolute',
              top: i === 4 ? 'auto' : `${i * 5}px`,
              left: 0,
            }}
          >
            TIMELINE
          </motion.h2>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <motion.div
          className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          style={{ transformOrigin: 'top' }}
        />

        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className={`relative flex items-start gap-8 mb-16 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
          >
            {/* Timeline dot */}
            <motion.div
              className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.4, type: 'spring' }}
            />

            {/* Content */}
            <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
              <motion.div
                className="p-6 bg-card rounded-lg border border-border hover:border-accent/30 transition-colors"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <span className="text-4xl mb-4 block">{event.emoji}</span>
                <span className="font-body text-xs tracking-widest text-accent uppercase">
                  {event.date}
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-2">
                  {event.title}
                </h3>
                <p className="font-body text-muted-foreground mt-3 leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
