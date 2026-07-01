import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Logo from "../Logo/Logo";

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const email = e.target.newsletterEmail.value;
    console.log("Newsletter Email:", email);
    e.target.reset();
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-5 md:px-10 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pb-12 border-b border-white/10">
          
          <div className="flex flex-col max-w-md">
            <Logo/>
            <p className="mt-3 text-white/70 text-base leading-relaxed mb-6 font-heading">
              Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea
              dictumst. Duis porta, quam ut finibus ultrices.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="text-white/80 hover:text-[#e5a93b] text-lg transition-colors duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white/80 hover:text-[#e5a93b] text-lg transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-white/80 hover:text-[#e5a93b] text-lg transition-colors duration-300">
                <FaYoutube />
              </a>
              <a href="#" className="text-white/80 hover:text-[#e5a93b] text-lg transition-colors duration-300">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:pl-12">
            <h3 className=" font-bold text-lg font-heading tracking-wider uppercase mb-6 text-white">
              Useful Links
            </h3>
            <ul className="space-y-3.5 text-white/70 text-base font-heading">
              <li>
                <a href="#" className="hover:text-[#e5a93b] transition-colors duration-300">New Projects</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e5a93b] transition-colors duration-300">Our Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e5a93b] transition-colors duration-300">Testimonials</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e5a93b] transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#e5a93b] transition-colors duration-300">Contact us</a>
              </li>
            </ul>
          </div>


          <div className="flex flex-col">
            <h3 className="font-heading text-lg font-bold tracking-wider uppercase mb-6 text-white">
              Newsletter
            </h3>
            <p className="font-body text-white/70 text-base leading-relaxed mb-6">
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
            

            <form onSubmit={handleNewsletterSubmit} className="relative w-full max-w-sm flex items-center">
              <input
                type="email"
                name="newsletterEmail"
                placeholder="Enter your mail here..."
                required
                className="w-full bg-[#203a2a] text-white/90 placeholder-white/40 text-sm rounded-full pl-6 pr-16 py-4 border border-transparent focus:border-[#e5a93b]/30 focus:outline-none transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-1.5 bg-[#f2be5c] hover:bg-[#e5a93b] text-black font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-md transition-all duration-300"
              >
                GO
              </button>
            </form>
          </div>
        </div>


        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p className="text-center sm:text-left">
            Copyright ©Smart Agro. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#e5a93b] transition-colors duration-300">Terms & Conditions</a>
            <a href="#" className="hover:text-[#e5a93b] transition-colors duration-300">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;