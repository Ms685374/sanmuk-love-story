import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-20 px-6 md:px-12 border-t border-border">
      {/* Large text background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.p
          className="font-display text-[20vw] font-bold text-foreground/[0.02] whitespace-nowrap"
          animate={{ x: [0, '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          SANMUK · FOREVER · SANMUK · FOREVER · 
        </motion.p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-4xl font-bold text-foreground mb-4">MS</h3>
            <p className="font-display text-lg italic text-muted-foreground">
              SanMuk Forever
            </p>
            <p className="font-body text-sm text-muted-foreground mt-4">
              Mukesh + Sanjana = ❤️
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-6">
              Quick Facts
            </h4>
            <ul className="space-y-3">
              <li className="font-body text-foreground/80">📅 Together since: Dec 2024</li>
              <li className="font-body text-foreground/80">💕 Status: Hopelessly in love</li>
              <li className="font-body text-foreground/80">🎯 Goal: Forever & beyond</li>
              <li className="font-body text-foreground/80">😂 Jokes told: Countless (bad ones)</li>
            </ul>
          </motion.div>

          {/* Special message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-6">
              A Note
            </h4>
            <p className="font-body text-foreground/80 leading-relaxed">
              This website was made with all my love for you, Sanjana. 
              You're my favorite notification, my best view, and my forever home. 
              Here's to us! 🥂
            </p>
            <p className="font-body text-sm text-accent mt-4">
              — Mukesh
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="font-body text-sm text-muted-foreground">
            Made with 💕 for New Year 2026
          </p>
          <p className="font-body text-sm text-muted-foreground">
            © 2024-Forever · SanMuk
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
