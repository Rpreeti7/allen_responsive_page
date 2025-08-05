import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Courses from "./components/Courses";
import CallbackForm from "./components/CallbackForm";
import WhyTrust from "./components/WhyTrust";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      
      <HeroSection />
      <Courses />
      <CallbackForm />
      <WhyTrust />
      <Testimonials />
      <Faq />
      <Footer />
      
    </div>
  );
};

export default App;