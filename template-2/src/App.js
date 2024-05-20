import Gallery from "./components/Gallery";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Feature from "./components/Feature";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Partners />
      <Gallery />
      <Feature />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
