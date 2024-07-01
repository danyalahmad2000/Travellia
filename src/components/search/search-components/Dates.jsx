import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Location.css";

const Dates = () => {
  const [datesRange, setDatesRange] = useState([]);
  const [showCalendar, setShowCalendar] = useState(false);

  const handleCalendarChange = (value) => {
    setDatesRange(value);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <>
      <div className="relative">
        <div
          className="w-full md:w-[700px] lg:w-[900px] xl:w-[200px] h-[90px] flex flex-row justify-start xl:justify-center items-center relative bg-white cursor-pointer z-10 pl-4 xl:pl-0"
          onClick={toggleCalendar}
        >
          <div className="flex flex-col justify-center items-start px-2 sm:px-4 py-auto">
            <p className="font-bold">Check in - Check out</p>
            {datesRange.length > 0 ? (
              <p className="text-gray-500">
                {datesRange[0].toLocaleDateString()} ~ {datesRange[datesRange.length - 1].toLocaleDateString()}
              </p>
            ) : (
              <p className="text-[12px]">Select dates (Press 'Shift' while selection)</p>
            )}
          </div>
          <div className="absolute h-[45px] bg-gray-300 w-[1px] right-0 top-[22.5px]"></div>
        </div>
        {showCalendar && (
          <div className="absolute mt-2 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg z-20 bottom-24">
            <Calendar
              onChange={handleCalendarChange}
              value={datesRange}
              selectRange
              minDate={new Date()}
              className="border-gray-300 border p-2"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Dates;
