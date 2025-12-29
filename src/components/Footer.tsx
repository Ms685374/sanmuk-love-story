import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-24 md:py-32 px-6 md:px-12 border-t border-border">
      {/* Large background text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.p
          className="font-display text-[25vw] font-bold text-foreground/[0.02] whitespace-nowrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          MS
        </motion.p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Logo & tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-5xl font-bold text-foreground mb-4">MS</h3>
            <p className="font-display text-lg italic text-muted-foreground">
              SanMuk Forever
            </p>
          </motion.div>

          {/* Quick info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase mb-6">
              Quick Facts
            </h4>
            <ul className="space-y-3 font-body text-sm text-foreground/70">
              <li>Together since December 2024</li>
              <li>Status: Hopelessly in love</li>
              <li>Goal: Forever & beyond</li>
            </ul>
          </motion.div>

          {/* Special note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase mb-6">
              A Note
            </h4>
            <p className="font-body text-sm text-foreground/70 leading-relaxed mb-4">
              This website was made with all my love for you, Sanjana. 
              You're my favorite notification and my forever home.
            </p>
            <span className="font-body text-xs text-accent">— Mukesh</span>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="font-body text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Made with love for New Year 2026
          </p>
          <p className="font-body text-xs tracking-[0.2em] text-muted-foreground uppercase">
            © 2024-Forever · SanMuk
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
