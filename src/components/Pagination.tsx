import React from "react";

const Pagination = () => {
  return (
    <div className="py-[30px] mt-[70px] flex items-center justify-center">
      <span className="text-sm px-4 mx-4">Page 1 of 2</span>
      <a
        href="#"
        className="shadow-2 bg-primary py-2 px-4 text-xs lg:text-sm font-bold text-white"
      >
        Next
      </a>
    </div>
  );
};

export default Pagination;
