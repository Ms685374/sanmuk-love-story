import { motion } from 'framer-motion';

const timelineEvents = [
  {
    number: '/01',
    date: 'December 2024',
    title: 'The Beginning',
    description: 'Two souls collided. Mukesh said something stupid, Sanjana laughed anyway.',
  },
  {
    number: '/02',
    date: 'First Week',
    title: 'The Realization',
    description: "Wait... we actually like each other? This wasn't in the plan but we're not complaining.",
  },
  {
    number: '/03',
    date: 'First Month',
    title: 'The "Official" Talk',
    description: 'After 47 hints from Sanjana, Mukesh finally got the message.',
  },
  {
    number: '/04',
    date: 'Ongoing',
    title: 'Building Memories',
    description: "Every day is a new adventure. Some days we fight, some days we can't stop laughing.",
  },
  {
    number: '/05',
    date: 'Forever',
    title: 'The Promise',
    description: 'To annoy each other, support each other, and love each other. Till the WiFi do us part.',
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="relative py-24 md:py-40 px-6 md:px-12">
      {/* Section header */}
      <motion.span
        className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-12"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        (Timeline)
      </motion.span>

      {/* Stacked title */}
      <div className="relative mb-8">
        {[0, 1, 2].map((i) => (
          <motion.h2
            key={`ghost-${i}`}
            className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-outline opacity-[0.06]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 0.06, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 0.8 }}
            style={{
              position: 'absolute',
              top: `${i * 4}px`,
              left: 0,
            }}
          >
            OUR
          </motion.h2>
        ))}
        <motion.h2
          className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-foreground relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          OUR
        </motion.h2>
      </div>

      <div className="relative mb-20">
        {[0, 1, 2].map((i) => (
          <motion.h2
            key={`ghost2-${i}`}
            className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-outline-thin opacity-[0.04]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 0.04, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.03, duration: 0.8 }}
            style={{
              position: 'absolute',
              top: `${i * 4}px`,
              left: 0,
            }}
          >
            JOURNEY
          </motion.h2>
        ))}
        <motion.h2
          className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-accent relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          JOURNEY
        </motion.h2>
      </div>

      {/* Timeline items - horizontal layout like Sonance METHOD section */}
      <div className="max-w-6xl">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.number}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-border py-10 md:py-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
          >
            {/* Number */}
            <div className="md:col-span-1">
              <span className="font-body text-xs tracking-[0.2em] text-muted-foreground">
                {event.number}
              </span>
            </div>

            {/* Date */}
            <div className="md:col-span-2">
              <span className="font-body text-xs tracking-[0.2em] text-accent uppercase">
                {event.date}
              </span>
            </div>

            {/* Title */}
            <div className="md:col-span-4">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-500">
                {event.title}
              </h3>
            </div>

            {/* Description */}
            <div className="md:col-span-5">
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
        
        {/* Bottom border */}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default TimelineSection;
