import React from "react";

function Overview() {
  return (
    <div className="pr-[2%] pl-[2%] w-full flex mt-[30px] justify-between gap-[20px]">
      <div className="due flex bg-white p-[20px] rounded-2xl w-[50%] justify-between h-[130px] ">
        <div className="overdue p-[20px] flex justify-center flex-col gap-[10px]">
          <h2 className="text-[#085236a9] text-base font-lite leading-none tracking-tight text-[20px]">
            Overdue
          </h2>
          <h1
            style={{ fontSize: "40px" }}
            className="text-[#090852] text-base font-medium leading-none tracking-tight text-[40px]"
          >
            4455
            <strong className=" ml-[10px] text-base font-thin leading-none tracking-tight text-[24px]">
              AED
            </strong>{" "}
          </h1>
        </div>
        <div className="outstanding p-[20px] flex justify-center flex-col gap-[10px]">
          <h2 className="text-[#ff0000a9] text-base font-lite leading-none tracking-tight text-[20px]">
            Total outstanding
          </h2>
          <h1
            style={{ fontSize: "40px" }}
            className=" text-[40px] text-[#090852] text-base font-medium leading-none tracking-tight "
          >
            7727
            <strong className="text-base font-thin leading-none tracking-tight text-[24px]">
              AED
            </strong>{" "}
          </h1>
        </div>
      </div>

      {/* Paid Part */}
      <div className="due flex bg-white p-[20px] rounded-2xl w-[50%] justify-between h-[130px] ">
        <div className="overdue p-[20px] flex justify-center flex-col gap-[10px]">
          <h2 className="text-[#085236a9] text-base font-lite leading-none tracking-tight text-[20px]">
            Get paid
          </h2>
          <h1
            style={{ fontSize: "40px" }}
            className="text-[#090852] text-base font-medium leading-none tracking-tight text-[40px]"
          >
            1747.06
            <strong className=" ml-[10px] text-base font-thin leading-none tracking-tight text-[24px]">
              AED
            </strong>{" "}
          </h1>
        </div>
        <div className="outstanding p-[20px] flex justify-center flex-col gap-[10px]">
          <h2 className="text-[#ff0000a9] text-base font-lite leading-none tracking-tight text-[20px]">
            Uncollectible
          </h2>
          <h1
            style={{ fontSize: "40px" }}
            className="text-[#090852] text-base font-medium leading-none tracking-tight text-[40px]"
          >
            0.00
            <strong className="text-base font-thin leading-none tracking-tight text-[24px] ml-[10px]">
              AED
            </strong>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Overview;
