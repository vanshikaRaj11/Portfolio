import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// import logo from "../assets/about.jpg"
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 z-10">
      <div className="flex flex-shrink-0 items-center text-white justify-center m-6">
      <p className="text-white">Vanshika Rajput</p>
      </div>

      <div className="flex gap-2 items-center justify-center text-2xl m-8 text-white">
        <FaLinkedin />
        <FaGithub />
        <FaXTwitter />
      </div>
    </nav>
  );
};

export default Navbar;
