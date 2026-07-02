import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-scroll";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItem = [
    { name: "Home", to: "home", count: "01" },
    { name: "About Us", to: "about", count: "02" },
    { name: "Our Products", to: "products", count: "03" },
    { name: "Projects", to: "projects", count: "04" },
    { name: "Services", to: "services", count: "05" },
    { name: "News", to: "news", count: "06" },
    { name: "Contact Us", to: "contact", count: "07" },
  ];

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-5 lg:px-5">
        <div className="flex items-center justify-between h-20 lg:h-[110px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              className="cursor-pointer"
            >
              <Logo />
            </Link>
          </div>

          {/* Large device Menu */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-8">
            {navItem.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                activeClass="text-accent after:w-full"
                className="text-sm xl:text-base font-medium tracking-wide transition-colors duration-300 relative pb-1 text-gray-300 hover:text-white cursor-pointer whitespaces-nowrap after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              <CiMenuFries className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Modern & High-End Full-screen Overlay Menu */}
      <div
        className={`lg:hidden fixed inset-0 w-full h-screen bg-[#132216] z-50 flex flex-col justify-between p-6 sm:p-10 transition-all duration-500 ease-in-out ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between w-full border-b border-white/10 pb-4">
          <Logo />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full bg-white/5 text-gray-300 hover:text-white focus:outline-none transition-all"
          >
            <RxCross2 className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-5 my-auto pl-4 ">
          {navItem.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={() => setIsOpen(false)}
              activeClass="!text-accent font-bold transform translate-x-2"
              className="group flex items-baseline space-x-4 text-2xl font-semibold text-gray-400 hover:text-white cursor-pointer transition-all duration-300 raw-link"
            >
              {/* Index Number */}
              <span className="text-xs font-mono text-accent/70 group-hover:text-accent transition-colors duration-300">
                {item.count}
              </span>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        {/* Footer info inside menu */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2.5 rounded-full bg-white/5 hover:bg-accent text-gray-300 hover:text-white transition-all duration-300"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-full bg-white/5 hover:bg-accent text-gray-300 hover:text-white transition-all duration-300"
            >
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="p-2.5 rounded-full bg-white/5 hover:bg-accent text-gray-300 hover:text-white transition-all duration-300"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-gray-500 tracking-wider">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
