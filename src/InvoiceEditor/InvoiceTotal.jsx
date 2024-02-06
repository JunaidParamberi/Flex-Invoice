import React from "react";

function InvoiceTotal() {
  return (
    <div className="w-full mt-[50px] flex flex-col gap-[15px]">
      <div className="flex justify-end ">
        <p className=" w-[30%] text-[14px] font-light text-right flex justify-end  ">
          Sub Total
        </p>
        <p className="w-[30%] text-[14px] font-light text-right flex justify-end ">
          AED 0.00
        </p>
      </div>
      <div className="flex justify-end ">
        <p className=" w-[30%] text-[14px] font-light text-right flex justify-end ">
          VAT (5%)
        </p>
        <p className="w-[30%] text-[14px] font-light text-right flex justify-end">
          AED 0.00
        </p>
      </div>
      <div className="flex justify-end ">
        <p className=" w-[30%] text-[14px] font-light text-right flex justify-end ">
          Discount
        </p>
        <p className="w-[30%] text-[14px] font-light text-right flex justify-end">
          AED 0.00
        </p>
      </div>
      <div className="flex justify-end ">
        <p className=" w-[30%] text-[14px] font-medium text-right flex justify-end  ">
          Total
        </p>
        <p className="w-[30%] text-[14px] font-medium text-right flex justify-end">
          AED 0.00
        </p>
      </div>
      <div className="flex justify-end  ">
        <p className="  text-[14px] text-red-600 font-bold text-right flex justify-end   ">
          Amount Due (AED)
        </p>
        <p className="w-[30%]  text-red-600 text-[14px] font-bold text-right flex justify-end ">
          AED 1,000.00
        </p>
      </div>
    </div>
  );
}

export default InvoiceTotal;
