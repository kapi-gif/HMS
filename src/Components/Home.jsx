import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { RiApps2Fill } from "react-icons/ri";
import { TbHomeCheck, TbHomeMove, TbDeviceMobileCharging } from "react-icons/tb";
import { IoMdTimer } from "react-icons/io";
import { MdAccessAlarm } from "react-icons/md";
import { BiSolidTrafficCone } from "react-icons/bi";

import { FaLongArrowAltRight } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
    <div className="flex">
          {/* Sidebar */}
          <nav className="h-[600px] w-[230px] bg-stone-800 text-white fixed top-0 left-0 p-4">
            <ul className="space-y-4">
              <li className="flex items-center space-x-1">
                <RiApps2Fill />
                <span className="text-sm">Dashboard</span>
              </li>
              <li className="flex items-center space-x-2">
                <TbHomeCheck />
                <span className="text-sm">Credit</span>
              </li>
              <li className="flex items-center space-x-2">
                <TbHomeMove />
                <span className="text-sm">Debit</span>
              </li>
              <li className="flex items-center space-x-2">
                <IoMdTimer />
                <span className="text-sm">Vendors</span>
              </li>
              <li className="flex items-center space-x-2">
                <TbDeviceMobileCharging />
                <span className="text-sm">Orders</span>
              </li>
              <li className="flex items-center space-x-2">
                <BiSolidTrafficCone />
                <span className="text-sm">Expected</span>
              </li>
              <li className="flex items-center space-x-2">
                <MdAccessAlarm />
                <span className="text-sm">Overdue</span>
              </li>
            </ul>
          </nav>
          </div>


          {/* Expense Monitor Section */}
      <div className="h-auto sm:h-[250px] w-full sm:w-[900px] bg-stone-900 p-4 flex flex-col sm:flex-row justify-between items-center sm:items-start ml-[250px]">
        <div className="flex flex-col w-full sm:w-[650px] gap-4">
          <div className="flex flex-wrap gap-4 sm:gap-x-2">
            <div className="flex flex-col bg-stone-950 text-white p-2 rounded shadow-md h-[67px] w-full sm:w-[130px]">
              <button className="bg-transparent text-gray-400 px-2 text-sm text-left pl-2 text-ms">Total</button>
              <p className="mt-1 text-ms text-left pl-2">45,689</p>
            </div>

            <div className="flex flex-col bg-stone-950 text-white p-2 rounded shadow-md h-[67px] w-full sm:w-[130px]">
              <button className="bg-transparent text-gray-300 px-2 text-sm text-left pl-2 text-ms">Utilized</button>
              <p className="mt-1 text-ms text-left pl-2 text-teal-400 font-bold">24,569</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-x-2">
            <div className="flex flex-col bg-stone-950 text-white p-2 rounded shadow-md h-[67px] w-full sm:w-[130px]">
              <button className="bg-transparent text-gray-300 px-2 text-sm text-left pl-2 text-ms">Unutilized</button>
              <p className="mt-1 text-ms text-left pl-2 text-yellow-400 font-bold">21,120</p>
            </div>

            <div className="flex flex-col bg-stone-950 text-white p-2 rounded shadow-md h-[67px] w-full sm:w-[130px]">
              <button className="bg-transparent px-2 text-sm text-left pl-2 text-ms text-gray-300">Damaged</button>
              <p className="mt-1 text-ms text-left pl-2 text-pink-600 font-bold">569</p>
            </div>
          </div>

          <div className="flex justify-between items-center bg-stone-950 text-white p-2 rounded shadow-md h-[60px] w-full sm:w-[270px]">
            <p className="text-ms pl-2 w-[90%] truncate text-gray-300">Categories: 56</p>
            <button className="w-full sm:w-[40%] border border-white px-2 py-1 rounded text-ms hover:bg-white hover:text-slate-950">
              View All
            </button>
          </div>
        </div>

        <div className="bg-stone-950 text-white p-4 rounded shadow-md h-auto sm:h-[220px] w-full sm:w-[1000px] mt-4 sm:mt-0">
          <h6 className="font-bold mb-2 text-xl text-slate-300">Expense Monitor</h6>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8">
            <div>
              <p className="text-ms text-gray-400">Total Expense:</p>
              <p className="text-yellow-500 text-ms font-bold">₹5,24,45,685</p>
            </div>

            <div className="border border-gray-500 p-2 rounded w-full sm:w-[95%] -mt-[40px]">
              <p className="text-ms text-gray-400">Highest Expense:</p>
              <p className="text-ms">Beds</p>
              <p className="text-pink-600 text-ms font-bold">₹24,45,685</p>
            </div>

            <div>
              <p className="text-ms mt-4 sm:mt-0 text-gray-400">Unpaid Payments:</p>
              <p className="text-ms font-bold text-red-600">₹5,24,45,685</p>
            </div>

            <div className="border border-gray-500 p-2 rounded w-full sm:w-[95%] ">
              <p className="text-ms text-gray-400 ">Lowest Expense:</p>
              <p className="text-ms">Irons</p>
              <p className="text-emerald-500 text-ms font-bold">₹4,45,685</p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex w-[1200px] '>
      <div className="flex flex-col lg:flex-row gap-4 w-full justify-center items-start ml-[250px]">
        {/* Categories Section */}
        <div className="w-full lg:w-[580px] bg-stone-900 text-white mt-4 p-4 mx-auto lg:ml-0">
          <div className="flex items-center justify-between mb-4 text-xl">
            <p>
              Categories: <span className="text-yellow-400">56</span>
            </p>

            <button className="bg-blue-500 px-4 py-2 rounded text-white mt-2 lg:mt-0 flex justify-center items-center">
              +Add Category
            </button>
          </div>

          <div className="flex flex-wrap gap-4 justify-start lg:justify-between w-full">
            {Array(12)
              .fill(0)
              .map((_, index) => (
                <p
                  key={index}
                  className="bg-neutral-950 h-[60px] w-full sm:w-[120px] lg:w-[120px] pl-6 py-1 text-white rounded-md text-sm"
                >
                  Bed
                  <br />
                  <span className="font-bold flex items-center text-sm">
                    65
                    <FaLongArrowAltRight className="ml-10 text-xl" />
                  </span>
                </p>
              ))}
          </div>
        </div>

    
         {/* Orders Section */}
         <div className="h-[300px] w-full sm:w-[550px] lg:w-[550px] bg-stone-900 text-white p-2 space-y-4 mx-auto mt-[20px]">
         <h3 className="text-ms font-bold flex items-center">
          Orders
         <HiExternalLink className="ml-2 text-xl" />
          </h3>
          <div className="flex flex-col gap-[5px] p-2 rounded shadow max-h-[200px] overflow-y-auto no-scrollbar">
          {Array(20)
         .fill()
         .map((_, index) => (
         <div
          key={index}
          className="flex flex-col w-full text-xs p-2 rounded bg-stone-950"
        >
          <h5 className="text-[17px] text-slate-400">Bed</h5>
          <div className="flex justify-between items-center">
            <span className="text-[15px] w-[60%] sm:w-[70%] lg:w-[60%] truncate">
              Neelkamal double.... 245
            </span>
            <span className="text-xs font-medium text-slate-300 sm:w-[30%] lg:w-[30%] text-right">
              ₹4526
            </span>
            <button className="px-3 py-1 rounded text-cyan-500 border-2 border-cyan-500 ml-4 mt-2 sm:mt-0">
              Details
            </button>
          </div>
        </div>
      ))}
  </div>
</div>
 </div>
</div>
</>
  );
};

export default HomePage;
