import React from "react";

import { Navbar } from ".";

const Header = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-y-10 pt-16">
        <div className="flex justify-between items-center py-2">
          <div className="flex"></div>
          <a href="#" className="text-6xl text-heading">
            Blueway
          </a>
          <button className="w-10 h-10 bg-primary rounded-full"></button>
        </div>

        <div className="flex justify-center">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
