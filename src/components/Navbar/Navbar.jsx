import React from "react";
import { Link, NavLink } from "react-router";

export const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-[#FA8370]"
              : "hover:text-[#FA8370] transition duration-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive
              ? "text-[#FA8370]"
              : "hover:text-[#FA8370] transition duration-500"
          }
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive
              ? "text-[#FA8370]"
              : "hover:text-[#FA8370] transition duration-500"
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/company"}
          className={({ isActive }) =>
            isActive
              ? "text-[#FA8370]"
              : "hover:text-[#FA8370] transition duration-500"
          }
        >
          Company
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "text-[#FA8370]"
              : "hover:text-[#FA8370] transition duration-500"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/training"}
          className={({ isActive }) =>
            isActive
              ? "text-[#FA8370]"
              : "hover:text-[#FA8370] transition duration-500"
          }
        >
          Training
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="cursor-pointer text-xl">
          <img src="/src/assets/logo.jpg" alt="logo" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">{links}</ul>
      </div>
    </div>
  );
};
