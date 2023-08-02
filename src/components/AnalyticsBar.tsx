import React from "react";
import AnalyticsChart from "./Analytics";

const AnalyticsBar = () => {
  const analyticsData = [
    10000, 4000, 12000, 34000, 30000, 35000, 1000, 18299, 45630, 38000, 40000,
    28000,
  ];
  return (
    <div className="shadow-md shadow-gray-300 p-10 mx-16 mt-10 rounded-lg bg-white flex flex-col justify-evenly h-[550px]">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl">Analytics</h1>
        <div className="flex gap-3 items-center">
          <div className="p-3 px-8 border border-[#2A63E2] min-w-[200px] rounded-2xl text-[#2A63E2] font-semibold text-lg cursor-pointer">
            <h1>Income</h1>
          </div>
          <div className="p-3 px-8 border border-[#2A63E2] min-w-[200px] rounded-2xl text-[#2A63E2] font-semibold text-lg cursor-pointer">
            <h1>Monthly</h1>
          </div>
        </div>
      </div>
      <AnalyticsChart data={analyticsData} />
    </div>
  );
};

export default AnalyticsBar;
