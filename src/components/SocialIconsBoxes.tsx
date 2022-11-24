import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaRss } from "react-icons/fa";

const SocialIconsBoxes = () => {
  return (
    <div className="grid grid-cols-4 gap-x-3 ">
      <div className="h-[72px] bg-[#175BEB] flex justify-center items-center">
        <FaFacebookF className="text-2xl fill-white" />
      </div>
      <div className="h-[72px] bg-[#1DA1F2] flex justify-center items-center">
        <FaTwitter className="text-2xl fill-white" />
      </div>
      <div className="h-[72px] bg-[#EF00A2] flex justify-center items-center">
        <FaInstagram className="text-2xl fill-white" />
      </div>
      <div className="h-[72px] bg-[#f26522] flex justify-center items-center">
        <FaRss className="text-2xl fill-white" />
      </div>
    </div>
  );
};

export default SocialIconsBoxes;
