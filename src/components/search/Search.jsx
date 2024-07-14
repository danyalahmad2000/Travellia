import React, { useState, useEffect } from "react";
import { Checkbox, Label } from "flowbite-react";
import Dates from "./search-components/Dates";
import Location from "./search-components/Location";
import Passengers from "./search-components/Passengers";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Return from "./search-components/Return";
import Oneway from "./search-components/Oneway";
import Multicity from "./search-components/Multicity";

const Search = () => {
  const menuItems = [
    { id: 1, text: "Flights" },
    { id: 2, text: "Hotels" },
    { id: 3, text: "Holiday Packages" },
    { id: 4, text: "Hajj / Umrah Packages" },
  ];

  const [clickedItem, setClickedItem] = useState(1);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [addFlight, setAddFlight] = useState(false);
  const [showBookingClassDropdown, setShowBookingClassDropdown] = useState(false);
  const [selectedBookingClass, setSelectedBookingClass] = useState("Economy");
  const [selectedTripType, setSelectedTripType] = useState("return");

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

  const handleAddFlightChange = () => {
    setAddFlight(!addFlight);
  };

  const handleBookingClassClick = () => {
    setShowBookingClassDropdown(!showBookingClassDropdown);
  };

  const handleSelectBookingClass = (bookingClass) => {
    setSelectedBookingClass(bookingClass);
    setShowBookingClassDropdown(false);
  };

  const handleTripTypeChange = (event) => {
    setSelectedTripType(event.target.value);
  };

  useEffect(() => {
    setClickedItem(1);
  }, []);

  return (
    <div className="container mx-auto bg-white rounded-3xl">
      <div className="border border-solid flex flex-col bg-white rounded-3xl">
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
          <div className="flex flex-col">
            <div className="flex flex-col xl:flex-row px-4 xl:px-10 py-4 xl:py-6 items-center justify-start gap-3">
              <div className="flex items-center gap-3 ">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tripType"
                    value="return"
                    className="form-radio text-[#D9B748] border-[#D9B748]"
                    checked={selectedTripType === "return"}
                    onChange={handleTripTypeChange}
                  />
                  <span className="ml-2 text-gray-700">Return</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tripType"
                    value="oneWay"
                    className="form-radio text-[#D9B748] border-[#D9B748]"
                    checked={selectedTripType === "oneWay"}
                    onChange={handleTripTypeChange}
                  />
                  <span className="ml-2 text-gray-700">One-way</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="tripType"
                    value="multiCity"
                    className="form-radio text-[#D9B748] border-[#D9B748]"
                    checked={selectedTripType === "multiCity"}
                    onChange={handleTripTypeChange}
                  />
                  <span className="ml-2 text-gray-700">Multi-city</span>
                </label>
              </div>

              <div
                className="flex flex-row items-center justify-between w-[200px] h-[40px] border border-[#D9B748] px-5 rounded-xl cursor-pointer relative bg-[#e7ca68]"
                onClick={handleBookingClassClick}
              >
                <p>{selectedBookingClass}</p>
                {showBookingClassDropdown ? <FaChevronUp /> : <FaChevronDown />}
                {showBookingClassDropdown && (
                  <div className="absolute top-full mt-1 left-0 w-full bg-white border border-[#D9B748] rounded-xl z-40">
                    <p
                      className="cursor-pointer hover:bg-[#D9B748] p-2 rounded-tl-xl rounded-tr-xl"
                      onClick={() => handleSelectBookingClass("Economy")}
                    >
                      Economy
                    </p>
                    
                    <p
                      className="cursor-pointer hover:bg-[#D9B748] p-2"
                      onClick={() => handleSelectBookingClass("Premium Economy")}
                    >
                      Premium Economy
                    </p>

                    <p
                      className="cursor-pointer hover:bg-[#D9B748] p-2"
                      onClick={() => handleSelectBookingClass("Business Class")}
                    >
                      Business Class
                    </p>

                    <p
                      className="cursor-pointer hover:bg-[#D9B748] p-2 rounded-bl-xl rounded-br-xl"
                      onClick={() => handleSelectBookingClass("First Class")}
                    >
                      First Class
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Conditionally render based on selected trip type */}
            {selectedTripType === "return" && <Return />}
            {selectedTripType === "oneWay" && <Oneway />}
            {selectedTripType === "multiCity" && <Multicity />}
          </div>
        )}

        {clickedItem === 2 && (
          <div className="flex flex-col">
            <div className="flex flex-col xl:flex-row px-4 xl:px-10 py-4 xl:py-6 items-center justify-between">
              <Location text={"Where to?"} />
              <Dates text1={"Check In"} />
              <Dates text1={"Check Out"} />
              <Passengers />
              <button className="w-full xl:w-[100px] h-[50px] rounded-3xl border border-solid bg-[#D9B748] hover:bg-[#af943c] text-white font-semibold mt-4 xl:mt-0">
                Search
              </button>
            </div>

            <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start mt-4 ml-4 xl:ml-10 gap-4 xl:mt-0 pb-4">
              <div className="flex items-center gap-2">
                <Checkbox
                  className="hover:border-[#D9B748] cursor-pointer"
                  id="rememberFlight"
                  checked={addFlight}
                  onChange={handleAddFlightChange}
                />
                <Label htmlFor="rememberFlight">Add a Flight</Label>
              </div>
            </div>
            {addFlight && (
              <div className="flex flex-col xl:flex-row px-4 xl:px-10 pb-4 items-center justify-between">
                <Location text={"Leaving From?"} />
              </div>
            )}
          </div>
        )}

        {clickedItem === 3 && (
          <div className="flex flex-col">
            <div className="flex flex-col xl:flex-row px-4 xl:px-10 py-4 xl:py-6 items-center justify-between gap-3">
              <Location text={"Leaving from?"} />
              <Location text={"Going to?"} />
              <Dates text1={"Departure Date"} text2={"Returning Date"} />
              <Passengers />
              <button className="w-full xl:w-[100px] h-[50px] rounded-3xl border border-solid bg-[#D9B748] hover:bg-[#af943c] text-white font-semibold mt-4 xl:mt-0">
                Search
              </button>
            </div>
          </div>
        )}

        {clickedItem === 4 && (
          <div className="flex flex-col">
            <div className="flex flex-col xl:flex-row px-4 xl:px-10 py-4 xl:py-6 items-center justify-between gap-3">
              <Location text={"Leaving from?"} />
              <Location text={"Going to?"} />
              <Dates text1={"Departure Date"} text2={"Returning Date"} />
              <Passengers />
              <button className="w-full xl:w-[100px] h-[50px] rounded-3xl border border-solid bg-[#D9B748] hover:bg-[#af943c] text-white font-semibold mt-4 xl:mt-0">
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
