import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const StorySection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="story" className="relative py-32 px-6 md:px-12">
      {/* Section label */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase">
          (Our Story)
        </span>
      </motion.div>

      {/* Large stacked title */}
      <div ref={titleRef} className="relative mb-20">
        {[...Array(5)].map((_, i) => (
          <motion.h2
            key={i}
            className={`font-display text-[12vw] md:text-[8vw] font-bold leading-none ${
              i === 4 ? 'text-foreground' : 'text-outline opacity-15'
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={titleVisible ? { opacity: i === 4 ? 1 : 0.15, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.8 }}
            style={{
              position: i === 4 ? 'relative' : 'absolute',
              top: i === 4 ? 'auto' : `${i * 6}px`,
              left: 0,
            }}
          >
            HOW WE
          </motion.h2>
        ))}
      </div>

      <div className="relative mb-20">
        {[...Array(5)].map((_, i) => (
          <motion.h2
            key={i}
            className={`font-display text-[12vw] md:text-[8vw] font-bold leading-none ${
              i === 4 ? 'text-accent' : 'text-outline-thin opacity-10'
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: i === 4 ? 1 : 0.1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.08, duration: 0.8 }}
            style={{
              position: i === 4 ? 'relative' : 'absolute',
              top: i === 4 ? 'auto' : `${i * 6}px`,
              left: 0,
            }}
          >
            MET
          </motion.h2>
        ))}
      </div>

      {/* Content grid */}
      <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-body text-xs tracking-widest text-muted-foreground mb-4 block">
            (©2024)
          </span>
          <p className="font-display text-xl md:text-2xl leading-relaxed text-foreground/90 italic">
            Two idiots who thought they could live without each other... until they couldn't. 
            What started as awkward conversations turned into endless late-night calls, 
            and suddenly Mukesh realized Sanjana was the only person who laughed at his terrible jokes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={contentVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="font-body text-xs tracking-widest text-muted-foreground mb-4 block">
            (The Beginning)
          </span>
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground">
            December 2024 marked the day we officially said "You're stuck with me forever." 
            Best decision ever? Absolutely. Most chaotic? Also yes. But that's what makes us, US. 
            From stealing each other's food to stealing each other's hearts – we've mastered both arts.
          </p>
          <motion.a
            href="#memories"
            className="inline-flex items-center gap-2 mt-6 font-body text-sm tracking-widest text-foreground hover:text-accent transition-colors group"
            whileHover={{ x: 10 }}
          >
            See Our Memories
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute right-12 top-1/4 w-32 h-32 border border-muted/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute right-24 top-1/3 w-16 h-16 border border-accent/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  );
};

export default StorySection;
