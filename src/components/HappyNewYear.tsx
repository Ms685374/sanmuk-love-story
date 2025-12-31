import { motion } from 'framer-motion';

const HappyNewYear = () => {
  return (
    <motion.div
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="bg-background/40 backdrop-blur-md border border-border/20 rounded-2xl px-6 py-3 text-center"
        whileHover={{ scale: 1.02, backgroundColor: 'rgba(0,0,0,0.5)' }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <motion.span 
          className="font-display text-sm tracking-[0.3em] text-foreground/90 block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          HAPPY NEW YEAR
        </motion.span>
        <motion.span 
          className="font-display text-2xl tracking-[0.2em] text-foreground font-light block mt-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.3, duration: 0.8, ease: 'easeOut' }}
        >
          2026
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default HappyNewYear;
