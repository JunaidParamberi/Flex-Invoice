import React, { useEffect, useState } from "react";
import plus from "../assets/plus.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../services/Firebase";

function CompanyProfile() {
  const selectStyle = {
    color: "#9CA3AF",
  };

  const [showAddress, setShowAddress] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const industryArr = [
    { value: "Agency or Sales House", text: "Agency or Sales House" },
    { value: "Agriculture", text: "Agriculture" },
    { value: "Art and Design", text: "Art and Design" },
    { value: "Automotive", text: "Automotive" },
    { value: "Construction", text: "Construction" },
    { value: "Consulting", text: "Consulting" },
    { value: "Consumer Packaged Goods", text: "Consumer Packaged Goods" },
    { value: "Education", text: "Education" },
    { value: "Engineering", text: "Engineering" },
    { value: "Entertainment", text: "Entertainment" },
    {
      value: "Food Services (Restaurants/Fast Food)",
      text: "Food Services (Restaurants/Fast Food)",
    },
    { value: "Gaming", text: "Gaming" },
    { value: "Government", text: "Government" },
    { value: "Health Care", text: "Health Care" },
    { value: "Interior Design", text: "Interior Design" },
    { value: "Internal", text: "Internal" },
    { value: "Legal", text: "Legal" },
    { value: "Manufacturing", text: "Manufacturing" },
    { value: "Marketing", text: "Marketing" },
    { value: "Mining and Logistics", text: "Mining and Logistics" },
    { value: "Non-Profit", text: "Non-Profit" },
    { value: "Publishing and Web Media", text: "Publishing and Web Media" },
    { value: "Real Estate", text: "Real Estate" },
    {
      value: "Retail (E-Commerce and Offline)",
      text: "Retail (E-Commerce and Offline)",
    },
    { value: "Services", text: "Services" },
    { value: "Travel/Hospitality", text: "Travel/Hospitality" },
    { value: "IT", text: "IT" },
    { value: "Softwear Development", text: "Softwear Development" },
  ];

  console.log(switchValue);
  return (
    <div className=" input-container bg-white w-1/2 rounded-tl-[70px] rounded-bl-[70px] flex justify-center items-start pt-[100px] pb-[100px]">
      <div className=" company-inputs w-[70%]">
        <h3 className="text-indigo-950 text-[25px] font-semibold tracking-wide mb-[20px]">
          Set up Your Company Profile
        </h3>

        <form className="flex flex-col gap-[20px] mt-[40px] " action="">
          <p className="font-normal text-[17px] opacity-[0.8] ml-[10px] ">
            Company Details
          </p>
          <input
            className="   border-b border-b-indigo-950 outline-none p-[10px] focus:outline-none  text-[#090852] "
            type="text"
            placeholder="Company Name"
            autoComplete="organization"
          />
          <select
            style={selectStyle}
            className="border-b border-b-indigo-950 outline-none p-[10px] text-[#090852]"
            id="country"
            autoComplete="country"
          >
            <option className="border-b border-b-indigo-950 outline-none p-[10px] text-grey">
              Select Your Industry
            </option>

            {industryArr.map((opt, index) => (
              <option key={index} value={opt.value}>
                {opt.text}
              </option>
            ))}
          </select>
          <div
            onClick={() => setShowAddress((prevState) => !prevState)}
            className={`flex cursor-pointer gap-[5px]  opacity-50${
              showAddress ? "opacity-1" : ""
            }`}
            style={{ userSelect: "none" }}
          >
            <img className="w-[18px]" src={plus} alt="" />
            <p>Add Company Address</p>
          </div>
          {showAddress && (
            <div className="flex flex-col gap-[20px]">
              <div className="w-full justify-between flex">
                <input
                  className=" w-[45%]   border-b border-b-indigo-950 outline-none p-[10px] focus:outline-none  text-[#090852] "
                  type="text"
                  placeholder="Country"
                  autoComplete="country"
                />
                <input
                  className="  w-[45%]   border-b border-b-indigo-950 outline-none p-[10px] focus:outline-none  text-[#090852] "
                  type="text"
                  placeholder="State/Union Territory"
                  autoComplete="city"
                />
              </div>
              <input
                className="   border-b border-b-indigo-950 outline-none p-[10px] focus:outline-none  text-[#090852] "
                type="text"
                placeholder="Street 1"
                autoComplete="street"
              />
              <input
                className="   border-b border-b-indigo-950 outline-none p-[10px] focus:outline-none  text-[#090852] "
                type="text"
                placeholder="Street 2"
                autoComplete="street"
              />

              <div className="w-full justify-between flex">
                <input
                  className=" w-[45%]   border-b border-b-indigo-950 outline-none p-[10px] focus:outline-none  text-[#090852] "
                  type="text"
                  placeholder="city"
                  autoComplete="city"
                />
                <input
                  className="  w-[45%]   border-b border-b-indigo-950 outline-none p-[10px] focus:outline-none  text-[#090852] "
                  type="text"
                  placeholder="Zip/Postal Code"
                  autoComplete="zip"
                />
              </div>
            </div>
          )}
          <p className="font-normal text-[17px] opacity-[0.8] ml-[10px] ">
            Regional Settings
          </p>

          <input
            className="   border-b border-b-indigo-950 outline-none p-[10px] focus:outline-none  text-[#090852] "
            type="text"
            placeholder="AED - UAE Dirham"
            autoComplete="street"
          />

          <div
            className={`flex cursor-pointer gap-[5px]  opacity-50 justify-between${
              showAddress ? "opacity-1" : ""
            }`}
            style={{ userSelect: "none" }}
          >
            <p>Is this business registered for VAT?</p>
            <FormControlLabel
              control={<Switch color="primary" />}
              label={switchValue ? "Yes" : "No"}
              labelPlacement="start"
              checked={switchValue}
              onChange={() => setSwitchValue((prevState) => !prevState)}
            />
          </div>

          {switchValue && (
            <input
              className="   border-b border-b-indigo-950 outline-none p-[10px] focus:outline-none  text-[#090852] "
              type="text"
              placeholder="VAT Number"
              autoComplete="vat"
            />
          )}

          <p className="font-normal text-[14px] text-red opacity-50">
            Note : You can update some of these preferences from Settings
            anytime.
          </p>

          <button className=" text-white bg-[#090852] p-[10px] rounded-[9px]">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

export default CompanyProfile;
