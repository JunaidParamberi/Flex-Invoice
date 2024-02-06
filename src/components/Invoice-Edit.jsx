import React from "react";
import InvoiceNavbar from "../InvoiceEditor/InvoiceNavbar";
import InvoiceCustomerInfo from "../InvoiceEditor/InvoiceCustomerInfo";
import InvoiceItems from "../InvoiceEditor/InvoiceItems";
import InvoiceTotal from "../InvoiceEditor/InvoiceTotal";
import InvoiceTextField from "../InvoiceEditor/InvoiceTextField";

const InvoiceEdit = () => {
  return (
    <div
      className="w-[70%] h-[1000px] ml-[20px] mt-[10px] rounded-[5px]
     border-black border-[0.3px] p-[20px] 
      "
    >
      <InvoiceNavbar />
      <InvoiceCustomerInfo />
      <InvoiceItems />
      <InvoiceTotal />
      <InvoiceTextField />
    </div>
  );
};

export default InvoiceEdit;
