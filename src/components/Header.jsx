import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold text-purple-600"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Anton Osika
        </motion.h1>
        <motion.ul
          className="flex space-x-6"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          {["About", "Projects", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={isHovered ? { y: [0, -10, 0], transition: { delay: index * 0.1 } } : {}}
            >
              <a href={`#${item.toLowerCase()}`} className="text-gray-800 hover:text-purple-600">
                {item}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  );
};

export default Header;
