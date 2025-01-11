import React from "react";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Vanshika Rajput
            </h1>

            <span className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              MERN Stack Developer
            </span>
            <p className="my-2 max-xl py-6 font-light tracking-tighter">
              I am a passionate backend developer with expertise in Node.js,
              Express.js, and MongoDB. I specialize in crafting robust, scalable
              server-side applications, designing RESTful APIs, and optimizing
              database management. My goal is to deliver secure, reliable, and
              high-performance solutions tailored to the needs of modern web and
              mobile platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
