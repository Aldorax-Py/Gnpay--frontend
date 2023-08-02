import React from "react";

const MoneyBar = () => {
  return (
    <div className="shadow-md shadow-gray-300 p-10 mx-16 mt-10 rounded-lg bg-white flex flex-col justify-between">
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="font-bold">Total Balance</h1>
          <div className="flex gap-3 mt-2">
            <p className="text-3xl font-semibold">
              <span className="line-through">N</span>{" "}
            </p>
            <p className="text-5xl font-bold">0.00</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="p-4 px-8 border border-[#2A63E2] rounded-2xl text-[#2A63E2] font-semibold text-lg cursor-pointer">
            <h1>Withdraw</h1>
          </div>
          <div className="p-4 px-8 border border-[#2A63E2] rounded-2xl bg-[#2A63E2] font-semibold text-lg text-white cursor-pointer">
            <h1>Add Money</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div>
          <div className="py-1 w-[340px] bg-[#37FFF3] my-2"></div>
          <h1>Transactions</h1>
          <p className="font-semibold text-lg">23</p>
        </div>
        <div>
          <div className="py-1 w-[340px] bg-[#77FF37] my-2"></div>
          <h1>Total Expenses</h1>
          <p className="font-semibold text-lg">N5,178</p>
        </div>
        <div>
          <div className="py-1 w-[340px] bg-[#FFB660] my-2"></div>
          <h1>Total Expenses</h1>
          <p className="font-semibold text-lg">N5,178</p>
        </div>
        <div>
          <div className="py-1 w-[340px] bg-[#373FFF] my-2"></div>
          <h1>Total Savings</h1>
          <p className="font-semibold text-lg">N5,178</p>
        </div>
      </div>
    </div>
  );
};

export default MoneyBar;
