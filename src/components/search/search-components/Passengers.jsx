import React, { useState } from "react";

const Passengers = () => {
  const [showPassengers, setShowPassengers] = useState(false);
  const [passengerCounts, setPassengerCounts] = useState({
    adults: 1,
    children: 0,
    infants: 0
  });

  const togglePassengers = () => {
    setShowPassengers(!showPassengers);
  };

  const decreaseCount = (type) => {
    if (passengerCounts[type] > 0) {
      setPassengerCounts((prevCounts) => ({
        ...prevCounts,
        [type]: prevCounts[type] - 1
      }));
    }
  };

  const increaseCount = (type) => {
    setPassengerCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1
    }));
  };

  return (
    <>
      <div className="relative">
        <div
          className="w-full md:w-[700px] lg:w-[900px] xl:w-[200px] h-[90px] flex flex-row justify-between px-4 sm:px-auto bg-white relative cursor-pointer z-10"
          onClick={togglePassengers}
        >
          <div className="flex flex-col w-[70%] sm:w-full h-[90px] justify-center items-start px-4 py-auto">
            <p className="font-[700]">Passengers</p>
            <p className="text-textColor">
              {passengerCounts.adults} Adult{passengerCounts.adults !== 1 && "s"}, {" "}
              {passengerCounts.children} Child{passengerCounts.children !== 1 && "ren"}, {" "}
              {passengerCounts.infants} Infant{passengerCounts.infants !== 1 && "s"}
            </p>
          </div>
          <div className="absolute h-[45px] bg-gray-300 w-[1px] right-0 top-[22.5px]"></div>
        </div>
        {showPassengers && (
          <div className="absolute mt-2 w-full lg:w-[300px] bg-white shadow-lg rounded-lg z-20 bottom-24">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <p className="font-bold">Adults</p>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-3 py-1 bg-gray-200 rounded"
                    onClick={() => decreaseCount("adults")}
                  >
                    -
                  </button>
                  <span>{passengerCounts.adults}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 rounded"
                    onClick={() => increaseCount("adults")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <p className="font-bold">Children</p>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-3 py-1 bg-gray-200 rounded"
                    onClick={() => decreaseCount("children")}
                  >
                    -
                  </button>
                  <span>{passengerCounts.children}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 rounded"
                    onClick={() => increaseCount("children")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold">Infants</p>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-3 py-1 bg-gray-200 rounded"
                    onClick={() => decreaseCount("infants")}
                  >
                    -
                  </button>
                  <span>{passengerCounts.infants}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 rounded"
                    onClick={() => increaseCount("infants")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Passengers;