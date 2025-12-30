import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-24 md:py-32 px-6 md:px-12 border-t border-border overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.p
          className="font-display text-[25vw] font-bold text-foreground/[0.02] whitespace-nowrap"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          ZURO ❤️ ZUBI
        </motion.p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Logo & tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h3 className="font-display text-5xl font-bold text-foreground mb-4">MS</h3>
            <p className="font-display text-lg italic text-muted-foreground">
              Mukesh & Sanjana
            </p>
            <p className="font-body text-sm text-accent mt-2">
              aka Zuro & Zubi 💕
            </p>
          </motion.div>

          {/* Fun facts */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h4 className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase mb-6">
              Relationship Stats
            </h4>
            <ul className="space-y-3 font-body text-sm text-foreground/70">
              <motion.li whileHover={{ x: 5, color: 'hsl(350, 75%, 55%)' }} transition={{ duration: 0.2 }}>
                🤦‍♀️ "Stupid" count: ∞
              </motion.li>
              <motion.li whileHover={{ x: 5, color: 'hsl(350, 75%, 55%)' }} transition={{ duration: 0.2 }}>
                📞 Longest call: Yes
              </motion.li>
              <motion.li whileHover={{ x: 5, color: 'hsl(350, 75%, 55%)' }} transition={{ duration: 0.2 }}>
                🍕 Food stolen: A lot
              </motion.li>
              <motion.li whileHover={{ x: 5, color: 'hsl(350, 75%, 55%)' }} transition={{ duration: 0.2 }}>
                💕 Love level: Maximum
              </motion.li>
            </ul>
          </motion.div>

          {/* Special note */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h4 className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase mb-6">
              A Note From Your Stupid Old Man
            </h4>
            <p className="font-body text-sm text-foreground/70 leading-relaxed mb-4">
              Hey Pichi, this whole thing was made just for you. You're my favorite person to annoy, 
              my favorite notification, and my forever home. I love you more than you call me stupid 
              (and that's saying A LOT).
            </p>
            <motion.span 
              className="font-body text-xs text-accent inline-block"
              whileHover={{ scale: 1.1 }}
            >
              — Your Zuro ❤️
            </motion.span>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="font-body text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Made with all my love for New Year 2026
          </p>
          <motion.p 
            className="font-body text-xs tracking-[0.2em] text-muted-foreground uppercase"
            whileHover={{ color: 'hsl(350, 75%, 55%)' }}
          >
            © 2024-Forever · SanMuk · Zuro & Zubi
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;