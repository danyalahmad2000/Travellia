import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Booking = () => {
  const flightClasses = [
    { name: "Economy", description: "Standard seating and services" },
    { name: "Premium Economy", description: "Enhanced comfort and services" },
    { name: "Business", description: "Priority services and luxury seating" },
    {
      name: "First Class",
      description: "Top-tier services and luxury accommodations",
    },
    // Add more flight classes as needed
  ];

  const [showFlightClasses, setShowFlightClasses] = useState(false);
  const [selectedFlightClass, setSelectedFlightClass] = useState(null);

  const toggleFlightClasses = () => {
    setShowFlightClasses(!showFlightClasses);
  };

  const handleFlightClassSelect = (flightClass) => {
    setSelectedFlightClass(flightClass);
    setShowFlightClasses(false); // Close the dropdown after selection (optional)
  };

  return (
    <div className="relative">
      <div
        className="w-full md:w-[700px] lg:w-[900px] xl:w-[200px] h-[90px] flex justify-between items-center px-4 bg-white cursor-pointer"
        onClick={toggleFlightClasses}
      >
        <div className="flex flex-col w-[70%] sm:w-full justify-center items-start px-2 sm:px-4 py-auto">
          <p className="font-bold">Booking Class</p>
          <p>
            {selectedFlightClass ? selectedFlightClass.name : "Choose Booking Class"}
          </p>
        </div>
        <div className="w-[30%] sm:w-auto flex justify-center items-center">
          <FaChevronDown className="text-gray-600" />
        </div>
        <div className="absolute h-[45px] bg-gray-300 w-[1px] right-0 top-[22.5px]"></div>
      </div>
      {showFlightClasses && (
        <div className="absolute w-full lg:w-[400px] bg-white shadow-lg rounded-lg z-20 mt-2 sm:mt-0 bottom-24">
          {flightClasses.map((flightClass, index) => (
            <div
              key={index}
              className="py-3 px-4 text-sm cursor-pointer hover:bg-gray-100"
              onClick={() => handleFlightClassSelect(flightClass)}
            >
              <p className="font-bold">{flightClass.name}</p>
              <p className="text-gray-600">{flightClass.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Booking;
