import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";
import { useDispatch } from "react-redux";

import { Navbar, SocialIcons } from "../components";
import { setIsNavMobile, setIsSearch } from "../redux/features/stateSlice";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="flex flex-col xl:gap-y-10 pt-2 md:pt-6 xl:pt-16">
        <div className="flex flex-wrap items-center py-2 justify-between md:justify-center">
          <div className="md:w-1/3">
            <div className="hidden xl:block">
              <SocialIcons />
            </div>

            <button
              onClick={() => dispatch(setIsNavMobile(true))}
              className="xl:hidden cursor-pointer xs:p-1 p-2"
            >
              <HiMenuAlt1 className="xs:h-7 xs:w-7 w-[30px] h-[30px] fill-btnPrimary" />
            </button>
          </div>

          <a
            href="/"
            className="md:w-1/3 text-center xs:text-[35px] text-[40px] md:text-[50px] xl:text-6xl text-heading font-bold hover:-translate-y-[2px] transition-all duration-300"
          >
            <span className="text-primary font-primary">B</span>lueway
          </a>
          <div className="md:w-1/3">
            <button
              onClick={() => dispatch(setIsSearch(true))}
              className="xs:w-8 xs:h-8 w-10 h-10 bg-primary rounded-full flex justify-center items-center ml-auto hover:-translate-y-[2px] transition-all duration-300"
            >
              <FiSearch className="stroke-white w-[18px] xs:h-4 h-[18px]" />
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
