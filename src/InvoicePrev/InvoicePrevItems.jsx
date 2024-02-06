import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";

function InvoicePrevItems() {
  const formatAmount = (amount) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "AED", // Specify the currency
      minimumFractionDigits: 2, // Specify the minimum number of fraction digits
    });

    // Format the amount using the formatter
    return formatter.format(amount);
  };
  return (
    <div className="flex flex-col mt-[20px]">
      {/* invoice table header */}
      <div className="flex justify-between items-center border-b-[1px] border-b-black pb-[10px]">
        <div className="w-[40%]">
          <p className="text-[14px] font-normal ">Item Details</p>
        </div>
        <div className="w-[10%]">
          <p className="text-[14px] font-normal text-end  ">Qty</p>
        </div>
        <div className="w-[20%]">
          <p className="text-[14px] font-normal text-end  ">Unit Rate</p>
        </div>
        <div className="w-[20%]">
          <p className="text-[14px] font-normal text-end ">Amount</p>
        </div>
      </div>
      {/* invoice table body */}
      <div className="flex justify-between items-center border-b-[1px] min-h-[60px]">
        <div className="w-[40%]">
          <input
            type="text"
            className=" flex border-[1px] items-center w-[100%]
            px-[10px] py-[7px] justify-between rounded-[6px] border-[#949494] font-light outline-none "
            placeholder="Type an item"
          />
        </div>
        <div className="w-[10%] justify-end flex">
          <input
            type="number"
            pattern="[0-9]"
            className="flex border-[1px] items-center w-[80%] 
            px-[10px] py-[7px] justify-between rounded-[6px] text-end border-[#949494] font-light outline-none"
            placeholder="0"
          />
        </div>
        <div className="w-[20%] justify-end flex">
          <input
            type="text"
            pattern="[0-9]*"
            className="flex border-[1px] items-center w-[80%] 
            px-[10px] py-[7px] justify-between rounded-[6px] text-end border-[#949494] font-light outline-none"
            placeholder="AED 1,000.00"
          />
        </div>
        <div className="w-[20%]">
          <p className="text-[14px] font-normal text-end ">
            {formatAmount(1000)}
          </p>
        </div>
      </div>

      {/* <div className="flex ">
        <AddCircleOutlineIcon />
        <p>Add new row</p>
      </div> */}
      <Button
        variant="outlined"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          textTransform: "capitalize",
          gap: "5px",
          alignItems: "center",
          width: "150px",
          borderRadius: "10px",
          boxShadow: "none",
          marginTop: "20px",

          "&:hover": {
            boxShadow: "none",
          },
        }}
      >
        <AddCircleOutlineIcon fontSize="small" />
        Add new row
      </Button>
    </div>
  );
}

export default InvoicePrevItems;
