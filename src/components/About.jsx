import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center text-purple-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.img
            src="https://placekitten.com/300/300"
            alt="Anton Osika"
            className="rounded-full w-64 h-64 object-cover mb-8 md:mb-0 md:mr-12"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="max-w-lg"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-xl mb-4">
              Hi there! I'm Anton Osika, a passionate founder and AI enthusiast. I love exploring the
              frontiers of technology and finding innovative ways to solve real-world problems.
            </p>
            <p className="text-xl mb-4">
              With a background in [Your Background], I've dedicated my career to pushing the boundaries
              of what's possible with artificial intelligence and machine learning.
            </p>
            <p className="text-xl">
              When I'm not working on exciting AI projects, you can find me [Your Hobbies or Interests].
              I believe in the power of technology to make the world a better place, one innovation at a time.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
