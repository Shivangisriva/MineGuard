// // "use client";

// // import React, { useState } from "react";
// // import GevraMap from "@/components/Map";

// // const DetectPage = () => {
// //   const regionIds = [1, 2, 3, 4];

// //   // States for each parameter per region
// //   const [tempValues, setTempValues] = useState<{ [key: number]: number }>(
// //     regionIds.reduce((acc, id) => ({ ...acc, [id]: 40 }), {})
// //   );
// //   const [rainfallValues, setRainfallValues] = useState<{ [key: number]: number }>(
// //     regionIds.reduce((acc, id) => ({ ...acc, [id]: 0 }), {})
// //   );
// //   const [frostValues, setFrostValues] = useState<{ [key: number]: number }>(
// //     regionIds.reduce((acc, id) => ({ ...acc, [id]: 0 }), {})
// //   );

// //   const [selectedRegion, setSelectedRegion] = useState<number | null>(null);

// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       <div className="flex flex-1">
// //         {/* Left side: Map */}
// //         <div className="w-3/4 bg-gray-200">
// //           <GevraMap
// //             tempValues={tempValues}
// //             rainfallValues={rainfallValues}
// //             frostValues={frostValues}
// //             selectedRegion={selectedRegion}
// //             setSelectedRegion={setSelectedRegion} // pass setter
// //           />
// //         </div>

// //         {/* Right side: Sidebar */}
// //         <div className="w-1/4 bg-white p-4 border-l border-gray-300">
// //           <h3 className="text-xl font-semibold mb-4">Analytics & Controls</h3>

// //           {selectedRegion ? (
// //             <div>
// //               <h4 className="font-medium mb-2">Region {selectedRegion}</h4>

// //               <label className="block text-sm mb-1">Temperature</label>
// //               <input
// //                 type="range"
// //                 min={0}
// //                 max={100}
// //                 value={tempValues[selectedRegion]}
// //                 onChange={(e) =>
// //                   setTempValues({
// //                     ...tempValues,
// //                     [selectedRegion]: Number(e.target.value),
// //                   })
// //                 }
// //                 className="w-full mb-4"
// //               />

// //               <label className="block text-sm mb-1">Rainfall</label>
// //               <input
// //                 type="range"
// //                 min={0}
// //                 max={80}
// //                 value={rainfallValues[selectedRegion]}
// //                 onChange={(e) =>
// //                   setRainfallValues({
// //                     ...rainfallValues,
// //                     [selectedRegion]: Number(e.target.value),
// //                   })
// //                 }
// //                 className="w-full mb-4"
// //               />

// //               <label className="block text-sm mb-1">Frost</label>
// //               <input
// //                 type="range"
// //                 min={0}
// //                 max={5}
// //                 value={frostValues[selectedRegion]}
// //                 onChange={(e) =>
// //                   setFrostValues({
// //                     ...frostValues,
// //                     [selectedRegion]: Number(e.target.value),
// //                   })
// //                 }
// //                 className="w-full"
// //               />
// //             </div>
// //           ) : (
// //             <p className="text-gray-500">Click on a region to adjust its parameters.</p>
// //           )}
// //         </div>
// //       </div>

// //       {/* Footer */}
// //       <footer className="bg-black text-white py-4 text-center">
// //         © 2025 Your Company Name. All rights reserved.
// //       </footer>
// //     </div>
// //   );
// // };

// // export default DetectPage;
// "use client";

// import React, { useState } from "react";
// import GevraMap from "@/components/Map";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";

// const DetectPage = () => {
//   const regionIds = [1, 2, 3, 4];

//   // States for each parameter per region
//   const [tempValues, setTempValues] = useState<{ [key: number]: number }>(
//     regionIds.reduce((acc, id) => ({ ...acc, [id]: 40 }), {})
//   );
//   const [rainfallValues, setRainfallValues] = useState<{ [key: number]: number }>(
//     regionIds.reduce((acc, id) => ({ ...acc, [id]: 0 }), {})
//   );
//   const [frostValues, setFrostValues] = useState<{ [key: number]: number }>(
//     regionIds.reduce((acc, id) => ({ ...acc, [id]: 0 }), {})
//   );

//   const [selectedRegion, setSelectedRegion] = useState<number | null>(null);

//   // Prepare rainfall data for chart
//   const rainfallData = regionIds.map((id) => ({
//     region: `R${id}`,
//     rainfall: rainfallValues[id],
//   }));

