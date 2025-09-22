import { useState } from "react";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Parent dropdown animation (mobile)
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.15,
      },
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.3 } },
  };

  // Each link animation (both desktop & mobile)
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/projects", label: "Projects" },
    { to: "/company", label: "Company" },
    { to: "/contact", label: "Contact" },
    { to: "/training", label: "Training" },
  ];

  return (
    <nav className="lg:w-9/12 md:10/12 w-11/12 mx-auto sm:mt-5 relative">
      <div className="flex justify-between items-center mx-auto py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Menu with stagger animation */}
        <motion.ul
          className="hidden lg:flex gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {navLinks.map((link, i) => (
            <motion.li key={i} variants={linkVariants}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#FA8370] font-semibold"
                    : "hover:text-[#FA8370] transition duration-300"
                }
              >
                {link.label}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>

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

      {/* Mobile Dropdown with Stagger Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-16 left-0 w-full flex flex-col gap-4 bg-white px-6 py-4 shadow-md lg:hidden overflow-hidden z-50"
          >
            {navLinks.map((link, i) => (
              <motion.li key={i} variants={linkVariants}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#FA8370] font-semibold"
                      : "hover:text-[#FA8370] transition duration-300"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
