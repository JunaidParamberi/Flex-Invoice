import React from "react";
import plus from "../assets/PlusWhite.svg";
import search from "../assets/Search-Icon.svg";

function InvoiceListHead() {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex justify-between items-center ">
        <div className="flex gap-[10px]">
          <h1 className=" cursor-pointer text-[20px] font-normal text-[#090852]">
            Invoices
          </h1>
          <h1 className=" cursor-pointer text-[20px] font-normal text-[#0908526c]">
            Drafts
          </h1>
        </div>
        <div
          className=" cursor-pointer flex rounded-[50px]  button bg-[#090852] text-white items-center 
        justify-center text-center p-[10px] px-[17px] text-base font-bold hover:bg-[#090852c2] transition- "
        >
          {" "}
          <img src={plus} alt="" />
          New Invoice
        </div>
      </div>
      <div className="list-pages-container mt-[10px] flex justify-between items-center">
        <div className="flex gap-[30px]">
          <h3 className=" cursor-pointer text-[#090852] font-semibold">
            All (40)
          </h3>
          <h3 className=" cursor-pointer text-[#090852b1] font-normal">
            Outstanding (5)
          </h3>
          <h3 className=" cursor-pointer text-[#090852b1] font-normal">
            Paid (33)
          </h3>
          <h3 className=" cursor-pointer text-[#090852b1] font-normal">
            Uncollectible(2)
          </h3>
        </div>
        <div className="search flex items-center mr-[10px]">
          <img src={search} alt="" />
          <input
            className="p-[10px] pt-[5px] pb-[5px] outline-none font-light"
            type="search"
            placeholder="Try invoice# or client name"
          />
        </div>
      </div>
    </div>
  );
}

export default InvoiceListHead;
