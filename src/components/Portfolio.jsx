import React from "react";
import AstroGanesh from "../assets/AstroGanesh.png";
import AVD from "../assets/AVD.png";
import ToursPlan from "../assets/ToursPlan.png";
import ChatApp from "../assets/ChatApp.png";
import YouTube from "../assets/YouTube.png";
import { AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: AstroGanesh,
    title: "AstroGanesh",
    description: `Built RESTful APIs for an astrology platform using Node.js and Express.js, ensuring smooth data management.`,
    links: {
      site: "https://astroganesh.in/",
      github: "https://astroganesh.in/",
    },
  },
  {
    img: ToursPlan,
    title: "ToursPlan",
    description: `Created a travel platform with React.js, featuring destinations, itineraries, pricing, etc.`,
    links: {
      site: "https://toursplans.netlify.app/",
      github: "https://github.com/vanshikaRaj11/ToursPlan",
    },
  },
  {
    img: AVD,
    title: "AVD Staffing",
    description: `Developed APIs for recruitment platform, enhancing hiring with tailored HR solutions.`,
    links: {
      site: "https://www.avdstaffing.com/",
      github: "https://www.avdstaffing.com/",
    },
  },
  {
    img: ChatApp,
    title: "MERN Chat App",
    description: `Built a real-time chat app with MERN stack and Socket.IO, supporting messaging, notifications, and groups.`,
    links: {
      site: "https://mern-chat-app-ww9s.onrender.com/",
      github: "https://github.com/vanshikaRaj11/Mern-chat-App",
    },
  },
  {
    img: YouTube,
    title: "YouTube Backend",
    description: `Developed a YouTube-like backend using Node.js, Express, and MongoDB, supporting video uploads and management.`,
    links: {
      site: "https://github.com/vanshikaRaj11/Youtube",
      github: "https://github.com/vanshikaRaj11/Youtube",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
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
                {index === 0 || index === 2 ? (
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
