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
    <section className="relative py-32 px-6 md:px-12 bg-card">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase">
            (Words of Love)
          </span>
        </motion.div>

        {/* Quotes */}
        <div className="space-y-24">
          {quotes.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 1 }}
            >
              {/* Large quote mark */}
              <motion.span
                className="absolute -top-8 -left-4 text-[150px] font-display text-accent/10 leading-none"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
              >
                "
              </motion.span>

              <blockquote className="relative z-10">
                <p className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight italic">
                  {item.quote}
                </p>
                <footer className="mt-6">
                  <span className="font-body text-sm tracking-widest text-accent uppercase">
                    — {item.author}
                  </span>
                </footer>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuotesSection;
