import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { NavMobile, ButtonLink } from ".";
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
              className="capitalize font-medium tracking-normal py-2 px-4"
            >
              <Link to={link.linkUrl}>{link.linkName}</Link>
            </li>
          ))}
        </ul>
        <ButtonLink urlTo="/" classNames="px-8">
          Sign In
        </ButtonLink>
      </nav>

      {isNavMobile && <NavMobile />}
    </>
  );
};

export default Navbar;
