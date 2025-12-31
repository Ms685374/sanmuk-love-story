import { motion } from 'framer-motion';

const HappyNewYear = () => {
  return (
    <motion.div
      className="fixed top-6 left-6 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <motion.div
        className="bg-background/60 backdrop-blur-sm border border-border/30 rounded-full px-4 py-2"
        whileHover={{ scale: 1.05 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <span className="font-display text-xs tracking-[0.2em] text-foreground/80">
          HAPPY NEW YEAR ✨
        </span>
      </motion.div>
    </motion.div>
  );
};

export default HappyNewYear;
