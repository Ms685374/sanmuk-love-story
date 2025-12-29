import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import coupleBeach from '@/assets/couple-beach.jpg';
import coupleEmbrace from '@/assets/couple-embrace.jpg';
import coupleLaugh from '@/assets/couple-laugh.jpg';
import coupleStars from '@/assets/couple-stars.jpg';
import heroCouple from '@/assets/hero-couple-1.jpg';

const photos = [
  { id: 1, image: heroCouple, placeholder: 'Replace with your first memory together' },
  { id: 2, image: coupleBeach, placeholder: 'Your favorite date' },
  { id: 3, image: coupleLaugh, placeholder: 'A funny moment' },
  { id: 4, image: coupleEmbrace, placeholder: 'A special occasion' },
  { id: 5, image: coupleStars, placeholder: 'Just being together' },
  { id: 6, image: heroCouple, placeholder: 'Adventure time' },
  { id: 7, image: coupleBeach, placeholder: 'Cozy moments' },
];

const PhotoSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Section label */}
      <motion.div
        className="px-6 md:px-12 mb-12"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase">
          (Framed)
        </span>
      </motion.div>

      {/* Stacked title */}
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
            UNVEILED
          </motion.h2>
        ))}
      </div>

      <div className="px-6 md:px-12 relative mb-16">
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
            MOMENTS
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
        SanMuk represents pure chaos wrapped in love. We champion laughter—through fights and makeups
      </motion.p>

      {/* Horizontal scrolling photos */}
      <motion.div 
        className="flex gap-6 px-6"
        style={{ x }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="relative flex-shrink-0 w-[300px] md:w-[400px] h-[400px] md:h-[500px] bg-secondary rounded-lg overflow-hidden group"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, type: 'spring' }}
            whileHover={{ scale: 1.02, rotate: 1 }}
          >
            {/* Image */}
            <motion.img
              src={photo.image}
              alt={photo.placeholder}
              className="w-full h-full object-cover"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            />

            {/* Overlay on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"
            >
              <p className="font-body text-sm text-foreground">
                {photo.placeholder}
              </p>
            </motion.div>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-foreground/20 group-hover:border-accent/50 transition-colors" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-foreground/20 group-hover:border-accent/50 transition-colors" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PhotoSlider;
