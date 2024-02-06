import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function InvoicePrevNavbar() {
  return (
    <div className="w-[100%] min-h-[100px] flex justify-between items-center ">
      <div
        className="image-input w-[300px] 
       rounded-3xl 
       flex p-[10px] items-center border-spacing-3   "
      >
        <img
          className="w-[70%]"
          src="https://junaidparamberi.dev/assets/Logo-blackmode-lmv9QlLo.png"
        />
      </div>

      <div className="address-container flex flex-col items-end">
        <p className="font-light text-[13px] ">Meng Design</p>
        <p className="font-light text-[13px] ">+886123456789</p>
        <p className="font-light text-[13px] "> mengdesigntw@gmail.com</p>
        <p className="font-light text-[13px] "> CA-USA</p>
      </div>
    </div>
  );
}

export default InvoicePrevNavbar;