//   return (
//    <div className="flex flex-col h-screen bg-black">
//   {/* Main content */}
//   <div className="flex flex-1">
//     {/* Left side: Map + Analytics Result */}
//     <div className="w-3/4 h-full flex flex-col">
//       {/* Map */}
//       <div className="flex-1 bg-gray-200">
//         <GevraMap
//           tempValues={tempValues}
//           rainfallValues={rainfallValues}
//           frostValues={frostValues}
//           selectedRegion={selectedRegion}
//           setSelectedRegion={setSelectedRegion}
//         />
//       </div>

//       {/* Analytics Result (only below the map) */}
//       <div className="bg-black text-white text-center py-4 text-lg font-semibold border-t border-gray-600">
//         {selectedRegion
//           ? rainfallValues[selectedRegion] > 40 || frostValues[selectedRegion] > 2.5 || tempValues[selectedRegion] > 60
//             ? "⚠️ Rockfall Predicted"
//             : "✅ No Rockfall Predicted"
//           : "Select a region to see prediction"}
//       </div>
//     </div>
//         {/* Right side: Sidebar */}
//         <div className="w-1/4 bg-white p-4 border-l border-gray-300">
//           <h3 className="text-xl font-semibold mb-4">Analytics & Controls</h3>

//           {selectedRegion ? (
//             <div>
//               <h4 className="font-medium mb-2">Region {selectedRegion}</h4>

//               <label className="block text-sm mb-1">Temperature</label>
//               <input
//                 type="range"
//                 min={0}
//                 max={100}
//                 value={tempValues[selectedRegion]}
//                 onChange={(e) =>
//                   setTempValues({
//                     ...tempValues,
//                     [selectedRegion]: Number(e.target.value),
//                   })
//                 }
//                 className="w-full mb-4"
//               />

//               <label className="block text-sm mb-1">Rainfall</label>
//               <input
//                 type="range"
//                 min={0}
//                 max={80}
//                 value={rainfallValues[selectedRegion]}
//                 onChange={(e) =>
//                   setRainfallValues({
//                     ...rainfallValues,
//                     [selectedRegion]: Number(e.target.value),
//                   })
//                 }
//                 className="w-full mb-4"
//               />

//               <label className="block text-sm mb-1">Frost</label>
//               <input
//                 type="range"
//                 min={0}
//                 max={5}
//                 value={frostValues[selectedRegion]}
//                 onChange={(e) =>
//                   setFrostValues({
//                     ...frostValues,
//                     [selectedRegion]: Number(e.target.value),
//                   })
//                 }
//                 className="w-full mb-6"
//               />

//               {/* Rainfall Line Chart */}
//               <div className="h-48">
//                 <ResponsiveContainer width="100%" height="100%">
//                   <LineChart data={rainfallData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="region" />
//                     <YAxis />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="rainfall" stroke="#2563eb" strokeWidth={2} />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           ) : (
//             <p className="text-gray-500">Click on a region to adjust its parameters.</p>
//           )}
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-black text-white py-4 text-center">
//         © 2025 Your Company Name. All rights reserved.
//       </footer>
//     </div>
//   );
// };

// export default DetectPage;
"use client";

