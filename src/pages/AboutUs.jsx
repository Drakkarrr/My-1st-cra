import { PageAnimations } from "../animations";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Topper from "../components/Topper";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={PageAnimations}
      initial="before"
      animate="after"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <Footer />
      <Topper />
    </motion.div>
  );
};

export default AboutUs;
