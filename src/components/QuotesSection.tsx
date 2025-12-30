import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const quotes = [
  {
    quote: "Why are you so stupid, old man?",
    author: "Zubi, daily",
    response: "(But she still loves this stupid old man)"
  },
  {
    quote: "PICHIIIII! Come here!",
    author: "Zuro, whenever he misses her",
    response: "(Which is every 5 minutes)"
  },
  {
    quote: "I hate you... just kidding, come back here and hug me.",
    author: "Both of us, probably",
    response: ""
  },
  {
    quote: "You're the only stupid I want to be stuck with forever.",
    author: "Zuro to his Zubi",
    response: ""
  },
];

const QuotesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={containerRef} className="relative py-24 md:py-40 px-6 md:px-12 bg-card/50 overflow-hidden">
      {/* Floating background text */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ y: backgroundY }}
      >
        <span className="font-display text-[40vw] font-bold text-foreground/[0.02] select-none">
          ❤️
        </span>
      </motion.div>

      {/* Section header */}
      <motion.span
        className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-12"
        initial={{ opacity: 0, x: -30, filter: 'blur(5px)' }}
        whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        (Things We Say)
      </motion.span>

      <div className="max-w-5xl relative">
        {quotes.map((item, index) => (
          <motion.div
            key={index}
            className="mb-24 md:mb-32 last:mb-0"
            initial={{ opacity: 0, y: 80, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: index * 0.1 
            }}
          >
            {/* Quote */}
            <blockquote>
              <motion.p 
                className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] italic"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ x: 10 }}
              >
                "{item.quote}"
              </motion.p>
              
              {item.response && (
                <motion.p
                  className="font-body text-sm md:text-base text-accent/70 mt-4 italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                >
                  {item.response}
                </motion.p>
              )}
              
              <motion.footer 
                className="mt-8"
                initial={{ opacity: 0, x: -20, filter: 'blur(5px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="font-body text-xs tracking-[0.3em] text-accent uppercase">
                  — {item.author}
                </span>
              </motion.footer>
            </blockquote>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default QuotesSection;