import React from 'react';


function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      
      <div className="h-[700px] w-full sm:w-[580px] bg-zinc-800 mx-auto rounded-lg shadow-lg overflow-hidden flex flex-col">

        <div className="sticky top-0 bg-zinc-800 z-10">

          <div className="flex items-center justify-between w-full px-6 py-4 mt-[20px]">
            <h1 className="text-white text-[30px] font-semibold">Bed</h1>
            <button className="bg-cyan-500 text-white px-4 py-2 rounded">+Add</button>
          </div>

        
          <div className="flex items-center justify-start w-full px-6 py-2 gap-x-10 bg-zinc-800">
            <h1 className="text-white text-lg font-semibold">
              Total: <span className="text-cyan-400">65</span>
            </h1>
            <p className="text-white text-lg">
              Available: <span className="text-yellow-400">05</span>
            </p>
          </div>

        
	<div className="mt-4 bg-[#121111] py-5 px-3 mx-5 rounded-md mb-5">

        <div className="flex items-center justify-between ml-2 text-gray-400">
            <div className="flex gap-4 items-center ">
            <p className="text-[12px] text-white xl:text-[15px]">Utilized: 35</p>
            <p className="text-[12px] text-white xl:text-[15px]">Damaged: 25</p>
        </div>
            
        <div className="xl:w-[300px] mr-3 w-[150px] bg-gray-700 rounded-full h-2 ">
            <div className="bg-teal-400 h-2 rounded-full" style={{ width: "41%" }}>
			</div>
        </div>
        </div>
    </div>

          
          <div className="flex items-center justify-start w-full px-6">
            <button className="bg-stone-950 px-4 py-2 rounded-sm">
            <span className="text-white text-xs bg-zinc-700 px-4 py-1 rounded">General</span>
            </button>
            <button className="bg-stone-950 text-white px-4  text-xs py-3 rounded-sm">Distribution</button>

			
          </div>

        
          <div className="px-6 py-4 bg-zinc-800">
            <p className="text-gray-200 text-xs">Added on: 12 September 2023</p>
            <p className="text-gray-200 py-2 text-xs">Added by:  Satyanarayan prakash</p>
          </div>
        </div>

       
        <div
          className="overflow-y-auto h-full px-6   "
          style={{
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
          }}
        >
          {[...Array(8  )].map((_, index) => (
            <div
              key={index}
              className="xl:h-[230px] h-[300px] w-full bg-zinc-800 mx-auto rounded-lg shadow-lg border-[0.5px] border-neutral-700 mt-3 "
            >
              <div className="px-6 py-2">
                <p className="text-sm text-gray-500">Addition</p>
                <h1 className="text-gray-200 font-semibold text-sm">
                  Neelkamal Double Bunker Steel Bed 1022255
                </h1>

                
                <div className="space-x-2 w-full mt-1 flex flex-wrap justify-start">
                  <button className="bg-stone-950 text-sm px-4 py-2 rounded  mb-2 sm:mb-0">
                    <span className="text-gray-500">Qty:</span>{' '}
                    <span className="text-gray-500">125</span>
                  </button>
                  <button className="bg-stone-950 text-sm px-4 py-2 rounded  mb-2 sm:mb-0">
                    <span className="text-gray-500">Price/Unit:</span>{' '}
                    <span className="text-gray-300">₹1500</span>
                  </button>
                  <button className="bg-stone-950 text-sm px-4 py-2 rounded mb-2 sm:mb-0">
                    <span className="text-gray-500">Total:</span>{' '}
                    <span className="text-gray-300">₹1,87,500</span>
                  </button>
                </div>

               
                <div className="flex items-center justify-start mt-3 space-x-4">
                  <p className="text-sm text-red-600 font-bold  p-1 ">
                    Status: Unpaid/Undelivered
                  </p>
                  <p className="text-sm text-gray-200 border-[0.5px] border-gray-500 p-1">
                    Vendor: NS Furniture Private Limited
                  </p>
                </div>

               
                <p className=" text-yellow-400 mt-2 text-sm">
                  Ordered By - NS Murthy <span className="text-gray-200">12 September 2023</span>
                </p>

               
                <button className="bg-zinc-700 text-gray-300 px-4 py-2 rounded mt-3 text-sm">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;