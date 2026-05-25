import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TechBackground from "@/components/TechBackground";

export default function Home() {
  return (
    <>
      <TechBackground />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUs />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
