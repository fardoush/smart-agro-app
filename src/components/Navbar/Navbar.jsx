import React, { useState } from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-scroll"; 
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItem = [
    { name: "Home", to: "home" },
    { name: "About Us", to: "about" },
    { name: "Our Products", to: "products" },
    { name: "Projects", to: "projects" },
    { name: "Services", to: "services" },
    { name: "News", to: "news" },
    { name: "Contact Us", to: "contact" },
  ];

  return (
    <nav className="bg-primary text-white sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-5 lg:px-5">
        <div className="flex items-center justify-between h-20 lg:h-[110px]">
          
          {/* logo */}
          <div className="flex-shrink-0">
            <Logo />
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
                className="text-sm xl:text-base font-medium tracking-wide transition-colors duration-300 relative pb-1  text-gray-300 hover:text-white cursor-pointer whitespaces-nowrap after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>


            ))}
          </div>

          {/* Mobile/Tablet menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-[#3d5a42] focus:outline-none transition"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <RxCross2 className="h-6 w-6" /> : <CiMenuFries className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[#243627] ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navItem.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              onClick={() => setIsOpen(false)}
              activeClass="bg-[#3d5a42] text-accent font-semibold"
              className="block px-3 py-2.5 rounded-md text-base font-medium text-gray-300 hover:bg-[#3d5a42] hover:text-white cursor-pointer transition"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;