import React from 'react'
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FaGithubSquare} from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-gray-200 font-semibold">Vanshika Rajput</h3>
        <div className="flex flex-row gap-6 text-gray-400 text-4xl">
          <a href="https://github.com/vanshikaRaj11">
            <FaGithubSquare />
          </a>
          <a href="https://www.linkedin.com/in/vanshika-rajput-aaa920227/">
            <AiOutlineLinkedin />
          </a>
          <a href="https://x.com/Vanshika_raj11">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>

      <p className="text-gray-400">@2025 Vanshika_raj11</p>
    </div>
  );
}

export default Footer