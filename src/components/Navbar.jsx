import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// import logo from "../assets/about.jpg"
const Navbar = () => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6 z-100">
        <div className="flex flex-shrink-0 items-center text-white justify-center m-6">
          <p className=" mx-2 w-10 text-white">VR</p>
        </div>

        <div className="flex gap-2 items-center justify-center text-2xl m-8 text-white">
          <a
            href="https://www.linkedin.com/in/vanshika-rajput-aaa920227/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/vanshikaRaj11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/Vanshika_raj11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
