import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchIcon = () => {
  return (
    <>
      <div className="w-full md:w-[700px] lg:w-[900px] xl:w-[100px] h-[90px] bg-[#D9B748] xl:rounded-br-[20px] xl:rounded-tr-[20px] flex justify-center items-center px-5">
        <div className="bg-[#D9B748] size-[60px] rounded-[20px] flex justify-center items-center">
          <FaSearch className="size-[40px] text-white" />
        </div>
      </div>
    </>
  );
};

export default SearchIcon;