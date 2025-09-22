import { SiFacebook } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Footer = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/projects", label: "Projects" },
    { to: "/company", label: "Company" },
    { to: "/contact", label: "Contact" },
    { to: "/training", label: "Training" },
  ];

  const companyLinks = [
    { to: "/about", label: "About us" },
    { to: "/contact", label: "Contact" },
    { to: "/careers", label: "Jobs" },
    { to: "/press", label: "Press kit" },
  ];

  const legalLinks = [
    { to: "/terms", label: "Terms of use" },
    { to: "/privacy", label: "Privacy policy" },
    { to: "/cookies", label: "Cookie policy" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "You are now our premium user.",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <div className="bg-[#FDF8F8] sm:mt-30 mt-20 lg:mt-28">
      <footer className="footer flex sm:flex-row flex-col justify-between sm:footer-horizontal text-base-content py-10 sm:px-0 px-10 sm:w-8/12 w-11/12 mx-auto">
        {/* Services Section - using navLinks */}
        <nav className="sm:w-1/4 w-full mb-6 sm:mb-0">
          <h6 className="footer-title">Services</h6>
          <ul className="mt-2 space-y-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="text-gray-600 hover:text-[#F86011] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Company Section */}
        <nav className="sm:w-1/4 w-full mb-6 sm:mb-0">
          <h6 className="footer-title">Company</h6>
          <ul className="mt-2 space-y-2">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  className="text-gray-600 hover:text-[#F86011] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Address Section */}
        <nav className="sm:w-1/4 w-full mb-6 sm:mb-0">
          <h6 className="footer-title">Our Address</h6>
          <div className="mt-2 space-y-2 text-gray-600">
            <p className="text-sm leading-relaxed">
              D/36, Block-E
              <br />
              Lalmatiya, Dhaka 1207
              <br />
              Bangladesh
            </p>
          </div>
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/profile.php?id=100022417866700"
              target="_blank"
            >
              <SiFacebook className="size-8 text-white bg-black rounded-full" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-kader-80a7a5350"
              target="_blank"
            >
              <TiSocialLinkedinCircular className="size-[42px] -mt-[5px]" />
            </a>
          </div>
        </nav>

        {/* Newsletter Section */}
        <form className="sm:w-1/4 w-full mb-6 sm:mb-0">
          <h6 className="footer-title">Get In Touch</h6>
          <fieldset className="w-full sm:w-80">
            <label className="label">
              <span className="label-text text-gray-600">
                Enter your email address
              </span>
            </label>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered w-full"
                required
              />
              <button
                onClick={handleSubscribe}
                type="submit"
                className="btn w-full bg-[#F86011] text-white border-none hover:bg-[#e65406] hover:border-none transition-colors"
              >
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>

      {/* Bottom Bar */}
      <div>
        <div className="flex sm:flex-row flex-col justify-center items-center py-6 sm:px-0 px-10">
          <div className="text-sm text-gray-600 mb-2 sm:mb-0">
            © 2025 All Rights Reserved Design by{" "}
            <span className="text-orange-500">DeshIT-BD</span>
          </div>
          {/* <div className="flex space-x-4">
            <Link
              to="/privacy"
              className="text-sm text-gray-600 hover:text-[#F86011] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-600 hover:text-[#F86011] transition-colors"
            >
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
