import React from "react";
import InvoiceHead from "../components/InvoiceHead";
import InvoiceEdit from "../components/Invoice-Edit";
import Customization from "../components/Customization";
import InvoicePrev from "../components/Invoice-Prev";

function Invoice() {
  return (
    <div className="w-full h-screen absolute  z-50 bg-black bg-opacity-60  flex flex-col items-center justify-center">
      <div className="w-[80%] rounded-3xl pb-[20px] bg-white h-[85vh] overflow-y-scroll ">
        <InvoiceHead />
        <div className="flex gap-[20px]">
          {/* <InvoiceEdit /> */}
          <InvoicePrev />
          <Customization />
        </div>
      </div>
    </div>
  );
}

export default Invoice;
