import React from "react";
import InvoicePrevNavbar from "../InvoicePrev/InvoicePrevNavbar";
import InvoicePrevCustomerInfo from "../InvoicePrev/InvoicePrevCustomerInfo";
import InvoicePrevItems from "../InvoicePrev/InvoicePrevItems";
import InvoicePrevTotal from "../InvoicePrev/InvoicePrevTotal";
import InvoicePrevTextField from "../InvoicePrev/InvoicePrevTextField";

const InvoicePrev = () => {
  return (
    <div
      className="w-[70%] h-[1000px] ml-[20px] mt-[10px] rounded-[5px]
     border-black border-[0.3px] p-[20px] "
    >
      <InvoicePrevNavbar />
      <InvoicePrevCustomerInfo />
      <InvoicePrevItems />
      <InvoicePrevTotal />
      <InvoicePrevTextField />
    </div>
  );
};

export default InvoicePrev;
