import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface MarqueeSectionProps {
  words: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

const MarqueeSection = ({ words, direction = 'left', speed = 25, className = '' }: MarqueeSectionProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const duplicatedWords = [...words, ...words, ...words, ...words];

  return (
    <motion.div 
      ref={ref}
      className={`overflow-hidden py-8 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === 'left' ? [0, '-50%'] : ['-50%', 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedWords.map((word, index) => (
          <span
            key={index}
            className="font-display text-[8vw] md:text-[6vw] font-bold mx-8 text-outline"
          >
            {word}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MarqueeSection;
