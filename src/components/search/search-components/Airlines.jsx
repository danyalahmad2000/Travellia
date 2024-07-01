import React, { useState } from "react";

const Airline = () => {
  const airlines = [
    { name: "American Airlines", code: "AA" },
    { name: "Delta Air Lines", code: "DL" },
    { name: "United Airlines", code: "UA" },
    // Add more airlines as needed
  ];

  const [showAirlines, setShowAirlines] = useState(false);
  const [selectedAirline, setSelectedAirline] = useState(null);

  const toggleAirlines = () => {
    setShowAirlines(!showAirlines);
  };

  const handleAirlineSelect = (airline) => {
    setSelectedAirline(airline);
    setShowAirlines(false); // Close the dropdown after selection (optional)
  };

  return (
    <>
      <div className="relative">
        <div
          className="w-full md:w-[700px] lg:w-[900px] xl:w-[200px] h-[90px] flex flex-row justify-between px-4 sm:px-auto bg-white relative cursor-pointer z-10"
          onClick={toggleAirlines}
        >
          <div className="flex flex-col w-[70%] sm:w-full h-[90px] justify-center items-start px-2 sm:px-4 py-auto">
            <p className="font-[700]">Preferred Airline</p>
            <p className="text-textColor">
              {selectedAirline ? selectedAirline.name : "Select preferred airline"}
            </p>
          </div>
          <div className="absolute h-[45px] bg-gray-300 w-[1px] right-0 top-[22.5px]"></div>
        </div>
        {showAirlines && (
          <div className="absolute mt-2 w-full lg:w-[400px] bg-white shadow-lg rounded-lg z-20 bottom-24">
            <div>
              {airlines.map((airline, index) => (
                <div
                  key={index}
                  className="flex flex-row px-[20px] py-[15px] text-[15px] gap-3 cursor-pointer justify-center lg:justify-start"
                  onClick={() => handleAirlineSelect(airline)}
                >
                  <div className="flex flex-col gap-1">
                    <p className="font-bold">{airline.name}</p>
                    <p className="text-gray-500">{airline.code}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Airline;