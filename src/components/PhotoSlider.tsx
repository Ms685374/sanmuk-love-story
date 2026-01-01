import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import heroCouple from '@/assets/hero-couple.jpg';
import coupleBeach from '@/assets/couple-beach.jpg';
import coupleLaugh from '@/assets/couple-laugh.jpg';
import coupleEmbrace from '@/assets/couple-embrance.jpg';
import coupleStars from '@/assets/couple-stars.jpg';

const photos = [
  { id: 1, image: heroCouple, caption: 'Where it all began' },
  { id: 2, image: coupleBeach, caption: 'Our favorite escape' },
  { id: 3, image: coupleLaugh, caption: 'Laughing at nothing' },
  { id: 4, image: coupleEmbrace, caption: 'Just us' },
  { id: 5, image: coupleStars, caption: 'Under the stars' },
  { id: 6, image: heroCouple, caption: 'Every moment' },
  { id: 7, image: coupleBeach, caption: 'Together forever' },
];

const PhotoSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['10%', '-60%']);

  return (
    <section ref={containerRef} id="memories" className="relative py-24 md:py-40 overflow-hidden">
      {/* Section header */}
      <div className="px-6 md:px-12 mb-6">
        <motion.span
          className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          (Memories)
        </motion.span>

        {/* Large stacked title */}
        <div className="relative mb-4">
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
              UNVEILED
            </motion.h2>
          ))}
          <motion.h2
            className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-foreground relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            UNVEILED
          </motion.h2>
        </div>

        <div className="relative">
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
              MOMENTS
            </motion.h2>
          ))}
          <motion.h2
            className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-accent relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            MOMENTS
          </motion.h2>
        </div>
      </div>

      {/* Description */}
      <motion.p
        className="px-6 md:px-12 font-display text-lg md:text-2xl italic text-muted-foreground max-w-xl mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Every photo tells a story of chaos, laughter, and pure love.
      </motion.p>

      {/* Horizontal scrolling photos with clip-path reveal */}
      <motion.div 
        className="flex gap-4 md:gap-8 pl-6 md:pl-12"
        style={{ x }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="relative flex-shrink-0 w-[280px] md:w-[400px] lg:w-[500px] aspect-[3/4] overflow-hidden group"
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              delay: index * 0.1, 
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {/* Image with scale on scroll */}
            <motion.img
              src={photo.image}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            />

            {/* Caption overlay */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            >
              <span className="font-body text-xs tracking-[0.2em] text-foreground/70 uppercase">
                {photo.caption}
              </span>
            </motion.div>

            {/* Number indicator */}
            <div className="absolute top-6 left-6">
              <span className="font-body text-xs tracking-widest text-foreground/40">
                /{String(index + 1).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PhotoSlider;
