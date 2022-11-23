import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaRss } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-x-2">
      <a href="#" className="p-2 text-2xl">
        <FaFacebookF className="fill-[#175BEB]" />
      </a>
      <a href="#" className="p-2 text-2xl">
        <FaTwitter className="fill-[#1DA1F2]" />
      </a>
      <a href="#" className="p-2 text-2xl">
        <FaInstagram className="fill-[#EF00A2]" />
      </a>
      <a href="#" className="p-2 text-2xl">
        <FaRss className="fill-[#f26522]" />
      </a>
    </div>
  );
};

export default SocialIcons;
