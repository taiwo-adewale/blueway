import React from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";

import { Navbar, SocialIcons } from ".";
import { setIsSearch } from "../redux/features/stateSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="flex flex-col xl:gap-y-10 pt-16">
        <div className="flex items-center py-2 justify-center">
          <div className="w-1/3">
            <div className="hidden xl:block">
              <SocialIcons />
            </div>

            <div className="xl:hidden"></div>
          </div>

          <a
            href="#"
            className="w-1/3 text-center text-6xl text-heading font-bold"
          >
            Blueway
          </a>
          <div className="w-1/3">
            <button
              onClick={() => dispatch(setIsSearch(true))}
              className="w-10 h-10 bg-primary rounded-full flex justify-center items-center ml-auto"
            >
              <FiSearch className="stroke-white w-[18px] h-[18px]" />
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
