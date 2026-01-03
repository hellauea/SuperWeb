import { useEffect } from "react";
import Lenis from "lenis";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import WhyWebsiteSection from "@/components/sections/WhyWebsiteSection";
import WhyAppsSection from "@/components/sections/WhyAppsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AppPricingSection from "@/components/sections/AppPricingSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import WebsitePricingSection from "@/components/sections/WebsitePricingSection";
import AISection from "@/components/sections/AISection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <WhyWebsiteSection />
        <WhyAppsSection />
        <ServicesSection />
        <AppPricingSection />
        <PortfolioSection />
        <WebsitePricingSection />
        <AISection />
        <WhyChooseSection />
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
