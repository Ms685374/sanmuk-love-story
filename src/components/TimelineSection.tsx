import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const timelineEvents = [
  {
    number: '/01',
    date: 'December 2024',
    title: 'The Beginning',
    description: 'Zuro said something stupid. Zubi laughed. And that was it. Game over for both.',
    emoji: '💫'
  },
  {
    number: '/02',
    date: 'First Call',
    title: 'The 6-Hour Call',
    description: '"I should go sleep" - said at 1 AM. Actually hung up at 7 AM. Oops.',
    emoji: '📞'
  },
  {
    number: '/03',
    date: 'The Proposal',
    title: 'Official Stupids',
    description: 'Zuro gathered all his courage. Pichi said yes. Now he is her personal stupid old man.',
    emoji: '💍'
  },
  {
    number: '/04',
    date: 'Daily Life',
    title: 'Chaos Mode',
    description: 'Fighting over who loves more. Spoiler: It is always a tie (but Zuro wins tbh).',
    emoji: '🔥'
  },
  {
    number: '/05',
    date: 'Forever',
    title: 'The Promise',
    description: 'To annoy each other, steal each other\'s food, and love each other. Till WiFi do us part.',
    emoji: '♾️'
  },
];

const TimelineSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section ref={containerRef} id="timeline" className="relative py-24 md:py-40 px-6 md:px-12">
      {/* Section header */}
      <motion.span
        className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-12"
        initial={{ opacity: 0, x: -30, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        (How We Got Here)
      </motion.span>

      {/* Stacked title */}
      <div className="relative mb-8">
        {[0, 1, 2].map((i) => (
          <motion.h2
            key={`ghost-${i}`}
            className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-outline opacity-[0.06]"
            initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
            whileInView={{ opacity: 0.06, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
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
          initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          OUR
        </motion.h2>
      </div>

      <div className="relative mb-20">
        {[0, 1, 2].map((i) => (
          <motion.h2
            key={`ghost2-${i}`}
            className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-outline-thin opacity-[0.04]"
            initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
            whileInView={{ opacity: 0.04, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.05, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'absolute',
              top: `${i * 4}px`,
              left: 0,
            }}
          >
            CHAOS
          </motion.h2>
        ))}
        <motion.h2
          className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-accent relative"
          initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          CHAOS
        </motion.h2>
      </div>

      {/* Timeline items */}
      <div className="max-w-6xl relative">
        {/* Animated timeline line */}
        <div className="absolute left-0 md:left-[4.5%] top-0 bottom-0 w-[1px] bg-border hidden md:block">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-accent"
            style={{ height: lineHeight }}
          />
        </div>

        {timelineEvents.map((event, index) => (
          <motion.div
            key={event.number}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 border-t border-border py-10 md:py-16 relative"
            initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              delay: index * 0.1, 
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ x: 10 }}
          >
            {/* Number */}
            <div className="md:col-span-1 flex items-center gap-3">
              <span className="font-body text-xs tracking-[0.2em] text-muted-foreground">
                {event.number}
              </span>
              <motion.span 
                className="text-2xl"
                whileHover={{ scale: 1.3, rotate: 15 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {event.emoji}
              </motion.span>
            </div>

            {/* Date */}
            <div className="md:col-span-2">
              <span className="font-body text-xs tracking-[0.2em] text-accent uppercase">
                {event.date}
              </span>
            </div>

            {/* Title */}
            <div className="md:col-span-4">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-all duration-500">
                {event.title}
              </h3>
            </div>

            {/* Description */}
            <div className="md:col-span-5">
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-500">
                {event.description}
              </p>
            </div>
          </motion.div>
        ))}
        
        {/* Bottom border */}
        <motion.div 
          className="border-t border-border"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </section>
  );
};

export default TimelineSection;