import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Devlupers",
    period: "2024 - Present",
    position: "Backend Developer",
    description: `Built backend systems with Node.js and Express.js, providing scalable solutions to web applications through Restful APIs.
 Collaborated with frontend teams to integrate APIs flawlessly and enhance application functionality.
 Worked with third party APIs and services to expand application features and improve user experience.`,
  },
  {
    company: "Code Clause",
    period: "2023 - 2024",
    position: "Web Development Intern",
    description: `A month internship, contributing to multiple projects and gaining hands-on experience in web development technologies.
 Gained practical knowledge in web development workflows, debugging, version control using git.`,
  },
];

const Experience = () => {
  return (
    <div className="p-8 mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index} 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="border border-purple-600 p-6 rounded-lg shadow-md
                hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
          >
            <h2 className="text-gray-100 text-2xl font-semibold">
              {experience.company}
            </h2>
            <p className="text-gray-300">{experience.position}</p>
            <p className="text-gray-300">{experience.period}</p>

            <p className="text-gray-400 mt-4">{experience.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
