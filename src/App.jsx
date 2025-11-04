import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import FeaturesAndDashboard from "./components/FeaturesAndDashboard";
import ContactSupportFooter from "./components/ContactSupportFooter";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#00111f] text-white">
      <Hero />
      <AboutSection />
      <FeaturesAndDashboard />
      <ContactSupportFooter />
    </div>
  );
}

export default App;
