import { motion } from "framer-motion";

const projectData = [
  {
    title: "AI-Powered Personal Assistant",
    description: "A smart assistant that uses natural language processing to help users manage their daily tasks.",
    image: "https://placekitten.com/400/300",
  },
  {
    title: "Machine Learning for Healthcare",
    description: "Applying ML algorithms to predict and diagnose diseases from medical imaging data.",
    image: "https://placekitten.com/401/300",
  },
  {
    title: "Autonomous Drone Navigation",
    description: "Developing AI systems for drones to navigate complex environments without human intervention.",
    image: "https://placekitten.com/402/300",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-purple-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
