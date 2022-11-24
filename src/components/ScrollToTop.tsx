import React from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const ScrollToTop = () => {
  return (
    <div className="shadow-2 w-[50px] h-[50px] bg-btnPrimary fixed right-2.5 bottom-2.5 flex justify-center items-center cursor-pointer text-white">
      <RiArrowUpSLine className="fill-white text-[26px]" />
    </div>
  );
};

export default ScrollToTop;
