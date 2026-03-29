import Navbar from "@/components/Navbar";
import HeroVideo from "@/components/HeroVideo";
import StatsStrip from "@/components/StatsStrip";
import DesignSection from "@/components/DesignSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import InteriorShowcase from "@/components/InteriorShowcase";
import TechSection from "@/components/TechSection";
import ColorSelector from "@/components/ColorSelector";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroVideo />
      <div className="hero-to-page h-16" />
      <StatsStrip />
      <DesignSection />
      <FeaturesGrid />
      <InteriorShowcase />
      <TechSection />
      <ColorSelector />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  );
}
