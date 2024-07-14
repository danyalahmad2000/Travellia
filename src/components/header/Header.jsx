import React from "react";
import logo from "../../assets/images/logo.png"; // Replace with the actual path to your logo
import ukFlag from "../../assets/images/uk-flag.png";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  // Define your navigation links
  const navLinks = [
    { title: "Flights", url: "/flights" },
    { title: "Hotels", url: "/hotels" },
    { title: "Vacations", url: "/vacations" },
    { title: "About", url: "/about" },
    { title: "Contact Us", url: "/contact" },
    { title: "Terms & Conditions", url: "/termsnconditions" },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        {/* Left side: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-40 w-44" />
        </div>

        {/* Center: Tabs/Navigation Links */}
        <nav className="flex space-x-16">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-[#D9B84A] hover:scale-110 font-bold text-[16px] transition-all ease-in-out"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Right side: Currency, UK flag, and phone number */}
        <div className="flex items-center space-x-6">
          <span className="font-bold text-[16px] text-[#D9B84A]">GBP</span>
          <img
            src={ukFlag}
            alt="UK Flag"
            className="h-5 w-auto font-bold"
          />{" "}
          {/* Replace with the actual path to your UK flag image */}
          <div className="flex items-center space-x-1">
            <FaPhoneAlt className="text-[#D9B84A]" />
            <span className="text-[#D9B84A]">+44 203 504 0786</span>{" "}
            {/* Replace with the actual phone number */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
