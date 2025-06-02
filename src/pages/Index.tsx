
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProblemSection from '../components/ProblemSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ForWhoSection from '../components/ForWhoSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import WhatYouLearnSection from '../components/WhatYouLearnSection';
import CertificateSection from '../components/CertificateSection';
import GuaranteeSection from '../components/GuaranteeSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';

const Index = () => {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <ProblemSection />
      <TestimonialsSection />
      <ForWhoSection />
      <BeforeAfterSection />
      <WhatYouLearnSection />
      <CertificateSection />
      <GuaranteeSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
};

export default Index;
