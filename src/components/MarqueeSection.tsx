import { motion } from 'framer-motion';

interface MarqueeSectionProps {
  words: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
  outlined?: boolean;
}

const MarqueeSection = ({ 
  words, 
  direction = 'left', 
  speed = 30, 
  className = '',
  outlined = true 
}: MarqueeSectionProps) => {
  const duplicatedWords = [...words, ...words, ...words, ...words, ...words, ...words];

  return (
    <div className={`overflow-hidden py-6 md:py-10 ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
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
            className={`font-display text-[12vw] md:text-[10vw] font-bold mx-4 md:mx-8 leading-none ${
              outlined ? 'text-outline' : 'text-foreground'
            }`}
          >
            {word}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeSection;
