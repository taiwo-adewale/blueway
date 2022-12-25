import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaRss } from "react-icons/fa";

const SocialIconsBoxes = () => {
  return (
    <>
      <a
        href="https://facebook.com"
        target="_blank"
        className="social-icon-link h-[72px] relative bg-white group"
      >
        <div className="social-icon h-full w-full bg-[#175BEB] flex justify-center items-center group-hover:-translate-x-[5px] group-hover:-translate-y-[5px] transition-all duration-300">
          <FaFacebookF className="text-2xl fill-white leading-[72px] w-full" />
        </div>

        <div className="absolute inset-0 border-[2px] border-[#175BEB]"></div>
      </a>

      <a
        href="https://twitter.com"
        target="_blank"
        className="social-icon-link h-[72px] relative bg-white group"
      >
        <div className="social-icon h-full w-full bg-[#1DA1F2] flex justify-center items-center group-hover:-translate-x-[5px] group-hover:-translate-y-[5px] transition-all duration-300">
          <FaTwitter className="text-2xl fill-white leading-[72px] w-full" />
        </div>

        <div className="absolute inset-0 border-[2px] border-[#1DA1F2]"></div>
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        className="social-icon-link h-[72px] relative bg-white group"
      >
        <div className="social-icon h-full w-full bg-[#EF00A2] flex justify-center items-center group-hover:-translate-x-[5px] group-hover:-translate-y-[5px] transition-all duration-300">
          <FaInstagram className="text-2xl fill-white leading-[72px] w-full" />
        </div>

        <div className="absolute inset-0 border-[2px] border-[#EF00A2]"></div>
      </a>

      <a
        href="https://rss.com"
        target="_blank"
        className="social-icon-link h-[72px] relative bg-white group"
      >
        <div className="social-icon h-full w-full bg-[#f26522] flex justify-center items-center group-hover:-translate-x-[5px] group-hover:-translate-y-[5px] transition-all duration-300">
          <FaRss className="text-2xl fill-white leading-[72px] w-full" />
        </div>

        <div className="absolute inset-0 border-[2px] border-[#f26522]"></div>
      </a>
    </>
  );
};

export default SocialIconsBoxes;
