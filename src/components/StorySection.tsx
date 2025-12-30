import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const StorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} id="story" className="relative py-24 md:py-40 px-6 md:px-12 overflow-hidden">
      {/* Floating background element */}
      <motion.div 
        className="absolute -right-40 top-1/3 text-[30vw] font-display font-bold text-foreground/[0.02] pointer-events-none select-none"
        style={{ y }}
      >
        PICHI
      </motion.div>

      {/* Section label */}
      <motion.span
        className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-12"
        initial={{ opacity: 0, x: -30, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        (Our Story)
      </motion.span>

      {/* Large stacked title */}
      <div className="relative mb-8">
        {[0, 1, 2].map((i) => (
          <motion.h2
            key={`ghost-${i}`}
            className="font-display text-[16vw] md:text-[12vw] font-bold leading-[0.85] text-outline opacity-[0.06]"
            initial={{ opacity: 0, y: 80, filter: 'blur(15px)' }}
            whileInView={{ opacity: 0.06, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'absolute',
              top: `${i * 5}px`,
              left: 0,
            }}
          >
            HOW WE
          </motion.h2>
        ))}
        <motion.h2
          className="font-display text-[16vw] md:text-[12vw] font-bold leading-[0.85] text-foreground relative"
          initial={{ opacity: 0, y: 80, filter: 'blur(15px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          HOW WE
        </motion.h2>
      </div>

      <div className="relative mb-20">
        {[0, 1, 2].map((i) => (
          <motion.h2
            key={`ghost2-${i}`}
            className="font-display text-[16vw] md:text-[12vw] font-bold leading-[0.85] text-outline-thin opacity-[0.04]"
            initial={{ opacity: 0, y: 80, filter: 'blur(15px)' }}
            whileInView={{ opacity: 0.04, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.05, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              position: 'absolute',
              top: `${i * 5}px`,
              left: 0,
            }}
          >
            FELL
          </motion.h2>
        ))}
        <motion.h2
          className="font-display text-[16vw] md:text-[12vw] font-bold leading-[0.85] text-accent relative"
          initial={{ opacity: 0, y: 80, filter: 'blur(15px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          FELL
        </motion.h2>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-6">
            (Zuro's Version)
          </span>
          <p className="font-display text-xl md:text-3xl leading-relaxed text-foreground/90 italic">
            I saw her. My brain went "oh no". My heart went "oh YES". 
            And now I'm stuck being called a "stupid old man" by the love of my life. Worth it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-6">
            (Zubi's Version... probably)
          </span>
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
            This stupid man made me laugh. Then he made me smile. Then he made me fall. 
            Now I'm stuck with him forever and honestly? I wouldn't have it any other way. 
            (But he's still stupid tho)
          </p>
          <motion.a
            href="#memories"
            className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] text-foreground hover:text-accent transition-colors uppercase group"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            See Our Memories
            <motion.span className="text-lg group-hover:translate-x-2 transition-transform duration-300">
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;