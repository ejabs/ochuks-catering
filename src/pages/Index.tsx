
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { CategoriesSection } from '@/components/CategoriesSection';
import { SpecialOffers } from '@/components/SpecialOffers';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <SpecialOffers />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
