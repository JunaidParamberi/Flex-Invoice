import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function InvoiceNavbar() {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <div className="w-[100%] flex justify-between items-center ">
      <div
        className="image-input w-[300px] 
       rounded-3xl border-dashed border-black border-[0.3px] 
       flex p-[10px] items-center border-spacing-3   "
      >
        <ImageIcon sx={{ fontSize: "100px", opacity: "0.5" }} />
        <div className="flex flex-col font-light items-center justify-center  ">
          <h2 className="text-[12px] opacity-[0.8] text-center ">
            Upload your Company Logo
          </h2>
          <Button
            component="label"
            variant="outlined"
            size="small"
            sx={{
              borderColor: "transparent",
              textTransform: "capitalize",
              "&:hover": {
                borderColor: "transparent",
                backgroundColor: "transparent",
              },
            }}
            startIcon={<CloudUploadIcon />}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button>
        </div>
      </div>

      <div className="address-container flex flex-col items-end">
        <p className="font-light text-[13px] ">Meng Design</p>
        <p className="font-light text-[13px] ">+886123456789</p>
        <p className="font-light text-[13px] "> mengdesigntw@gmail.com</p>
        <p className="font-light text-[13px] "> CA-USA</p>
        <h1 className=" text-blue-500 text-[15px] font-semibold cursor-pointer active:opacity-[0.7] ease-in-out ">
          Edit business info
        </h1>
      </div>
    </div>
  );
}

export default InvoiceNavbar;
