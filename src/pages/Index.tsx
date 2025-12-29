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
      transition={{ duration: 0.8 }}
    >
      {/* Film grain overlay */}
      <div className="film-grain" />
      
      <Navbar />
      <Hero />
      
      <MarqueeSection 
        words={['SANMUK', 'FOREVER', 'SANMUK', 'FOREVER']} 
        direction="left"
        speed={35}
      />
      
      <StorySection />
      <PhotoSlider />
      
      <MarqueeSection 
        words={['LOVE', 'CHAOS', 'LAUGHTER', 'FOREVER']} 
        direction="right"
        speed={40}
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
