import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet"></link>



function App() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 h-5/6 w-4/5 mx-auto">
      <div className="h-28 w-52 bg-gray-200 rounded-md flex items-center justify-center">
        จำนวนคนไข้ตัวเอง
      </div>
      <div className="w-52 bg-gray-200 rounded-md flex items-center justify-center">
        จำนวนคนไข้เร่งด่วน
      </div>
    </div>

  );
}

export default App;
