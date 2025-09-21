import { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#FA8370] font-semibold"
              : "hover:text-[#FA8370] transition duration-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-[#FA8370] font-semibold"
              : "hover:text-[#FA8370] transition duration-300"
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-[#FA8370] font-semibold"
              : "hover:text-[#FA8370] transition duration-300"
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/company"
          className={({ isActive }) =>
            isActive
              ? "text-[#FA8370] font-semibold"
              : "hover:text-[#FA8370] transition duration-300"
          }
        >
          Company
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-[#FA8370] font-semibold"
              : "hover:text-[#FA8370] transition duration-300"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/training"
          className={({ isActive }) =>
            isActive
              ? "text-[#FA8370] font-semibold"
              : "hover:text-[#FA8370] transition duration-300"
          }
        >
          Training
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="sm:w-9/12 mx-auto sm:mt-5">
      <div className="flex justify-between items-center w-11/12 mx-auto py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/src/assets/logo.jpg" alt="logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8">{links}</ul>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="flex flex-col gap-4 bg-white px-6 py-4 shadow-md lg:hidden">
          {links}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