import React, { useState } from "react";
import GevraMap from "@/components/Map";
import Image from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const DetectPage = () => {
  const regionIds = [1, 2, 3, 4];

  // States for each parameter per region
  const [tempValues, setTempValues] = useState<{ [key: number]: number }>(
    regionIds.reduce((acc, id) => ({ ...acc, [id]: 40 }), {})
  );
  const [rainfallValues, setRainfallValues] = useState<{
    [key: number]: number;
  }>(regionIds.reduce((acc, id) => ({ ...acc, [id]: 0 }), {}));
  const [frostValues, setFrostValues] = useState<{ [key: number]: number }>(
    regionIds.reduce((acc, id) => ({ ...acc, [id]: 0 }), {})
  );

  const [selectedRegion, setSelectedRegion] = useState<number | null>(null);

  // Prepare rainfall data for chart
  const rainfallData = regionIds.map((id) => ({
    region: `R${id}`,
    rainfall: rainfallValues[id],
  }));

  return (
    <div className="flex flex-col min-h-screen bg-[#000000] p-6 pb-0">

      <div>
      <Image 
        src="/logo.png" 
        alt="My Photo" 
        width={200} 
        height={100} 
        priority
      />
    </div>
      
      {/* Main content */}
      <div className="flex flex-1 flex-col md:flex-row gap-8">
        {/* Left side: Map + Analytics Result */}
        <div className="w-full md:w-3/4 h-full flex flex-col">
          {/* Map */}
          <div className="flex-1 bg-gray-200 min-h-[250px]">
            <GevraMap
              tempValues={tempValues}
              rainfallValues={rainfallValues}
              frostValues={frostValues}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
            />
          </div>

          {/* Analytics Result (below map) */}
          <div className="bg-black text-zinc-200 p-3 text-left  py-3 text-base md:text-xl font-semibold border-t border-gray-600">
            {selectedRegion
              ? rainfallValues[selectedRegion] > 40 ||
                frostValues[selectedRegion] > 2.5 ||
                tempValues[selectedRegion] > 60
                ? "Rockfall Predicted ⚠️"
                : "No Rockfall Predicted ✅ "
              : "Select a region to see prediction"}
          </div>
        </div>

        {/* Right side: Sidebar */}
        <div className="w-full md:w-1/4 bg-[#000000] rounded-md p-4 border-t md:border-t-0 md:border-l  flex flex-col gap-1">
          <h3 className="text-xl font-semibold mb-4 text-white">
            Analytics & Controls
          </h3>

          {selectedRegion ? (
            <div className="bg-[#110129] p-1 rounded-md flex flex-col gap-6">
              <div className="flex flex-col bg-white rounded-md p-4 shadow-[0_4px_10px_rgba(0,0,0,0.25)] gap-1">
                <h4 className="font-medium mb-2 text-zinc-700">
                  Region {selectedRegion}
                </h4>
                <div>
                  <label className="block text-sm mb-1 text-zinc-700">
                    Temperature :{" "}
                    <span className="font-semibold text-zinc-700">
                      {tempValues[selectedRegion]}°C
                    </span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={tempValues[selectedRegion]}
                    onChange={(e) =>
                      setTempValues({
                        ...tempValues,
                        [selectedRegion]: Number(e.target.value),
                      })
                    }
                    className="w-full mb-4 appearance-none h-2 rounded-lg
                          bg-gradient-to-r from-blue-500 via-green-500 to-red-500
                          [&::-webkit-slider-thumb]:appearance-none
                          [&::-webkit-slider-thumb]:w-4
                          [&::-webkit-slider-thumb]:h-4
                          [&::-webkit-slider-thumb]:rounded-full
                          [&::-webkit-slider-thumb]:bg-white
                          [&::-webkit-slider-thumb]:border
                          [&::-webkit-slider-thumb]:border-gray-400
                          [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 text-zinc-700">
                    Rainfall :{" "}
                    <span className="font-semibold text-zinc-700">
                      {rainfallValues[selectedRegion]} mm/hr
                    </span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={80}
                    value={rainfallValues[selectedRegion]}
                    onChange={(e) =>
                      setRainfallValues({
                        ...rainfallValues,
                        [selectedRegion]: Number(e.target.value),
                      })
                    }
                    className="w-full mb-4 appearance-none h-2 rounded-lg
                          bg-gradient-to-r from-blue-500 via-green-500 to-red-500
                          [&::-webkit-slider-thumb]:appearance-none
                          [&::-webkit-slider-thumb]:w-4
                          [&::-webkit-slider-thumb]:h-4
                          [&::-webkit-slider-thumb]:rounded-full
                          [&::-webkit-slider-thumb]:bg-white
                          [&::-webkit-slider-thumb]:border
                          [&::-webkit-slider-thumb]:border-gray-400
                          [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 text-zinc-700">
                    Frost :{" "}
                    <span className="font-semibold text-zinc-700">
                      {frostValues[selectedRegion]}
                    </span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={5}
                    value={frostValues[selectedRegion]}
                    onChange={(e) =>
                      setFrostValues({
                        ...frostValues,
                        [selectedRegion]: Number(e.target.value),
                      })
                    }
                    className="w-full mb-4 appearance-none h-2 rounded-lg
                          bg-gradient-to-r from-blue-500 via-green-500 to-red-500
                          [&::-webkit-slider-thumb]:appearance-none
                          [&::-webkit-slider-thumb]:w-4
                          [&::-webkit-slider-thumb]:h-4
                          [&::-webkit-slider-thumb]:rounded-full
                          [&::-webkit-slider-thumb]:bg-white
                          [&::-webkit-slider-thumb]:border
                          [&::-webkit-slider-thumb]:border-gray-400
                          [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                </div>
              </div>

              {/* Rainfall Line Chart */}
              <div className="h-56 rounded-md bg-white flex justify-center items-center pr-7 pt-4 pb-4 shadow-[0_4px_10px_rgba(225,225,225,0.)] ">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={rainfallData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="region" />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="rainfall"
                      stroke="#2563eb"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : (
            <p className="text-gray-500">
              Click on a region to adjust its parameters.
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 mt-6 text-white py-4 text-center text-sm md:text-base">
        © 2025 Ministry Of Mines
      </footer>
    </div>
  );
};

export default DetectPage;
