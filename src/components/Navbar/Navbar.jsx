import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo.jpg";
import contact from "../../assets/contact.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  // console.log(location.pathname);
  const currentPath = location.pathname.replace(/^\//, "");
  // console.log(currentPath);
  const formatPath = (path) => {
    if (!path) return "Home";
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

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
    <div className="bg-[#FDF8F8]">
      <nav className="lg:w-9/12 md:10/12 w-11/12 mx-auto sm:pt-5 relative">
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
                className="h-10 w-10 text-gray-700"
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

      {/* pathname display */}
      {currentPath !== "contact" ? (
        <div className="text-center pt-10 pb-20 lg:block hidden">
          <h1 className="text-3xl font-bold">
            Our <span>{formatPath(currentPath)}</span>
          </h1>
          <p>
            Home
            <span className="text-gray-400">
              {" "}
              {">"} Our {formatPath(currentPath)}
            </span>
          </p>
        </div>
      ) : (
        <div className="hidden lg:block">
          <div className="flex items-center justify-center">
            <div>
              <h1 className="text-4xl font-bold">Get in touch with Us</h1>
              <p className="text-xl">
                Why I say old chap that is spiffing, young delinquent in my flat
                bloke <br />
                buggered what a plonker.
              </p>
            </div>
            <div>
              <img src={contact} alt="contact img" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
