import { Navbar } from "./components/sections/navbar/navbar";
import { HeroSection } from "./components/sections/hero/hero";
import { FeaturesSection } from "./components/sections/features/features";
import { TestimonialsSection } from "./components/sections/testimonials/testimonials";
import { CallToActionSection } from "./components/sections/call-to-action/call-to-action";
import { Footer } from "./components/sections/footer/footer";

function App() {
  return (
    <div className="md:max-w-[52rem]  xl:max-w-[90rem] mx-auto">
      <div className="hero-pattern"></div>
      <div className="hero-pattern clone"></div>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
