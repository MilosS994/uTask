import React from "react";

const DashboardPage = () => {
  return (
    <div className="min-w-[100vw] min-h-[100vh] flex">
      <aside className="w-[15%] bg-red-400"></aside>
      <main className="flex-1 flex flex-col">
        <div className="top h-[20%] bg-blue-300"></div>
        <div className="bottom"></div>
      </main>
    </div>
  );
};

export default DashboardPage;
