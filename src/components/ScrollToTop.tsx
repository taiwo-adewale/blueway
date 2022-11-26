import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const ScrollToTop = () => {
  const handleScroll = () => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleScroll}
      className="fixed shadow-2 w-[50px] h-[50px] bg-btnPrimary right-2 bottom-2 flex justify-center items-center cursor-pointer text-white"
    >
      <RiArrowUpSLine className="fill-white text-[26px]" />
    </div>
  );
};

export default ScrollToTop;
