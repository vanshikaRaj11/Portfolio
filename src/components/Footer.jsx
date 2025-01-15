import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";
import {motion} from "framer-motion"

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-18 text-sm md:text-lg mt-12 bg-purple-700/10">
      <div className="space-y-4 max-w-[1300px] mx-auto text-center">
        {/* <h3 className="text-2xl text-gray-200 font-semibold">
          Vanshika Rajput
        </h3> */}

        <div className="flex justify-center space-x-6 text-sm md:text-lg ">
          <Link
            to="skills"
            smooth={true}
            offset={-50}
            duration={500}
            className="hover:underline cursor-pointer text-white"
          >
            About
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            offset={-50}
            duration={500}
            className="hover:underline cursor-pointer text-white"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-50}
            duration={500}
            className="hover:underline cursor-pointer text-white"
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-center space-x-6 text-purple-400 z-20 text-4xl md:text-6xl">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/vanshikaRaj11"
          >
            <FaGithubSquare />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/vanshika-rajput-aaa920227/"
          >
            <AiOutlineLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://x.com/Vanshika_raj11"
          >
            <FaSquareXTwitter />
          </motion.a>
        </div>
        <p className="text-gray-400 text-sm md:text-base">
          © 2024 Vanshika_raj11 ❤️. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
