import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex gap-x-6">
      <ul className="flex gap-x-4">
        {["home", "membership", "style guide", "#tag", "more"].map((link) => (
          <li key={`navlink-${link}`} className="capitalize py-2 px-4">
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
