import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black py-6 px-[3rem] md:px-[5rem]  flex items-center justify-between">
      <div className="flex  items-center justify-between space-x-4">
        <img src="/img/logo.png" alt="Logo" className="h-16 w-16" />

        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 5.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <ul
        className={`md:hidden space-y-2 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "glow-effect text-white text-[20px]"
                : "text-white text-[20px]"
            }
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive
                ? "glow-effect text-white text-[20px]"
                : "text-white text-[20px]"
            }
            onClick={toggleMobileMenu}
          >
            Favorites
          </NavLink>
        </li>
      </ul>

      <ul className="hidden md:flex items-center space-x-12 ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "glow-effect text-white text-[20px]"
                : "text-white text-[20px]"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favourites"
            className={({ isActive }) =>
              isActive
                ? "glow-effect text-white text-[20px]"
                : "text-white text-[20px]"
            }
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
