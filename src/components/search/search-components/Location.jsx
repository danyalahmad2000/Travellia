import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";

const Location = () => {
  return (
    <div className="flex flex-row w-[300px] border border-solid border-gray-600 rounded-xl h-[50px] items-center px-5 cursor-pointer">
      <MdLocationOn className="w-7 h-7 mr-5" />
      <p className="text-[16px] text-gray-700">Where to?</p>
    </div>
  );
};

export default Location;
