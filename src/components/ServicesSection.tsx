import { motion } from 'framer-motion';

const services = [
  { number: '01', title: 'ENDLESS CUDDLES', description: 'Professional-grade hugging, available 24/7' },
  { number: '02', title: 'FOOD SHARING', description: 'Sometimes. When Mukesh is feeling generous' },
  { number: '03', title: 'BAD JOKE TOLERANCE', description: 'Sanjana has mastered the art of fake laughing' },
  { number: '04', title: 'MIDNIGHT TALKS', description: 'Deep conversations & silly arguments included' },
  { number: '05', title: 'FOREVER SUPPORT', description: 'Through thick, thin, and hangry moments' },
];

const ServicesSection = () => {
  return (
    <section id="memories" className="relative py-32 px-6 md:px-12">
      {/* Section label */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase">
          (What We Offer)
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
            SERVICES
          </motion.h2>
        ))}
      </div>

      {/* Description */}
      <motion.p
        className="font-display text-lg md:text-xl italic text-muted-foreground max-w-2xl mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        We offer a curated range of relationship perks from concept to forever—designed to keep each other happy through bold adventures and everyday magic.
      </motion.p>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.number}
            className="group relative p-8 border border-border rounded-lg hover:border-accent/50 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
          >
            {/* Background glow on hover */}
            <motion.div
              className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            {/* Number */}
            <span className="relative font-display text-6xl font-bold text-outline opacity-30 group-hover:opacity-50 transition-opacity">
              {service.number}
            </span>

            {/* Title */}
            <h3 className="relative mt-4 font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="relative mt-2 font-body text-sm text-muted-foreground">
              {service.description}
            </p>

            {/* Corner accent */}
            <motion.div
              className="absolute bottom-0 right-0 w-0 h-0 border-b-[60px] border-r-[60px] border-b-accent/20 border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
