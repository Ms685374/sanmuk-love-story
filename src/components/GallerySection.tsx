import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import coupleBeach from '@/assets/couple-beach.jpg';
import coupleEmbrace from '@/assets/couple-embrace.jpg';
import coupleLaugh from '@/assets/couple-laugh.jpg';
import coupleStars from '@/assets/couple-stars.jpg';
import coupleDance from '@/assets/couple-dance.jpg';
import coupleCooking from '@/assets/couple-cooking.jpg';
import heroCouple from '@/assets/hero-couple-1.jpg';

const galleryItems = [
  { id: 'summer', title: 'Summer Days', description: 'When we discovered we both hate the heat', image: heroCouple },
  { id: 'veil', title: 'First Date', description: 'Mukesh was so nervous he forgot his wallet', image: coupleBeach },
  { id: 'flicker', title: 'Movie Nights', description: 'Fighting over the remote since day one', image: coupleLaugh },
  { id: 'bloom', title: 'Adventures', description: 'Getting lost but never admitting it', image: coupleEmbrace },
  { id: 'haze', title: 'Lazy Sundays', description: 'Professional couch potatoes at work', image: coupleStars },
];

const row2Items = [
  { id: 1, image: coupleDance },
  { id: 2, image: coupleCooking },
  { id: 3, image: heroCouple },
  { id: 4, image: coupleBeach },
  { id: 5, image: coupleLaugh },
  { id: 6, image: coupleStars },
];

const GallerySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-30%', '0%']);

  return (
    <section id="gallery" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Section label */}
      <motion.div
        className="px-6 md:px-12 mb-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase">
          (Archive)
        </span>
      </motion.div>

      {/* Stacked titles */}
      <div className="px-6 md:px-12 relative mb-8">
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
              left: 24,
            }}
          >
            VISUAL
          </motion.h2>
        ))}
      </div>

      <div className="px-6 md:px-12 relative mb-20">
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
              left: 24,
            }}
          >
            ARCHIVE
          </motion.h2>
        ))}
      </div>

      {/* Description */}
      <motion.p
        className="px-6 md:px-12 font-display text-lg md:text-xl italic text-muted-foreground max-w-2xl mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A curated collection of our most chaotic moments, blending stupid adventures with pure love.
      </motion.p>

      {/* Gallery Row 1 */}
      <motion.div className="flex gap-6 mb-6" style={{ x: x1 }}>
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative flex-shrink-0 w-[280px] md:w-[350px] h-[350px] md:h-[450px] bg-secondary rounded-lg overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, type: 'spring' }}
            whileHover={{ scale: 1.03, rotate: 1 }}
          >
            {/* Image */}
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
              initial={{ scale: 1.3 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />

            {/* Overlay with info */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6"
            >
              <h3 className="font-display text-xl font-bold text-foreground">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground mt-1">{item.description}</p>
            </motion.div>

            {/* Border animation */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-lg transition-all duration-500"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Gallery Row 2 - Different photos */}
      <motion.div className="flex gap-6" style={{ x: x2 }}>
        {row2Items.map((item, index) => (
          <motion.div
            key={item.id}
            className="relative flex-shrink-0 w-[200px] md:w-[280px] h-[280px] md:h-[350px] bg-card rounded-lg overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.6, type: 'spring' }}
            whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
          >
            <motion.img
              src={item.image}
              alt="Memory"
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />
            <motion.div
              className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GallerySection;
