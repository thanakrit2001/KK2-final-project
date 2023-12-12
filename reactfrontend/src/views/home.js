import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function App() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 gap-10 ">
      <div className="bg-gray-200 rounded-md h-32 flex items-center justify-center">
        จำนวนคนไข้ตัวเอง
      </div>
      <div className="bg-gray-200 rounded-md h-32 flex items-center justify-center">
        จำนวนคนไข้เร่งด่วน
      </div>
    </div>

  );
}

export default App;