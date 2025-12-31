import { motion } from 'framer-motion';

const HappyNewYear = () => {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-40 pointer-events-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="bg-background/50 backdrop-blur-sm border border-border/20 rounded-full px-4 py-2"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          y: {
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <span className="font-display text-[10px] tracking-[0.25em] text-foreground/70">
          HAPPY NEW YEAR 2026
        </span>
      </motion.div>
    </motion.div>
  );
};

export default HappyNewYear;
