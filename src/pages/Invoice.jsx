import React from "react";
import InvoiceHead from "../components/InvoiceHead";
import InvoiceEdit from "../components/Invoice-Edit";

function Invoice() {
  return (
    <div className="w-full h-screen absolute  z-50 bg-black bg-opacity-60 flex flex-col items-center justify-center">
      <div className="w-[80%] rounded-3xl bg-white h-[85vh] overflow-y-scroll ">
        <InvoiceHead />
        <InvoiceEdit />
      </div>
    </div>
  );
}

export default Invoice;
