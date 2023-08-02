import DashboardLayout from "@/components/DashboardLayout";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import React from "react";
import "@/app/globals.css";

const dashboard = () => {
  return (
    <main>
      <DashboardLayout className="flex">
        <LeftSide />
        <RightSide />
      </DashboardLayout>
    </main>
  );
};

export default dashboard;
