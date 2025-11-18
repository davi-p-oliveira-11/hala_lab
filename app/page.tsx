import Companies from "./(sections)/Companies/Companies";
import CTA from "./(sections)/CTA/CTA";
import Features from "./(sections)/Features/Features";
import Footer from "./(sections)/Footer/Footer";
import Hero from "./(sections)/Hero/Hero";
import InfoSection from "./(sections)/InfoSection/InfoSection";
import Navbar from "./(sections)/Navbar/Navbar";
import Testimonial from "./(sections)/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
      <header aria-label="Main navigation">
        <Navbar />
      </header>

      <main>
        <div className="bg-[#FFF2E9]">
          <Hero />
          <Companies />
        </div>
        
        
        <Features />
        <InfoSection />
        <Testimonial />
        <CTA />
      </main>
      <footer aria-label="Site footer">
        <Footer />
      </footer>
    </>
  );
}
