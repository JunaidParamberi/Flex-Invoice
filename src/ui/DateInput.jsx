import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
function DateInput({ date, setDate, style }) {
  return (
    <div className="relative flex items-center justify-end  ">
      <input
        type="date"
        placeholder="date"
        className="border-[2px] absolute opacity-0 mr-[10px] cursor-pointer "
        onChange={(e) => setDate(e.target.value)}
      />
      <div
        style={style}
        className=" flex border-[1px] items-center px-[10px] py-[7px] justify-between rounded-[6px] border-[#949494] "
      >
        {date ? (
          <p className="text-black  font-light">{date}</p>
        ) : (
          <p className="text-[#949494] font-light">DD/MM/YYYY</p>
        )}
        <div className=" cursor-pointer">
          <DateRangeIcon sx={{ color: "#949494" }} fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default DateInput;
