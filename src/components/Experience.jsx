import { motion } from "framer-motion";

const experiences = [
  {
    company: "RNF Technologies",
    period: "2025 - Present",
    position: "Backend Developer",
    description: `Developed scalable backend systems and RESTful APIs using Nodejs, Express,js and MongoDB for CRM and digital marketing platform. 
    Built and managed APIs attendees, speakers, sessions, registrations, questionnaires, and conference verticals for The2Conf. 
    Integrated Google Analytics and SEOptimer to enable SEO analysis, traffic tracking, and performance reporting. 
    Managed and integrated MongoDB databases for consistent data with high performance. `,
  },
  {
    company: "Devlupers",
    period: "2024 - 2025",
    position: "Backend Developer",
    description: `
     Developed and maintained 200+ RESTful APIs using Node.js and Express.js to support scalable web applications. 
     Refactored and optimized 100+ existing APIs to improve performance, security, and maintainability. 
     Integrated OTP-based user verification through third-party SMS Gateway APIs for secure login and signup process. 
     Implemented real-time balance deduction functionality, enabling dynamic wallet updates. `,
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
