import React from "react";
import "@/app/globals.css";
import MoneyBar from "./MoneyBar";
import AnalyticsBar from "./AnalyticsBar";
import Transactions from "./Transacations";

const data = [
  {
    image: "image1.jpg",
    title: "Adobe After Effects",
    date: "2023-08-01",
    amount: "$500",
    status: "Paid",
  },
  {
    image: "image2.jpg",
    title: "Photoshop",
    date: "2023-08-05",
    amount: "$300",
    status: "Pending",
  },
  {
    image: "image3.jpg",
    title: "Illustrator",
    date: "2023-08-10",
    amount: "$450",
    status: "Paid",
  },
  // Add more data items as needed
];

const RightSide = () => {
  return (
    <main className="flex w-full h-full">
      <div className="w-[320px] mr-10"></div>
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-between items-center border-b-2 border-gray-300 px-10 py-4 text-sm bg-white">
          <div>
            <h1 className="mx-4 font-bold text-lg">HOME</h1>
          </div>
          <div className="flex items-center">
            <div className="mx-5 flex gap-2">
              <p>Icon</p>
            </div>
            <div className="w-14 h-14 flex items-center justify-center bg-slate-600 rounded-full">
              Image
            </div>
            <div className="mx-2 flex gap-2">
              <h1>Emmanuel Appah</h1>
            </div>
          </div>
        </div>

        <MoneyBar />
        <AnalyticsBar />
        <Transactions data={data} />
      </div>
    </main>
  );
};

export default RightSide;
