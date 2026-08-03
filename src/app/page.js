import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustStrip from '@/components/TrustStrip';
import CredibilityPhoto from '@/components/CredibilityPhoto';
import UniverseSection from '@/components/UniverseSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import StructuresSection from '@/components/StructuresSection';
import WhySection from '@/components/WhySection';
import ProofSection from '@/components/ProofSection';
import FaqSection from '@/components/FaqSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <TrustStrip />
      <CredibilityPhoto />
      <UniverseSection />
      <HowItWorksSection />
      <StructuresSection />
      <WhySection />
      <ProofSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
