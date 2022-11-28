import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { NavMobile } from ".";
import { links } from "../data";
import { RootState } from "../redux/store";

const Navbar = () => {
  const { isNavMobile } = useSelector((state: RootState) => state.state);

  return (
    <>
      <nav className="navbar hidden bg-white p-4 xl:flex gap-x-6">
        <ul className="flex">
          {links.map((link, index) => (
            <li
              key={`navlink-${link}-${index}`}
              className="capitalize font-medium tracking-normal py-2 px-4 navHover"
            >
              <Link to={link.linkUrl}>{link.linkName}</Link>
            </li>
          ))}
        </ul>
        <a href="#" className="bg-btnPrimary px-8 py-2 text-white">
          Sign In
        </a>
      </nav>

      {isNavMobile && <NavMobile />}
    </>
  );
};

export default Navbar;
