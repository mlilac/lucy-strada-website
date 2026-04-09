import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
