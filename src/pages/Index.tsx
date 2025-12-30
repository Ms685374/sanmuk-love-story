import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarqueeSection from '@/components/MarqueeSection';
import StorySection from '@/components/StorySection';
import PhotoSlider from '@/components/PhotoSlider';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import TimelineSection from '@/components/TimelineSection';
import QuotesSection from '@/components/QuotesSection';
import ForeverSection from '@/components/ForeverSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <motion.div
      className="min-h-screen bg-background text-foreground overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Film grain overlay */}
      <div className="film-grain" />
      
      {/* Smooth scroll container */}
      <Navbar />
      <Hero />
      
      <MarqueeSection 
        words={['ZURO', '❤️', 'ZUBI', '💕', 'PICHI', '✨', 'SANMUK', '💖']} 
        direction="left"
        speed={30}
      />
      
      <StorySection />
      <PhotoSlider />
      
      <MarqueeSection 
        words={['STUPID', 'OLD', 'MAN', '👴', 'BUT', 'HER', 'STUPID', '❤️']} 
        direction="right"
        speed={35}
      />
      
      <ServicesSection />
      <GallerySection />
      <TimelineSection />
      <QuotesSection />
      <ForeverSection />
      <Footer />
    </motion.div>
  );
};

export default Index;