import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-200"
    >
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </motion.div>
  );
};

export default Index;
