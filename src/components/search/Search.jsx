import React, { useState, useEffect } from "react";
import { Checkbox, Label } from "flowbite-react";
import Dates from "./search-components/Dates";
import Location from "./search-components/Location";
import Passengers from "./search-components/Passengers";

const Search = () => {
  const menuItems = [
    { id: 1, text: "Stays" },
    { id: 2, text: "Flights" },
    { id: 3, text: "Cars" },
    { id: 4, text: "Packages" },
    { id: 5, text: "Things to do" },
  ];

  const [clickedItem, setClickedItem] = useState(1);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemId) => {
    if (clickedItem !== itemId) {
      setHoveredItem(itemId);
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleClick = (itemId) => {
    setClickedItem(itemId === clickedItem ? null : itemId);
    setHoveredItem(null);
  };

  useEffect(() => {
    setClickedItem(1);
  }, []);

  return (
    <div className="container mx-auto bg-white rounded-tl-xl rounded-3xl">
      <div className="border border-solid flex flex-col bg-white rounded-3xl">
        <div className="flex flex-row justify-between items-center w-[500px] h-[40px] mx-auto">
          {menuItems.map((item) => (
            <h1
              key={item.id}
              className={`text-[16px] font-semibold cursor-pointer relative ${
                clickedItem === item.id ? "text-[#D9B748]" : "text-gray-600"
              }`}
              onClick={() => handleClick(item.id)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              {item.text}
              {(hoveredItem === item.id || clickedItem === item.id) && (
                <span
                  className={`absolute bottom-[-8px] left-0 h-[2px] w-full ${
                    clickedItem === item.id ? "bg-[#D9B748]" : "bg-gray-600"
                  }`}
                ></span>
              )}
            </h1>
          ))}
        </div>
        <div className="bg-gray-300 h-[1px] w-full"></div>

        {clickedItem === 1 && (
          <div className="flex flex-col pb-5">
            <div className="flex flex-row px-10 h-[100px] items-center justify-between">
              <Location/>

              <Dates />

              <Passengers/>

              <button className="w-[100px] h-[50px] rounded-3xl border border-solid bg-[#D9B748] text-white font-semibold">
                Search
              </button>
            </div>

            <div className="flex flex-row items-center ml-10 gap-6">
              <div className="flex items-center gap-2">
                <Checkbox
                  className="hover:border-[#D9B748] cursor-pointer"
                  id="rememberFlight"
                />
                <Label htmlFor="rememberFlight">Add a Flight</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  className="hover:border-[#D9B748] cursor-pointer"
                  id="rememberCar"
                />
                <Label htmlFor="rememberCar">Add a Car</Label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
