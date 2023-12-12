import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>



function App() {
  return (
    <div className=" grid grid-cols-2 grid-rows-1 gap-10 ">
      <div className=" bg-gray-200 rounded-md h-32 flex items-center justify-center">
        จำนวนคนไข้ตัวเอง
      </div>
      <div className="font-montserrat bg-gray-200 rounded-md h-32 flex items-center justify-center">
        จำนวนคนไข้เร่งด่วน
      </div>
    </div>

  );
}

export default App;
