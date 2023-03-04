import React from "react";
import { NavLink } from "react-router-dom";

import { NavMobile, ButtonLink } from "../components";
import { links } from "../data";

const Navbar = () => {
  return (
    <>
      <nav className="navbar hidden bg-white p-4 xl:flex gap-x-6">
        <ul className="flex">
          {links.map((link, index) => (
            <li
              key={`navlink-${link}-${index}`}
              className="capitalize font-medium tracking-normal py-2 px-4"
            >
              <NavLink
                to={link.linkUrl}
                className={({ isActive }) =>
                  `hover:text-primary transition-all duration-150 relative ${
                    isActive && "nav__link-active"
                  }`
                }
              >
                {link.linkName}
              </NavLink>
            </li>
          ))}
        </ul>
        <ButtonLink urlTo="/login" classNames="px-8">
          Sign In
        </ButtonLink>
      </nav>

      <NavMobile />
    </>
  );
};

export default Navbar;
