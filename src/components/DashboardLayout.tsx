import React from "react";

const DashboardLayout = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`min-w-screen min-h-screen flex justify-between bg-[#E4E4E4] ${className}`}
    >
      {children}
    </div>
  );
};

export default DashboardLayout;
