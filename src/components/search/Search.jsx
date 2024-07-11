import React, { useState, useEffect } from "react";
import { Checkbox, Label } from "flowbite-react";
import Dates from "./search-components/Dates";
import Location from "./search-components/Location";
import Passengers from "./search-components/Passengers";

const Search = () => {
  // Define the menu items for the search categories
  const menuItems = [
    { id: 1, text: "Stays" },
    { id: 2, text: "Flights" },
    { id: 3, text: "Cars" },
    { id: 4, text: "Packages" },
    { id: 5, text: "Things to do" },
  ];

  // State to manage the currently clicked menu item
  const [clickedItem, setClickedItem] = useState(1);
  // State to manage the currently hovered menu item
  const [hoveredItem, setHoveredItem] = useState(null);

  // Handle mouse enter event on a menu item
  const handleMouseEnter = (itemId) => {
    if (clickedItem !== itemId) {
      setHoveredItem(itemId);
    }
  };

  // Handle mouse leave event from a menu item
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  // Handle click event on a menu item
  const handleClick = (itemId) => {
    setClickedItem(itemId === clickedItem ? null : itemId);
    setHoveredItem(null);
  };

  // Set the default clicked item when the component mounts
  useEffect(() => {
    setClickedItem(1);
  }, []);

  return (
    <div className="container mx-auto bg-white rounded-tl-xl rounded-3xl">
      {/* Main container for the search component */}
      <div className="border border-solid flex flex-col bg-white rounded-3xl">
        {/* Menu items for selecting different search categories */}
        <div className="flex flex-row justify-between items-center w-full max-w-[500px] mx-auto px-4 py-2">
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
              {/* Highlight the item when hovered or clicked */}
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

        {/* Render the search form when the "Stays" menu item is clicked */}
        {clickedItem === 1 && (
          <div className="flex flex-col">
            <div className="flex flex-col xl:flex-row px-4 xl:px-10 py-4 xl:py-6 items-center justify-between">
              {/* Location selection component */}
              <Location />

              {/* Date selection component */}
              <Dates />

              {/* Passengers selection component */}
              <Passengers />

              {/* Search button */}
              <button className="w-full xl:w-[100px] h-[50px] rounded-3xl border border-solid bg-[#D9B748] text-white font-semibold mt-4 xl:mt-0">
                Search
              </button>
            </div>

            {/* Additional options for adding a flight or car */}
            <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start mt-4 ml-4 xl:ml-10 gap-4 xl:mt-0 pb-4">
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
