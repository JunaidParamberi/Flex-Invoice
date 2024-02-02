import React from "react";
import InvoiceNavbar from "./InvoiceNavbar";
import InvoiceCustomerInfo from "./InvoiceCustomerInfo";
import InvoiceItems from "./InvoiceItems";

const InvoiceEdit = () => {
  return (
    <div
      className="w-[70%] ml-[20px] mt-[10px] rounded-[5px]
     border-black border-[0.3px] p-[20px] 
     overflow-y-scroll "
    >
      <InvoiceNavbar />
      <InvoiceCustomerInfo />
      <InvoiceItems />
    </div>
  );
};

export default InvoiceEdit;
