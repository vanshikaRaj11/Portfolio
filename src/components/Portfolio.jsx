import AstroGanesh from "../assets/AstroGanesh.png";
import TSA from "../assets/TSA.png";
import AVD from "../assets/AVD.png";
import Conf from "../assets/2conf.png";
import ToursPlan from "../assets/ToursPlan.png";
import ChatApp from "../assets/ChatApp.png";
import YouTube from "../assets/YouTube.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: TSA,
    title: "The Scale Agency",
    description: `Developed backend solutions for a digital marketing platform focused on SEO, analytics, and business growth. Integrated Google Analytics and SEOptimer for traffic monitoring and SEO audits. Built AI-powered chatbot features to enhance customer engagement and lead generation. Optimized APIs and database operations for scalable performance.`,
    links: {
      site: "https://dashboard.thescale.agency/login?clearSession=true",
      github: "https://dashboard.thescale.agency/login?clearSession=true",
    },
  },
  {
    img: AstroGanesh,
    title: "AstroGanesh",
    description: `Engineered backend infrastructure for an astrology platform using Node.js, Express.js, and MongoDB. Implemented OTP-based authentication, multi-device login, and session management. Developed wallet and transaction management features with real-time balance updates. Built secure and scalable REST APIs supporting core platform operations.`,
    links: {
      site: "https://astroganesh.in/",
      github: "https://astroganesh.in/",
    },
  },
  {
    img: Conf,
    title: "The2Conf",
    description: `Built and maintained RESTful APIs for conference management, including registrations, attendees, speakers, and questionnaires. Implemented Google Sign-In authentication, RBAC, and permission management. Designed scalable backend architecture using Node.js and MongoDB. Enhanced operational efficiency through secure and optimized data handling.`,
    links: {
      site: "https://the2conf.com/",
      github: "https://the2conf.com/",
    },
  },
  {
    img: ToursPlan,
    title: "ToursPlan",
    description: `Developed a responsive travel planning platform using React.js and modern frontend technologies. Implemented destination browsing, itinerary planning, and pricing information modules. Focused on user-friendly navigation and responsive design across devices. Optimized application performance to deliver a seamless travel booking experience.`,
    links: {
      site: "https://toursplans.netlify.app/",
      github: "https://github.com/vanshikaRaj11/ToursPlan",
    },
  },
  {
    img: AVD,
    title: "AVD Staffing",
    description: `Developed backend APIs and business logic for a recruitment and staffing platform. Built scalable solutions for candidate management, job listings, and recruitment workflows. Improved data processing efficiency through optimized API design and database interactions. Contributed to secure and reliable HR technology solutions.`,
    links: {
      site: "https://www.avdstaffing.com/",
      github: "https://www.avdstaffing.com/",
    },
  },
  {
    img: ChatApp,
    title: "MERN Chat App",
    description: `Built a real-time messaging application using the MERN stack and Socket.IO. Implemented one-to-one and group chat functionality with instant message delivery. Developed authentication, notifications, and responsive user interfaces. Optimized WebSocket communication for a smooth real-time user experience.`,
    links: {
      site: "https://mern-chat-app-ww9s.onrender.com/",
      github: "https://github.com/vanshikaRaj11/Mern-chat-App",
    },
  },
  {
    img: YouTube,
    title: "YouTube Backend",
    description: `Developed a scalable backend system inspired by YouTube using Node.js, Express.js, and MongoDB. Implemented video upload, user authentication, and content management features. Designed RESTful APIs for handling videos, comments, and user interactions. Focused on clean architecture and efficient database operations.`,
    links: {
      site: "https://github.com/vanshikaRaj11/Youtube",
      github: "https://github.com/vanshikaRaj11/Youtube",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-700 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  View Site
                </a>
                {index === 0 || index == 1 || index === 2 ? (
                  <span className="px-4 py-2 bg-slate-600 text-gray-400 rounded-lg cursor-not-allowed">
                    <AiOutlineGithub />
                  </span>
                ) : (
                  <a
                    href={project.links.github}
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                  >
                    <AiOutlineGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
