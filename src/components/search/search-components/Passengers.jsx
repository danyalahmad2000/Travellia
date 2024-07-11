import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

const Passengers = () => {
  const [showPassengers, setShowPassengers] = useState(false);
  const [passengerCounts, setPassengerCounts] = useState({
    adults: 1,
    youth: 0,
    children: 0,
    infants: 0,
  });

  const togglePassengers = () => {
    setShowPassengers(!showPassengers);
  };

  const decreaseCount = (type) => {
    if (passengerCounts[type] > 0) {
      setPassengerCounts((prevCounts) => ({
        ...prevCounts,
        [type]: prevCounts[type] - 1,
      }));
    }
  };

  const increaseCount = (type) => {
    setPassengerCounts((prevCounts) => ({
      ...prevCounts,
      [type]: prevCounts[type] + 1,
    }));
  };

  return (
    <>
      <div className="relative">
        <div
          className="flex flex-row w-[350px] border border-solid border-gray-600 rounded-xl h-[50px] items-center px-5 cursor-pointer"
          onClick={togglePassengers}
        >
          <FaUser className="w-5 h-5 mr-5" />
          <div className="flex flex-col">
            <p className="text-[12px] text-gray-500">Travellers</p>
            <p className="text-[16px] text-gray-700">
              {passengerCounts.adults} Adult{passengerCounts.adults !== 1 && "s"}, 
              {" "}{passengerCounts.youth} Youth,
              {" "}{passengerCounts.children}{" "} Child{passengerCounts.children !== 1 && "ren"},
              {" "}{passengerCounts.infants} Infant{passengerCounts.infants !== 1 && "s"}
            </p>
          </div>
        </div>
        {showPassengers && (
          <div className="absolute mt-2 w-full lg:w-[350px] bg-white shadow-lg rounded-lg z-20 top-14">
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
              <p className="font-semibold">Adults <span className="text-gray-500 font-normal">( More than 12 yrs )</span></p>
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
                <p className="font-semibold">Youth <span className="text-gray-500 font-normal">( 11 yrs - 15 yrs )</span></p>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-3 py-1 bg-gray-200 rounded"
                    onClick={() => decreaseCount("youth")}
                  >
                    -
                  </button>
                  <span>{passengerCounts.youth}</span>
                  <button
                    className="px-3 py-1 bg-gray-200 rounded"
                    onClick={() => increaseCount("youth")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
              <p className="font-semibold">Children <span className="text-gray-500 font-normal">( 02 yrs - 11 yrs )</span></p>
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
              <p className="font-semibold">Infants <span className="text-gray-500 font-normal">( Less than 02 yrs )</span></p>
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
