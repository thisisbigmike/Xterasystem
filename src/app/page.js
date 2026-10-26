import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustStrip from '@/components/TrustStrip';
import UniverseSection from '@/components/UniverseSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import StructuresSection from '@/components/StructuresSection';
import WhySection from '@/components/WhySection';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <HeroSection />
        <TrustStrip />
        <UniverseSection />
        <HowItWorksSection />
        <StructuresSection />
        <WhySection />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
