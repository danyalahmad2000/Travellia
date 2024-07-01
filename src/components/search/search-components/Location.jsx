import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";

const Location = () => {
  const locations = [
    { name: "Paris", description: "Île-de-France, France" },
    { name: "Sydney", description: "New South Wales, Australia" },
    { name: "Rome", description: "Lazio, Italy" },
    { name: "Dubai", description: "United Arab Emirates" },
    { name: "Berlin", description: "Berlin, Germany" },
    { name: "Singapore", description: "Singapore" },
    { name: "Toronto", description: "Ontario, Canada" },
    { name: "Barcelona", description: "Catalonia, Spain" },
    { name: "Hong Kong", description: "Hong Kong" },
    { name: "Rio de Janeiro", description: "Rio de Janeiro, Brazil" },
  ];

  const [showLocations, setShowLocations] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleLocations = () => {
    setShowLocations(!showLocations);
    setSearchTerm(""); // Reset search term when toggling
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowLocations(false); // Close the dropdown after selection
  };

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <div
        className="w-full md:w-[700px] lg:w-[900px] xl:w-[200px] h-[90px] xl:rounded-bl-[20px] xl:rounded-tl-[20px] flex flex-row justify-between px-4 sm:px-auto bg-white relative cursor-pointer z-10 mt-16 lg:mt-0"
        onClick={toggleLocations}
        aria-expanded={showLocations}
      >
        <div className="flex flex-col w-[70%] sm:w-full h-[90px] justify-center items-start px-2 sm:px-4 py-auto">
          <p className="font-[700]">Location</p>
          <p className="text-textColor">
            {selectedLocation ? selectedLocation.name : "Where are you going?"}
          </p>
        </div>
        <div className="w-[30%] sm:w-auto flex justify-center items-center">
          <SlLocationPin className="size-[20px] mt-[15px]" />
        </div>
        <div className="absolute h-[45px] bg-gray-300 w-[1px] right-0 top-[22.5px]"></div>
      </div>
      {showLocations && (
        <div className="absolute mt-2 w-full sm:w-[400px] bg-white shadow-lg rounded-lg z-20 bottom-24" aria-hidden={!showLocations}>
          <input
            type="text"
            placeholder="Search locations..."
            className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search locations"
          />
          <div className="max-h-60 sm:max-h-[400px] overflow-y-auto">
            {filteredLocations.map((location, index) => (
              <div
                key={index}
                className="flex flex-row px-[20px] py-[15px] text-[15px] gap-3 cursor-pointer hover:bg-green-100 items-start"
                onClick={() => handleLocationSelect(location)}
              >
                <div className="w-[30px] sm:w-[40px] flex justify-center items-center">
                  <SlLocationPin className="size-[20px]" />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <p className="font-bold text-green-600">{location.name}</p>
                  <p className="text-gray-500">{location.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
