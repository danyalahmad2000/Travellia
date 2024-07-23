import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import logo from "../../assets/images/logo2.png"; // Replace with the actual path to your logo
import ukFlag from "../../assets/images/uk-flag.png";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // State for toggling navigation

  const navLinks = [
    { title: "Flights", url: "/flights" },
    { title: "Hotels", url: "/hotels" },
    { title: "Vacations", url: "/vacations" },
    { title: "About", url: "/about" },
    { title: "Contact Us", url: "/contact" },
    { title: "Terms & Conditions", url: "/termsnconditions" },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-12 mb-20">
      <div className="flex items-center justify-between py-4 mx-4">
        {/* Left side: Logo */}
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-16 md:h-16 w-auto" />
        </Link>

        {/* Right side: Hamburger Icon for smaller screens */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <FaTimes className="text-[#D9B84A] h-6 w-6" /> : <FaBars className="text-[#D9B84A] h-6 w-6" />}
        </div>

        {/* Center: Tabs/Navigation Links */}
        <nav className={`md:flex md:space-x-6 space-x-2 ${isNavOpen ? 'flex flex-col absolute left-0 top-20 bg-white shadow-lg w-full z-10 rounded-xl' : 'hidden md:flex md:relative md:top-0 md:w-auto md:shadow-none'}`}>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-[#D9B84A] hover:scale-110 font-bold text-[16px] transition-all ease-in-out p-4"
              onClick={() => setIsNavOpen(false)} // Close menu on link click
            >
              {link.title}
            </a>
          ))}

          {/* Right side: Currency, UK flag, and phone number */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 p-4">
            <span className="font-bold text-[16px] text-[#D9B84A]">GBP</span>
            <img
              src={ukFlag}
              alt="UK Flag"
              className="h-5 w-auto font-bold"
            />
            <div className="flex items-center space-x-1">
              <FaPhoneAlt className="text-[#D9B84A]" />
              <span className="text-[#D9B84A]">+44 203 504 0786</span>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
