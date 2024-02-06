import React from "react";

function InvoiceTextField() {
  return (
    <div className="mt-[20px]">
      <p className="text-[14px] font-light ">Note</p>
      <textarea
        className="w-full flex border-[1px] items-center 
            px-[10px] py-[7px] justify-between rounded-[6px] 
            border-[#949494] font-light outline-none h-[200px] max-h-[200px] "
        placeholder="Address"
      ></textarea>
    </div>
  );
}

export default InvoiceTextField;
