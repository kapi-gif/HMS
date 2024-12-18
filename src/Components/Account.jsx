import React from "react";
import { HiExternalLink } from "react-icons/hi";
import { CgMoreVertical } from "react-icons/cg";
import { RiApps2Fill } from "react-icons/ri";
import { TbHomeCheck, TbHomeMove, TbDeviceMobileCharging } from "react-icons/tb";
import { IoMdTimer } from "react-icons/io";
import { MdAccessAlarm } from "react-icons/md";
import { BiSolidTrafficCone } from "react-icons/bi";

const Room = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <nav className="h-screen w-[230px] bg-stone-800 text-white fixed top-0 left-0 p-4">
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

      {/* Main Content */}
      <div className="ml-[230px] w-full p-4">
        {/* Collection Section */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-full lg:w-[880px] bg-stone-800 p-4 rounded-md shadow-md flex flex-col md:flex-row items-start md:items-center">
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-2 mb-4">
                <h1 className="text-white text-xl">Collection</h1>
                <HiExternalLink className="text-xl text-white" />
              </div>

              <div
                className="w-40 h-40 rounded-full flex items-center justify-center mt-4"
                style={{
                  border: "1px solid transparent",
                  background:
                    "conic-gradient(#FF10F0 0% 33%,  #00FFFF 33% 66%, #FFFF00 66% 100%)",
                }}
              >
                <div className="w-20 h-20 rounded-full bg-stone-800 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">50%</span>
                </div>
              </div>
            </div>

            <div className="flex-1 mt-6 md:mt-0 md:ml-8">
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {/* Expected */}
                <div className="w-full md:w-[270px] bg-zinc-950 text-white p-4 flex justify-between items-center rounded-md shadow-md">
                  <span>
                    Expected
                    <span className="block mt-2">₹ 52,00,00</span>
                  </span>
                  <HiExternalLink className="text-2xl" />
                </div>
                {/* Remaining */}
                <div className="w-full md:w-[270px] bg-zinc-950 text-white p-4 flex justify-between items-center rounded-md shadow-md">
                  <span>
                    Remaining
                    <span className="block mt-2 text-yellow-500">₹ 15,60,00</span>
                  </span>
                  <HiExternalLink className="text-2xl text-yellow-500" />
                </div>
                {/* Collected */}
                <div className="w-full md:w-[270px] bg-zinc-950 text-white p-4 flex justify-between items-center rounded-md shadow-md">
                  <span>
                    Collected
                    <span className="block mt-2 text-cyan-400">₹ 26,00,00</span>
                  </span>
                  <HiExternalLink className="text-2xl text-cyan-400" />
                </div>
                {/* Overdue */}
                <div className="w-full md:w-[270px] bg-zinc-950 text-white p-4 flex justify-between items-center rounded-md shadow-md">
                  <span>
                    Overdue
                    <span className="block mt-2 text-pink-500">₹ 10,40,00</span>
                  </span>
                  <HiExternalLink className="text-2xl text-pink-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 w-full md:w-auto mt-[30px]">
            <button className="px-4 py-3 border-2 border-cyan-400 text-cyan-400 rounded-md shadow text-lg">
              Request Payment
            </button>
            <button className="px-4 py-3 border-2 border-red-500 text-red-500 rounded-md shadow text-lg">
              Make Payout
            </button>
          </div>
        </div>

      
      <div className="flex flex-wrap justify-center gap-6 mt-6 w-full ">
      {/* Credit Section Side-by-Side */}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        <div className="h-auto w-full md:w-[530px] bg-stone-800 p-4 rounded-lg shadow-lg">
          <h1 className="text-white font-bold text-lg mb-4  border-gray-600 pb-2 flex items-center">
            Credit
            <HiExternalLink className="ml-2 text-xl" />
          </h1>
          <div className="h-[400px] overflow-y-scroll no-scrollbar rounded-lg">
            {Array(15)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-zinc-950 text-gray-200 p-4 mb-2 rounded-md shadow-md flex justify-between items-center"
                >
                  <span>Ramakant Sharma</span>
                  <span className="font-bold text-cyan-500">₹ 1,56,000</span>
                  <CgMoreVertical />
                </div>
              ))}
          </div>
        </div>

        <div className="h-auto w-full md:w-[530px] bg-stone-800 p-4 rounded-lg shadow-lg">
          <h1 className="text-white font-bold text-lg mb-4  border-gray-600 pb-2 flex items-center">
            Debit
            <HiExternalLink className="ml-2 text-xl" />
          </h1>
          <div className="h-[400px] overflow-y-scroll no-scrollbar rounded-lg">
            {Array(15)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-zinc-950 text-gray-200 p-4 mb-2 rounded-md shadow-md flex justify-between items-center"
                >
                  <span>Ramakant Sharma</span>
                  <span className="font-bold text-red-500">₹ 1,56,000</span>
                  <CgMoreVertical />
                </div>
              ))}
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    
  );
};

export default Room;
