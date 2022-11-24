import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden bg-white p-4 xl:flex gap-x-6">
      <ul className="flex gap-x-4">
        {["home", "membership", "style guide", "#tag", "more"].map((link) => (
          <li
            key={`navlink-${link}`}
            className="capitalize font-medium tracking-normal py-2 px-4"
          >
            {link}
          </li>
        ))}
      </ul>
      <a href="#" className="bg-btnPrimary px-8 py-2 text-white">
        Sign In
      </a>
    </nav>
  );
};

export default Navbar;
