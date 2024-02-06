import React from "react";
import Switch from "@mui/material/Switch";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Checkbox from "@mui/material/Checkbox";

function Customization() {
  return (
    <div className="mt-[10px] w-[25%] flex flex-col gap-[20px] sticky top-[14%] z-10 h-full">
      <div className="flex items-center justify-between bg-[#00000015] py-[10px] px-[10px] rounded-[10px] ">
        <p className="text-[14px] font-medium">Preview Invoice</p>
        <Switch size="small" />
      </div>
      <div className="flex flex-col bg-[#00000015] rounded-[10px] pb-[5px] ">
        <div className="flex justify-between p-[10px]">
          <h1>Record the Invoice</h1>
          <div className="">
            <KeyboardArrowUpIcon />
          </div>
        </div>
        <div className=" flex items-center">
          <Checkbox color="default" size="small" />
          <p className="text-[14px] font-normal">I have Recieved the payment</p>
        </div>
        <div className=" flex items-center">
          <Checkbox color="default" size="small" />
          <p className="text-[14px] font-normal">Mark as send</p>
        </div>
      </div>
    </div>
  );
}

export default Customization;
