import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handleContactForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    console.log(name, phone, email, message);
    toast.success("Message sent successfully! 🚀", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
    });
  };
  return (
    <div className=" bg-primary py-10 md:py-[60px] lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1440px] mx-auto grid gap-8 lg:gap-16 grid-cols-1 md:grid-cols-2">
        {/* left side  */}
        <div className="flex flex-col text-white max-w-xl">
          <span className="mb-3 lg:mb-4 text-xs font-semibold tracking-widest opacity-80 uppercase">
            Contact Now
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 ">
            GET IN TOUCH NOW
          </h2>
          <p className="text-[18px] mb-6 md:mb-10 font-heading">
            Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea
            dictumst. Duis porta,quam ut finibus ultrices.
          </p>
          <div className="space-y-5 lg:space-y-10">
            <div className="">
              <span className="text-sm uppercase font-body mb-2">phone</span>
              <p className="text-xl mb-3 font-medium">+880123456789</p>
              <p className="text-xl font-medium">+880987654321</p>
            </div>
            <div className="">
              <span className="text-sm uppercase font-body mb-3">email</span>
              <p className="text-xl font-medium">needhelp@company.com</p>
            </div>

            <div className="">
              <span className="text-sm uppercase font-body mb-3">Address</span>
              <p className="text-xl font-medium">
                Road No. 8, Niketan, Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
        {/* Right side  */}
        <div className="">
          <form onSubmit={handleContactForm} className="space-y-5 lg:space-y-8">
            <div className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-[#203a2a] text-white/90 placeholder-white/40 text-sm sm:text-base rounded-xl px-5 py-4 sm:py-5 border border-transparent focus:border-[#e5a93b]/50 focus:outline-none transition-all duration-300"
              />
            </div>
            <div className="w-full">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full bg-[#203a2a] text-white/90 placeholder-white/40 text-sm sm:text-base rounded-xl px-5 py-4 sm:py-5 border border-transparent focus:border-[#e5a93b]/50 focus:outline-none transition-all duration-300"
              />
            </div>
            <div className="w-full">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-[#203a2a] text-white/90 placeholder-white/40 text-sm sm:text-base rounded-xl px-5 py-4 sm:py-5 border border-transparent focus:border-[#e5a93b]/50 focus:outline-none transition-all duration-300"
              />
            </div>
            <div className="w-full">
              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
                className="w-full bg-[#203a2a] text-white/90 placeholder-white/40 text-sm sm:text-base rounded-xl px-5 py-4 sm:py-5 border border-transparent focus:border-[#e5a93b]/50 focus:outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>
            <div className="text-left mt-2">
              <button
                type="submit"
                className="bg-[#f2be5c] hover:bg-[#e5a93b] text-primary-dark font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 sm:py-5 rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
          <ToastContainer
            toastClassName={() =>
              "relative flex p-4 min-h-16 rounded-xl justify-between overflow-hidden cursor-pointer bg-[#203a2a] text-white/90 shadow-lg border border-[#e5a93b]/20"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
