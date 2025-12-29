import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [logoExpanded, setLogoExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
      setLogoExpanded(isScrolled);
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

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500 ${
          scrolled ? 'glass' : ''
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          className="font-display text-xl md:text-2xl font-bold tracking-wider cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <AnimatePresence mode="wait">
            {!logoExpanded ? (
              <motion.span
                key="short"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="inline-block"
              >
                MS
              </motion.span>
            ) : (
              <motion.span
                key="full"
                initial={{ opacity: 0, letterSpacing: '-0.5em' }}
                animate={{ opacity: 1, letterSpacing: '0.1em' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                SanMuk
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.button
          className="font-body text-sm tracking-widest uppercase"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav className="flex flex-col items-center gap-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="font-display text-4xl md:text-6xl font-bold text-foreground hover:text-accent transition-colors"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onClick={() => setMenuOpen(false)}
                  whileHover={{ x: 20 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
