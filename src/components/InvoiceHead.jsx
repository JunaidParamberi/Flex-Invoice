import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function InvoiceHead() {
  const saveInvoice = () => {
    console.log("Saved");
  };
  return (
    <div className="sticky top-0 z-10 bg-white  flex w-full p-[20px] border-b-[0.5px] border-b-[#09085230] justify-between items-center">
      <h1 className="text-[20px] font-normal text-[#090852]">
        Add New Invoice
      </h1>

      <span className="flex gap-[10px] items-center">
        <Button
          sx={{
            textTransform: "capitalize",
            fontSize: "14px",
            color: "red",
            borderRadius: "20px",
            "&:hover": {
              borderColor: "#090852",
            },
          }}
          variant="text"
        >
          Cancel
        </Button>
        <Button
          sx={{
            textTransform: "capitalize",
            fontSize: "14px",
            color: "#090852",
            borderColor: "#090852",
            borderRadius: "20px",
            "&:hover": {
              borderColor: "#090852",
            },
          }}
          variant="outlined"
        >
          Save as Draft
        </Button>
        <Button
          sx={{
            textTransform: "capitalize",
            fontSize: "14px",
            backgroundColor: "#090852",
            borderRadius: "20px",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "#090852", // Change this to the desired hover color
              boxShadow: "none",
            },
          }}
          variant="contained"
          onClick={saveInvoice}
        >
          Save
        </Button>
      </span>
    </div>
  );
}

export default InvoiceHead;
