import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl font-bold mb-6 text-purple-800"
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Anton Osika
        </motion.h1>
        <motion.h2
          className="text-3xl mb-8 text-gray-700"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Founder & AI Enthusiast
        </motion.h2>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.button
            className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Explore Projects
          </motion.button>
          <motion.button
            className="bg-transparent border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
