import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const services = [
  { 
    number: '/01', 
    title: 'UNLIMITED ANNOYANCE', 
    description: 'Zuro specializes in being a "stupid old man" 24/7',
    emoji: '👴'
  },
  { 
    number: '/02', 
    title: 'PICHI CUDDLES', 
    description: 'Zubi demands them. Zuro happily provides.',
    emoji: '🤗'
  },
  { 
    number: '/03', 
    title: 'STUPID JOKES DEPT.', 
    description: 'Zuro tells bad jokes. Pichi pretends to laugh.',
    emoji: '🤦‍♀️'
  },
  { 
    number: '/04', 
    title: '3AM THERAPY', 
    description: 'Deep talks, overthinking, and random "I love you"s',
    emoji: '🌙'
  },
  { 
    number: '/05', 
    title: 'FOOD STEALING', 
    description: '"Just one bite" = half the plate gone',
    emoji: '🍕'
  },
  { 
    number: '/06', 
    title: 'FOREVER CONTRACT', 
    description: 'No refunds. No exchanges. Zubi is stuck with this stupid old man.',
    emoji: '💍'
  },
];

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const titleY = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Background decorative text */}
      <motion.div 
        className="absolute -right-20 top-1/2 -translate-y-1/2 font-display text-[30vw] font-bold text-foreground/[0.02] pointer-events-none select-none"
        style={{ y: titleY }}
      >
        ZUBI
      </motion.div>

      {/* Section header */}
      <motion.span
        className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-12"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        (What Zuro Offers)
      </motion.span>

      {/* Stacked title */}
      <div className="relative mb-8">
        {[0, 1, 2].map((i) => (
          <motion.h2
            key={`ghost-${i}`}
            className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-outline opacity-[0.06]"
            initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
            whileInView={{ opacity: 0.06, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'absolute',
              top: `${i * 4}px`,
              left: 0,
            }}
          >
            BOYFRIEND
          </motion.h2>
        ))}
        <motion.h2
          className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-foreground relative"
          initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          BOYFRIEND
        </motion.h2>
      </div>

      <div className="relative mb-20">
        {[0, 1, 2].map((i) => (
          <motion.h2
            key={`ghost2-${i}`}
            className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-outline-thin opacity-[0.04]"
            initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
            whileInView={{ opacity: 0.04, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.05, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'absolute',
              top: `${i * 4}px`,
              left: 0,
            }}
          >
            DUTIES
          </motion.h2>
        ))}
        <motion.h2
          className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-accent relative"
          initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          DUTIES
        </motion.h2>
      </div>

      {/* Description */}
      <motion.p
        className="font-display text-lg md:text-2xl italic text-muted-foreground max-w-xl mb-20"
        initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        A comprehensive list of things this "stupid old man" is contractually obligated to do for his Pichi. No complaints allowed.
      </motion.p>

      {/* Services list */}
      <div className="max-w-4xl">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            className="group border-t border-border py-8 md:py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 cursor-pointer"
            initial={{ opacity: 0, x: -50, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              delay: index * 0.08, 
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ x: 20 }}
          >
            {/* Number */}
            <span className="font-body text-xs tracking-[0.2em] text-muted-foreground w-16 flex-shrink-0">
              {service.number}
            </span>

            {/* Emoji */}
            <motion.span 
              className="text-2xl md:text-3xl"
              whileHover={{ scale: 1.3, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {service.emoji}
            </motion.span>

            {/* Title */}
            <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground group-hover:text-accent transition-all duration-500 flex-1">
              {service.title}
            </h3>

            {/* Description */}
            <motion.p
              className="font-body text-sm text-muted-foreground max-w-xs opacity-60 group-hover:opacity-100 transition-all duration-500"
            >
              {service.description}
            </motion.p>

            {/* Arrow */}
            <motion.span
              className="font-body text-xl text-muted-foreground group-hover:text-accent transition-all duration-500"
              initial={{ x: 0 }}
              whileHover={{ x: 10 }}
            >
              →
            </motion.span>
          </motion.div>
        ))}
        
        {/* Bottom border */}
        <motion.div 
          className="border-t border-border"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </section>
  );
};

export default ServicesSection;