import React from "react";
import logo from "../../assets/images/logo.png"; // replace with the actual path to your logo
import ukFlag from "../../assets/images/uk-flag.png";
import { FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between bg-transparent">
        {/* Left side: Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-24 w-52" />
        </div>

        {/* Right side: Currency, UK flag, and phone number */}
        <div className="flex items-center space-x-6">
          <span className="font-bold text-[16px] text-[#D9B84A]">GBP</span>
          <img
            src={ukFlag}
            alt="UK Flag"
            className="h-5 w-auto font-bold"
          />{" "}
          {/* replace with the actual path to your UK flag image */}
          <div className="flex items-center space-x-1">
            <FaPhoneAlt className="text-[#D9B84A]"/>
            <span className="text-[#D9B84A]">+44 1234 567890</span>{" "}
            {/* replace with the actual phone number */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
