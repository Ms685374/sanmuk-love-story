import { motion } from 'framer-motion';

const services = [
  { number: '/01', title: 'ENDLESS CUDDLES', description: 'Professional-grade hugging, available 24/7' },
  { number: '/02', title: 'FOOD SHARING', description: 'Sometimes. When Mukesh is feeling generous' },
  { number: '/03', title: 'BAD JOKE TOLERANCE', description: 'Sanjana has mastered the art of fake laughing' },
  { number: '/04', title: 'MIDNIGHT TALKS', description: 'Deep conversations & silly arguments included' },
  { number: '/05', title: 'FOREVER SUPPORT', description: 'Through thick, thin, and hangry moments' },
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
        (Method)
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
            LOVE
          </motion.h2>
        ))}
        <motion.h2
          className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-foreground relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          LOVE
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
            SERVICES
          </motion.h2>
        ))}
        <motion.h2
          className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-accent relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          SERVICES
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
        We offer a curated range of relationship perks—designed to keep each other happy through bold adventures and everyday magic.
      </motion.p>

      {/* Services list - vertical like Sonance */}
      <div className="max-w-4xl">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            className="group border-t border-border py-8 md:py-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            {/* Number */}
            <span className="font-body text-xs tracking-[0.2em] text-muted-foreground w-16 flex-shrink-0">
              {service.number}
            </span>

            {/* Title */}
            <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground group-hover:text-accent transition-colors duration-500 flex-1">
              {service.title}
            </h3>

            {/* Description - reveals on hover */}
            <motion.p
              className="font-body text-sm text-muted-foreground max-w-xs opacity-60 group-hover:opacity-100 transition-opacity duration-500"
            >
              {service.description}
            </motion.p>

            {/* Arrow */}
            <motion.span
              className="font-body text-xl text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all duration-500"
            >
              →
            </motion.span>
          </motion.div>
        ))}
        
        {/* Bottom border */}
        <div className="border-t border-border" />
      </div>
    </section>
  );
};

export default ServicesSection;
