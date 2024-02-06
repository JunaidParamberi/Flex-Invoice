import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import DateInput from "../ui/DateInput";

function InvoicePrevCustomerInfo() {
  const [date, setDate] = useState("");
  const [dueDate, setDueDate] = useState("");

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
    <div className="mt-[40px] ">
      {/* <div className="amount flex flex-col items-end">
        <p className="font-light text-[13px] text-gray-700">Amount Due (AED)</p>
        <h1 className="text-[30px] text-red-500 font-semibold">
          {formatAmount(1000)}
        </h1>
      </div> */}
      <div className="mt-[30px]">
        <div className="inputs flex mt-[10px] justify-between">
          <div className="flex flex-col gap-[10px] ">
            <div>
              <p className="font-semibold text-[14px] text-gray-700">Bill To</p>
              <input
                type="text"
                className="w-[235px] flex border-[1px] items-center text-[14px]
            px-[10px] py-[7px] justify-between rounded-[6px] border-[#949494] font-light outline-none "
                placeholder="Select or add a client"
              />
            </div>
            <textarea
              className="w-[235px] flex border-[1px] items-center text-[14px]
            px-[10px] py-[7px] justify-between rounded-[6px] 
            border-[#949494] font-light outline-none min-h-[60px] max-h-[60px] "
              placeholder="Address"
            ></textarea>
          </div>

          {/* dates */}
          <div className="dates flex flex-col gap-[10px]">
            <div className="date-picker">
              <p className="font-semibold text-[14px] text-gray-700">
                Issue date*
              </p>
              <DateInput
                style={{ width: "235px", fontSize: "14px" }}
                date={date}
                setDate={setDate}
              />
            </div>
            <div className="date-picker">
              <p className="font-semibold text-[14px] text-gray-700">
                Due date*
              </p>
              <DateInput
                style={{ width: "235px", fontSize: "14px" }}
                date={dueDate}
                setDate={setDueDate}
              />
            </div>
          </div>

          <div className="dates flex flex-col gap-[10px]">
            <div className="numbers">
              <p className="font-semibold text-[14px] text-gray-700">
                Invoice Number*
              </p>
              <input
                type="text"
                className="w-[235px] flex border-[1px] items-center text-[14px]
                px-[10px] py-[7px] justify-between rounded-[6px] border-[#949494] font-light outline-none"
                placeholder="00001"
              />
            </div>
            <div className="numbers">
              <p className="font-semibold text-[14px] text-gray-700">
                Purchase Order
              </p>
              <input
                type="text"
                className="w-[235px] flex border-[1px] items-center text-[14px]
                px-[10px] py-[7px] justify-between rounded-[6px] border-[#949494] font-light outline-none"
                placeholder="e.g 000034"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-[100%] h-[3px] mt-[30px]"></div>
    </div>
  );
}

export default InvoicePrevCustomerInfo;
