import React from "react";
import logo from "../../assets/images/logo.png";
import { FaLinkedin, FaFacebookMessenger, FaInstagram, FaTwitter, FaWhatsapp, FaArrowRight } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-slate-100">
      <div className="container mx-auto flex flex-col lg:flex-row py-10 px-5">
        <div className="flex flex-col w-full lg:w-1/4 mb-10 lg:mb-0 lg:mr-10">
          <img src={logo} alt="Logo" className="mb-4" />
          <p className="text-[16px] leading-7 mb-4">
            Explore the world with Travelia, your trusted flight booking
            companion. Enjoy competitive prices, exclusive deals, and 24/7
            support for a hassle-free travel experience.
          </p>
          <p className="text-[16px] leading-7 font-[400] text-textColor">
            Copyright © {year}. All Rights Reserved.
          </p>
          <div className="flex mt-4">
            <FaLinkedin className="text-[#D9B748] w-6 h-6 mr-5" />
            <FaFacebookMessenger className="text-[#D9B748] w-6 h-6 mr-5" />
            <FaInstagram className="text-[#D9B748] w-6 h-6 mr-5" />
            <FaTwitter className="text-[#D9B748] w-6 h-6 mr-5" />
            <FaWhatsapp className="text-[#D9B748] w-6 h-6" />
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/6 mb-10 lg:mb-0 text-center lg:text-left mt-10">
          <h1 className="text-[21px] font-semibold text-[#D9B748]">Company</h1>
          <div className="mt-4 lg:mt-12">
            <p className="mb-5">About Us</p>
            <p className="mb-5">Careers</p>
            <p className="mb-5">Blog</p>
            <p className="mb-5">Pricing</p>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/6 mb-10 lg:mb-0 text-center lg:text-left mt-10">
          <h1 className="text-[21px] font-semibold text-[#D9B748]">Destinations</h1>
          <div className="mt-4 lg:mt-12">
            <p className="mb-5">Maldives</p>
            <p className="mb-5">Los Angeles</p>
            <p className="mb-5">Las Vegas</p>
            <p className="mb-5">Toronto</p>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/6 mb-10 lg:mb-0 text-center lg:text-left mt-10">
          <h1 className="text-[21px] font-semibold text-[#D9B748]">Packages</h1>
          <div className="mt-4 lg:mt-12">
            <p className="mb-5">Umrah Packages</p>
            <p className="mb-5">Holiday Packages</p>
            <p className="mb-5">Custom Package</p>
            <p className="mb-5">Build Package</p>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/4 text-center lg:text-left mt-10">
          <h1 className="text-[20px] mb-[20px] font-[700] text-[#D9B748]">Subscribe</h1>
          <p className="text-[16px] leading-7 font-[400] text-textColor mb-[20px]">
            Subscribe to get the latest blog news from us.
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <input
              type="text"
              className="border w-full lg:w-[300px] h-[50px] rounded-[20px] pl-[15px] mr-3"
              placeholder="Email Address"
            />
            <div className="w-[50px] h-[50px] cursor-pointer bg-[#D9B748] rounded-full flex items-center justify-center">
              <FaArrowRight className="text-white size-[32px] cursor-pointer rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
