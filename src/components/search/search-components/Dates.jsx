import React, { useState } from "react";
import { format, addDays } from "date-fns";
import { FaCalendarDay } from "react-icons/fa";
import DatePicker from "react-datepicker"; // Import the date picker
import "react-datepicker/dist/react-datepicker.css"; // Import date picker styles

const Dates = ({text1,text2}) => {
  const today = new Date();
  const endDate = addDays(today, 3);
  const formattedStartDate = format(today, "dd MMM, yy");
  const formattedEndDate = format(endDate, "dd MMM, yy");

  const [checkInDate, setCheckInDate] = useState(today);
  const [checkOutDate, setCheckOutDate] = useState(endDate);

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  return (
    <>
      <div className="flex flex-row w-full xl:w-[300px] border border-solid border-gray-600 rounded-xl h-[50px] items-center px-5 cursor-pointer mb-4 xl:mb-0">
        <FaCalendarDay className="w-5 h-5 mr-5" />
        <div className="flex flex-col">
          <p className="text-[12px] text-gray-500">{text1}</p>
          <DatePicker
            selected={checkInDate}
            onChange={handleCheckInDateChange}
            dateFormat="dd MMM, yy"
            className="text-[16px] text-gray-700 border-none h-[25px] pl-0"
            popperClassName="date-picker-popper"
            shouldCloseOnSelect={true}
            showPopperArrow={false}
            calendarClassName="date-picker-calendar"
          />
        </div>
      </div>

      <div className="flex flex-row w-full xl:w-[300px] border border-solid border-gray-600 rounded-xl h-[50px] items-center px-5 cursor-pointer mb-4 xl:mb-0">
        <FaCalendarDay className="w-5 h-5 mr-5" />
        <div className="flex flex-col justify-start">
          <p className="text-[12px] text-gray-500">{text2}</p>
          <DatePicker
            selected={checkOutDate}
            onChange={handleCheckOutDateChange}
            dateFormat="dd MMM, yy"
            className="text-[16px] text-gray-700 border-none h-[25px] pl-0 cursor-pointer"
            popperClassName="date-picker-popper"
            shouldCloseOnSelect={true}
            showPopperArrow={false}
            calendarClassName="date-picker-calendar"
          />
        </div>
      </div>
    </>
  );
};

export default Dates;
