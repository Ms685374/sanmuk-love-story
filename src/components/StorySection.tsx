import { motion } from 'framer-motion';
const StorySection = () => {
  return <section id="story" className="relative py-24 md:py-40 px-6 md:px-12">
      {/* Section label */}
      <motion.span className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-12" initial={{
      opacity: 0,
      x: -30
    }} whileInView={{
      opacity: 1,
      x: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.8
    }}>
        (Our Story)
      </motion.span>

      {/* Large stacked title */}
      <div className="relative mb-8">
        {[0, 1, 2].map(i => <motion.h2 key={`ghost-${i}`} className="font-display text-[16vw] md:text-[12vw] font-bold leading-[0.85] text-outline opacity-[0.06]" initial={{
        opacity: 0,
        y: 60
      }} whileInView={{
        opacity: 0.06,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: i * 0.03,
        duration: 1
      }} style={{
        position: 'absolute',
        top: `${i * 5}px`,
        left: 0
      }}>
            HOW WE
          </motion.h2>)}
        <motion.h2 className="font-display text-[16vw] md:text-[12vw] font-bold leading-[0.85] text-foreground relative" initial={{
        opacity: 0,
        y: 60
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.1,
        duration: 1
      }}>
          HOW WE
        </motion.h2>
      </div>

      <div className="relative mb-20">
        {[0, 1, 2].map(i => <motion.h2 key={`ghost2-${i}`} className="font-display text-[16vw] md:text-[12vw] font-bold leading-[0.85] text-outline-thin opacity-[0.04]" initial={{
        opacity: 0,
        y: 60
      }} whileInView={{
        opacity: 0.04,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.15 + i * 0.03,
        duration: 1
      }} style={{
        position: 'absolute',
        top: `${i * 5}px`,
        left: 0
      }}>
            MET
          </motion.h2>)}
        <motion.h2 className="font-display text-[16vw] md:text-[12vw] font-bold leading-[0.85] text-accent relative" initial={{
        opacity: 0,
        y: 60
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.2,
        duration: 1
      }}>
          MET
        </motion.h2>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-6xl">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }}>
          <span className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-6">
            (©2024)
          </span>
          <p className="font-display text-xl md:text-3xl leading-relaxed text-foreground/90 italic">
            Two idiots who thought they could live without each other... until they couldn't. 
            What started as awkward conversations turned into endless late-night calls.
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }}>
          <span className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-6">
            (The Beginning)
          </span>
          <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground mb-8">
            December 2024 marked the day we officially said "You're stuck with me forever." Best decision ever? Absolutely. Most chaotic? Also yes. But that's what makes us, US.    
          </p>
          <motion.a href="#memories" className="inline-flex items-center gap-3 font-body text-xs tracking-[0.2em] text-foreground hover:text-accent transition-colors uppercase group" whileHover={{
          x: 10
        }}>
            See Our Memories
            <motion.span className="text-lg transition-transform group-hover:translate-x-2">
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>;
};
export default StorySection;