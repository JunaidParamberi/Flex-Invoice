import React from "react";
import { IconButton } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "@mui/material/Checkbox";

function Table() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const body = [
    {
      invoN: 1001,
      invoDate: "10/11/2023",
      client: "Sabh Al Madina",
      paidStatus: true,
      amount: 2000,
    },
    {
      invoN: 1002,
      invoDate: "10/12/2023",
      client: "Sabh Al Madina",
      paidStatus: true,
      amount: 213400,
    },
    {
      invoN: 1002,
      invoDate: "10/01/2023",
      client: "Sabh Al Madina",
      paidStatus: false,
      amount: 213400,
    },
    {
      invoN: 1001,
      invoDate: "10/11/2023",
      client: "Sabh Al Madina",
      paidStatus: true,
      amount: 2000,
    },
    {
      invoN: 1002,
      invoDate: "10/12/2023",
      client: "Sabh Al Madina",
      paidStatus: true,
      amount: 213400,
    },
    {
      invoN: 1002,
      invoDate: "10/01/2023",
      client: "Sabh Al Madina",
      paidStatus: false,
      amount: 213400,
    },
    {
      invoN: 1001,
      invoDate: "10/11/2023",
      client: "Sabh Al Madina",
      paidStatus: true,
      amount: 2000,
    },
    {
      invoN: 1002,
      invoDate: "10/12/2023",
      client: "Sabh Al Madina",
      paidStatus: true,
      amount: 213400,
    },
    {
      invoN: 1002,
      invoDate: "10/01/2023",
      client:
        "3s Lighting Solution LLC, DIC, Dubai - United Arab Emirates, India, Kerala, Kochi 61616616161616166166161",
      paidStatus: false,
      amount: 32400,
    },
  ];

  const formatAmount = (amount) => {
    // Create a new Intl.NumberFormat instance with the desired options
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "AED", // Specify the currency
      minimumFractionDigits: 2, // Specify the minimum number of fraction digits
    });

    // Format the amount using the formatter
    return formatter.format(amount);
  };

  return (
    <div className=" flex flex-col gap-[20px]">
      {/* header */}
      <div className="head flex px-[10px] items-center min-h-[50px] border-b-[1px] border-b-[#0908524a] ">
        {/* <div className="text-left text-[#090852] font-semibold ">
          <Checkbox {...label} defaultChecked size="small" />
        </div> */}
        <div className="text-left text-[#090852] font-semibold w-[13%] ">
          {" "}
          Invoice#
        </div>
        <div className="text-left text-[#090852] font-semibold w-[20%] ">
          Invoice Date
        </div>
        <div className="text-left text-[#090852] font-semibold w-[30%]">
          Client
        </div>
        <div className="text-left text-[#090852] font-semibold w-[20%]">
          Status
        </div>
        <div className="text-left text-[#090852] font-semibold w-[20%]">
          Amount
        </div>
        <div className="text-left text-[#090852] font-normal text-[15px] ">
          <IconButton sx={{ width: "40px" }} aria-label="Example"></IconButton>
        </div>
      </div>

      {/* body */}
      <div className="table-body-container overflow-y-scroll max-h-[36vh] pb-[20px] ">
        {body.map((item, index) => (
          <div
            key={index}
            className=" border-b-[1px] body flex px-[10px]  min-h-[50px] gap-[10px] 
            items-center cursor-pointer hover:bg-slate-100  "
          >
            {/* <div className="   text-left text-blue-700 font-semibold text-[15px]] ">
              <Checkbox {...label} defaultChecked size="small" />
            </div> */}
            <div className="   text-left text-blue-700 font-semibold text-[15px] w-[13%] ">
              {item.invoN}
            </div>
            <div className="  text-left text-[#090852] font-normal text-[15px] w-[20%] ">
              {item.invoDate}
            </div>
            <div className=" pr-[20px] text-ellipsis text-left text-[#090852] font-normal text-[15px] w-[30%] overflow-hidden whitespace-nowrap">
              {item.client}
            </div>
            <div
              className={`text-left text-[#090852] font-normal text-[15px] w-[20%] ${
                item.paidStatus ? "text-emerald-700 " : "text-red-600"
              }`}
            >
              {item.paidStatus ? "Paid" : "Awaiting Payment"}
            </div>
            <div className="text-left text-[#090852] font-normal text-[15px] w-[20%]">
              {formatAmount(item.amount)}
            </div>
            <div className="text-left text-[#090852] font-normal text-[15px] ">
              <IconButton sx={{ width: "40px" }} aria-label="Example">
                <FontAwesomeIcon icon={faEllipsisV} />
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
