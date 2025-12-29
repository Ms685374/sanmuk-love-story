import { motion } from 'framer-motion';

const quotes = [
  {
    quote: "You're the reason I look at my phone and smile like an idiot.",
    author: "Mukesh to Sanjana",
  },
  {
    quote: "I love you more than pizza. And you know how much I love pizza.",
    author: "The Highest Compliment",
  },
  {
    quote: "Let's be weird together for the rest of our lives.",
    author: "Our Official Motto",
  },
];

const QuotesSection = () => {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 bg-card/50">
      {/* Section header */}
      <motion.span
        className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase block mb-12"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        (Words)
      </motion.span>

      <div className="max-w-5xl">
        {quotes.map((item, index) => (
          <motion.div
            key={index}
            className="mb-24 md:mb-32 last:mb-0"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Quote */}
            <blockquote>
              <motion.p 
                className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                "{item.quote}"
              </motion.p>
              <motion.footer 
                className="mt-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
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
