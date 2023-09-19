import { useState } from "react";
import React from 'react';
import DatePicker from'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../datepicker.css';
import { BsCalendar } from "react-icons/bs";



function CheckIn() {
  const [startDate, setStartDate] = useState(false)
  return (
    <div className="relative flex items-center justify-end h-full ">
      <div  className="absolute z-10 pr-8">
        <div>
          <BsCalendar className="text-accent text-base"/>
        </div>
      </div>
      <div className="w-full h-full">
        <DatePicker
        className="h-full w-full cursor-pointer"
        selected={startDate}
        placeholderText="Check In"
        onChange={(date)=> setStartDate(date)}
        />
      </div>
    </div>
  );
}

export default CheckIn