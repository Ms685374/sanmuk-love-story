import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Our Story', href: '#story' },
    { label: 'Memories', href: '#memories' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Forever', href: '#forever' },
  ];

  // Letters for the spread animation
  const shortText = "MS";
  const fullText = "SanMuk";

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-colors duration-500 ${
          scrolled ? 'bg-background/80 backdrop-blur-md' : ''
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Logo with spread animation */}
        <motion.div 
          className="font-display text-lg md:text-xl font-bold tracking-wider cursor-pointer overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!scrolled ? (
              <motion.div
                key="short"
                className="flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {shortText.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="full"
                className="flex"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {fullText.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, x: -10, filter: 'blur(4px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    transition={{ 
                      delay: i * 0.05, 
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Menu button */}
        <motion.button
          className="font-body text-xs tracking-[0.2em] uppercase text-foreground/80 hover:text-foreground transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ letterSpacing: '0.3em' }}
          transition={{ duration: 0.3 }}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </motion.button>
      </motion.nav>

      {/* Fullscreen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background"
            initial={{ clipPath: 'circle(0% at calc(100% - 48px) 36px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 48px) 36px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 48px) 36px)' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="h-full flex flex-col items-center justify-center">
              <nav className="flex flex-col items-center gap-4">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground/20 hover:text-foreground transition-colors duration-300 relative group"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ 
                      delay: 0.1 + index * 0.08, 
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <motion.span
                      className="absolute inset-0 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ WebkitTextStroke: '1px hsl(var(--accent))' }}
                    >
                      {item.label}
                    </motion.span>
                  </motion.a>
                ))}
              </nav>

              {/* Bottom info in menu */}
              <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase">
                  Mukesh ♥ Sanjana
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
