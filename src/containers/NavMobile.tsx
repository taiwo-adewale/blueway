import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { HiX } from "react-icons/hi";

import { links } from "../data";
import { setIsNavMobile } from "../redux/features/stateSlice";
import { ButtonLink } from "../components";
import { RootState } from "../redux/store";

const NavMobile = () => {
  const dispatch = useDispatch();
  const { isNavMobile } = useSelector((state: RootState) => state.state);

  const handleOutsideClick = (e: React.MouseEvent<HTMLElement>) => {
    dispatch(setIsNavMobile(false));
  };

  return (
    <>
      <nav
        className={`nav__mobile min-w-[300px] w-[300px] h-screen fixed top-0 bottom-0 p-5 bg-white xl:hidden z-[89] transition-all duration-300 ${
          isNavMobile ? "left-0" : "-left-[300px]"
        }`}
      >
        <div className="flex flex-col h-full w-full pt-12 relative">
          <button
            onClick={() => dispatch(setIsNavMobile(false))}
            className="absolute right-0 top-0"
          >
            <HiX className="fill-btnPrimary w-6 h-6" />
          </button>
          {links.map((link, index) => (
            <NavLink
              key={`navlink-mobile-${link}-${index}`}
              to={link.linkUrl}
              className={({ isActive }) =>
                `p-4 hover:text-primary transition-all duration-300 text-[15px] text-btnPrimary capitalize font-bold font-secondary relative ${
                  isActive && "nav__link-active"
                }`
              }
              onClick={() => dispatch(setIsNavMobile(false))}
            >
              {link.linkName}
            </NavLink>
          ))}

          <div className="text-center mt-10">
            <ButtonLink urlTo="/login">Sign In</ButtonLink>
          </div>
        </div>
      </nav>

      <div
        onClick={handleOutsideClick}
        className={`fixed w-full h-full inset-0 bg-[rgba(0,0,0,0.25)] z-[79] transition-all duration-300 xl:hidden ${
          isNavMobile
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } `}
      ></div>
    </>
  );
};

export default NavMobile;
