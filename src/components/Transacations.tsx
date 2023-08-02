import React from "react";

type TransactionItem = {
  image: string;
  title: string;
  date: string;
  amount: string;
  status: string;
};

interface TransactionsProps {
  data: TransactionItem[];
}

const Transactions: React.FC<TransactionsProps> = ({ data }) => {
  return (
    <div className="shadow-md shadow-gray-300 p-10 mx-16 mt-10 rounded-lg bg-white">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-bold text-xl">Transactions</h1>
        <div className="flex gap-3 items-center">
          <div className="p-3 px-8 border border-[#2A63E2] min-w-[200px] rounded-2xl text-[#2A63E2] font-semibold text-lg cursor-pointer">
            <h1>Search</h1>
          </div>
          <div className="p-3 px-8 border border-[#2A63E2] min-w-[200px] rounded-2xl text-[#2A63E2] font-semibold text-lg cursor-pointer">
            <h1>Date</h1>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-5 gap-4"> */}
      {data.map((item, index) => (
        <div key={index} className="border-b-2 border-gray-200">
          <div className="p-5 grid grid-cols-5 gap-4">
            <div className="p-2">{item.image}</div>
            <div className="p-2">{item.title}</div>
            <div className="p-2">{item.date}</div>
            <div className="p-2">{item.amount}</div>
            <div className="p-2">{item.status}</div>
          </div>
        </div>
      ))}

      <div>
        <button
          type="button"
          className="border border-[#A4B6F3] bg-[#F5F8FF] text-[#2A63E2] w-full mt-4 rounded-lg p-3"
        >
          See all
        </button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Transactions;
