import { motion } from 'framer-motion';

const reasons = [
  { number: '/01', title: 'YOUR SMILE', description: 'The one that makes everything better' },
  { number: '/02', title: 'YOUR LAUGH', description: 'My favorite sound in the world' },
  { number: '/03', title: 'YOUR VOICE', description: 'Could listen to it forever' },
  { number: '/04', title: 'YOUR HEART', description: 'So pure, so beautiful, so mine' },
  { number: '/05', title: 'YOUR LOVE', description: 'The greatest gift I ever received' },
  { number: '/06', title: 'EVERYTHING', description: 'Every little thing about you' },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12">
      {/* Section header */}
      <motion.span
        className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-12"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        (Why I Love You)
      </motion.span>

      {/* Stacked title */}
      <div className="relative mb-8">
        {[0, 1, 2].map((i) => (
          <motion.h2
            key={`ghost-${i}`}
            className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-outline opacity-[0.06]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 0.06, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03, duration: 1 }}
            style={{
              position: 'absolute',
              top: `${i * 4}px`,
              left: 0,
            }}
          >
            REASONS
          </motion.h2>
        ))}
        <motion.h2
          className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-foreground relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 1 }}
        >
          REASONS
        </motion.h2>
      </div>

      <div className="relative mb-20">
        {[0, 1, 2].map((i) => (
          <motion.h2
            key={`ghost2-${i}`}
            className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-outline-thin opacity-[0.04]"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 0.04, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.03, duration: 1 }}
            style={{
              position: 'absolute',
              top: `${i * 4}px`,
              left: 0,
            }}
          >
            I ADORE YOU
          </motion.h2>
        ))}
        <motion.h2
          className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-accent relative"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          I ADORE YOU
        </motion.h2>
      </div>

      {/* Description */}
      <motion.p
        className="font-display text-lg md:text-2xl italic text-muted-foreground max-w-xl mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        A million reasons wouldn't be enough, but here are a few that make my heart yours.
      </motion.p>

      {/* List */}
      <div className="max-w-4xl">
        {reasons.map((item, index) => (
          <motion.div
            key={item.number}
            className="group border-t border-border py-8 md:py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.8 }}
            whileHover={{ x: 10 }}
          >
            <span className="font-body text-xs tracking-[0.2em] text-muted-foreground w-16 flex-shrink-0">
              {item.number}
            </span>

            <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground group-hover:text-accent transition-colors duration-500 flex-1">
              {item.title}
            </h3>

            <motion.p className="font-body text-sm text-muted-foreground max-w-xs opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              {item.description}
            </motion.p>

            <motion.span className="font-body text-xl text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all duration-500">
              →
            </motion.span>
          </motion.div>
        ))}
        
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default ServicesSection;