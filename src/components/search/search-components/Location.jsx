import React from "react";
import { MdLocationOn } from "react-icons/md";

const Location = ({ text, customStyles }) => {
  return (
    <div className={`flex flex-row w-full xl:max-w-[300px] border border-solid border-gray-600 rounded-xl h-[50px] items-center px-5 cursor-pointer mb-4 xl:mb-0 ${customStyles}`}>
      <MdLocationOn className="w-7 h-7 mr-5" />
      <p className="text-[16px] text-gray-700">{text}</p>
    </div>
  );
};

export default Location;
