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
  { id: 'summer', title: 'Summer Days', image: heroCouple },
  { id: 'first', title: 'First Date', image: coupleBeach },
  { id: 'movie', title: 'Movie Nights', image: coupleLaugh },
  { id: 'adventure', title: 'Adventures', image: coupleEmbrace },
  { id: 'lazy', title: 'Lazy Sundays', image: coupleStars },
  { id: 'dance', title: 'Dance Floor', image: coupleDance },
  { id: 'cooking', title: 'Kitchen Chaos', image: coupleCooking },
];

const GallerySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ['5%', '-40%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);

  return (
    <section id="gallery" ref={containerRef} className="relative py-24 md:py-40 overflow-hidden">
      {/* Section header */}
      <div className="px-6 md:px-12 mb-6">
        <motion.span
          className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          (Archive)
        </motion.span>

        {/* Stacked title */}
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
              VISUAL
            </motion.h2>
          ))}
          <motion.h2
            className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-foreground relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            VISUAL
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
              ARCHIVE
            </motion.h2>
          ))}
          <motion.h2
            className="font-display text-[14vw] md:text-[10vw] font-bold leading-[0.9] text-accent relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            ARCHIVE
          </motion.h2>
        </div>
      </div>

      {/* Description */}
      <motion.p
        className="px-6 md:px-12 font-display text-lg md:text-2xl italic text-muted-foreground max-w-xl mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        A curated collection of our most chaotic and beautiful moments.
      </motion.p>

      {/* Gallery Row 1 */}
      <motion.div className="flex gap-4 md:gap-6 mb-4 md:mb-6" style={{ x: x1 }}>
        {galleryItems.slice(0, 4).map((item, index) => (
          <motion.div
            key={item.id}
            className="relative flex-shrink-0 w-[260px] md:w-[380px] aspect-[4/5] overflow-hidden group"
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              delay: index * 0.12, 
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="font-display text-2xl md:text-3xl font-bold text-foreground">
                {item.title}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Gallery Row 2 - opposite direction */}
      <motion.div className="flex gap-4 md:gap-6" style={{ x: x2 }}>
        {galleryItems.slice(3).map((item, index) => (
          <motion.div
            key={item.id}
            className="relative flex-shrink-0 w-[220px] md:w-[320px] aspect-square overflow-hidden group"
            initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0 0 0%)' }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              delay: index * 0.12, 
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <motion.img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="font-display text-xl md:text-2xl font-bold text-foreground">
                {item.title}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GallerySection;
