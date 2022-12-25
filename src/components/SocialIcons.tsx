import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaRss } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-x-2">
      <a
        href="https://facebook.com"
        target="_blank"
        className="p-2 text-xl sm:text-2xl hover:-translate-y-[2px] transition-all duration-300"
      >
        <FaFacebookF className="fill-[#175BEB]" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        className="p-2 text-xl sm:text-2xl hover:-translate-y-[2px] transition-all duration-300"
      >
        <FaTwitter className="fill-[#1DA1F2]" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        className="p-2 text-xl sm:text-2xl hover:-translate-y-[2px] transition-all duration-300"
      >
        <FaInstagram className="fill-[#EF00A2]" />
      </a>
      <a
        href="https://rss.com"
        target="_blank"
        className="p-2 text-xl sm:text-2xl hover:-translate-y-[2px] transition-all duration-300"
      >
        <FaRss className="fill-[#f26522]" />
      </a>
    </div>
  );
};

export default SocialIcons;
