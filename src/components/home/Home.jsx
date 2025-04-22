// // src/components/Dashboard.js
// import React from "react";

// const Home = () => {
//   return (
//     <div className="bg-[#f5f6fa] p-4 min-h-screen font-sans">
//       <div className="max-w-[1440px] mx-auto space-y-4">
//         {/* Top row cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
//           {/* SMS card */}
//           <div
//             className="bg-white rounded-xl shadow-md flex items-center p-4 space-x-4 relative"
//             style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 0.05)" }}
//           >
//             <div className="border-r-2 border-[#0077cc] pr-4 flex flex-col items-center justify-center space-y-2">
//               <i className="fas fa-mobile-alt text-[#0077cc] text-2xl"></i>
//             </div>
//             <div className="flex-1 grid grid-cols-3 text-center">
//               <div className="text-xs text-gray-500">0</div>
//               <div className="text-xs text-gray-400">(Total)</div>
//               <div />
//               <div className="text-xs text-gray-500">29</div>
//               <div className="text-xs text-gray-400">(Used)</div>
//               <div />
//               <div />
//               <div className="text-xs text-gray-400">(Available)</div>
//               <div />
//             </div>
//             <div className="absolute left-16 top-4 font-semibold text-sm select-none pointer-events-none">
//               SMS
//             </div>
//           </div>

//           {/* Teachers card */}
//           <div
//             className="bg-white rounded-xl shadow-md flex items-center p-4 space-x-4"
//             style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 0.05)" }}
//           >
//             <div className="border-r-2 border-[#0077cc] pr-4 flex items-center justify-center">
//               <i className="fas fa-chalkboard-teacher text-[#0077cc] text-2xl"></i>
//             </div>
//             <div className="flex-1 text-center">
//               <div className="font-semibold text-sm select-none">Teachers</div>
//               <div className="text-gray-500 text-xs mt-1">10</div>
//             </div>
//           </div>

//           {/* Students card */}
//           <div
//             className="bg-white rounded-xl shadow-md flex items-center p-4 space-x-4"
//             style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 0.05)" }}
//           >
//             <div className="border-r-2 border-[#0077cc] pr-4 flex items-center justify-center">
//               <i className="fas fa-user-friends text-[#0077cc] text-2xl"></i>
//             </div>
//             <div className="flex-1 text-center">
//               <div className="font-semibold text-sm select-none">Students</div>
//               <div className="text-gray-500 text-xs mt-1">115</div>
//             </div>
//           </div>

//           {/* April Fees card */}
//           <div
//             className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between"
//             style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 0.05)" }}
//           >
//             <div className="flex justify-between text-xs text-gray-700 mb-1">
//               <div>Collected</div>
//               <div>April Fees</div>
//               <div>Fees</div>
//             </div>
//             <div className="w-full h-4 bg-gray-200 rounded overflow-hidden relative mb-1">
//               <div
//                 className="absolute top-0 left-0 h-4 bg-[#1f7a4c]"
//                 style={{ width: "25%" }}
//               />
//               <div className="absolute top-0 left-2 text-white text-[10px] font-semibold leading-4">
//                 25%
//               </div>
//             </div>
//             <div className="flex justify-between text-xs text-gray-700">
//               <div>863811</div>
//               <div className="text-[#0077cc] cursor-pointer select-none">
//                 Online: 0
//               </div>
//               <div>3457407</div>
//             </div>
//           </div>

//           {/* Today's Collection card */}
//           <div
//             className="bg-white rounded-xl shadow-md flex items-center p-4 space-x-4 relative"
//             style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 0.05)" }}
//           >
//             <div className="border-r-2 border-[#0077cc] pr-4 flex items-center justify-center">
//               <i className="fas fa-calendar-day text-[#0077cc] text-2xl"></i>
//             </div>
//             <div className="flex-1 grid grid-cols-3 text-center">
//               <div className="text-xs text-gray-500">0</div>
//               <div className="text-xs text-gray-400">(Total)</div>
//               <div />
//               <div className="text-xs text-gray-500">0</div>
//               <div className="text-xs text-gray-400">(Online)</div>
//               <div />
//             </div>
//             <div className="absolute left-16 top-4 font-semibold text-sm select-none pointer-events-none">
//               Today's Collection
//             </div>
//           </div>
//         </div>

//         {/* Second row cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
//           {/*
//             You can similarly extract these into an array/map,
//             but here they’re written out for clarity.
//           */}

//           {/* Fees structure created */}
//           <div
//             className="bg-white rounded-xl shadow-md flex items-center p-4 space-x-4"
//             style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 0.05)" }}
//           >
//             <div className="border-r-2 border-[#0077cc] pr-4 flex items-center justify-center">
//               <i className="fas fa-coins text-[#0077cc] text-2xl"></i>
//             </div>
//             <div className="flex-1 text-center">
//               <div className="font-semibold text-sm select-none">
//                 Fees structure created
//               </div>
//               <div className="text-gray-400 text-xs mt-1 flex justify-center space-x-2">
//                 <span>102</span>
//                 <span>(2 RTE)</span>
//               </div>
//             </div>
//           </div>

//           {/* Fees structure not created */}
//           <div
//             className="bg-white rounded-xl shadow-md flex items-center p-4 space-x-4"
//             style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 0.05)" }}
//           >
//             <div className="border-r-2 border-[#0077cc] pr-4 flex items-center justify-center">
//               <i className="fas fa-coins text-[#0077cc] text-2xl"></i>
//             </div>
//             <div className="flex-1 text-center">
//               <div className="font-semibold text-sm select-none">
//                 Fees structure not created
//               </div>
//               <div className="text-gray-400 text-xs mt-1">13</div>
//             </div>
//           </div>

//           {/* Paid students */}
//           <div
//             className="bg-white rounded-xl shadow-md flex items-center p-4 space-x-4"
//             style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 0.05)" }}
//           >
//             <div className="border-r-2 border-[#0077cc] pr-4 flex items-center justify-center">
//               <i className="fas fa-money-bill-wave text-[#0077cc] text-2xl"></i>
//             </div>
//             <div className="flex-1 text-center">
//               <div className="font-semibold text-sm select-none">
//                 Paid students
//               </div>
//               <div className="text-gray-400 text-xs mt-1">38</div>
//             </div>
//           </div>

//           {/* Unpaid students */}
//           <div
//             className="bg-white rounded-xl shadow-md flex items-center p-4 space-x-4"
//             style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 0.05)" }}
//           >
//             <div className="border-r-2 border-[#0077cc] pr-4 flex items-center justify-center">
//               <i className="fas fa-sync-alt text-[#0077cc] text-2xl"></i>
//             </div>
//             <div className="flex-1 text-center">
//               <div className="font-semibold text-sm select-none">
//                 Unpaid students
//               </div>
//               <div className="text-gray-400 text-xs mt-1">64</div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {/* Overall Fees Report */}
//           <div
//             className="bg-white rounded-xl shadow-md p-4"
//             style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 0.05)" }}
//           >
//             <div className="border-b border-gray-300 pb-2 mb-2 font-semibold text-sm select-none">
//               Overall Fees Report
//             </div>
//             <div className="relative w-full max-w-[320px] mx-auto">
//               <img
//                 src="https://storage.googleapis.com/a1aa/image/41ed673d-5d2f-419a-fd4f-2f5fc6c98d09.jpg"
//                 alt="Overall fees pie chart"
//                 className="mx-auto"
//                 width={320}
//                 height={320}
//               />
//               <div className="text-[10px] text-center mt-2 space-x-2">
//                 {[
//                   ["#2a2a6a", "Total Fees"],
//                   ["#c9d24a", "Head Discount"],
//                   ["#0096ff", "Gross Total"],
//                   ["#3ee53e", "Total Received"],
//                   ["#4a7a2a", "Total Discount"],
//                   ["#ff3a3a", "Total Balance"],
//                 ].map(([color, label]) => (
//                   <span
//                     key={label}
//                     className="inline-flex items-center space-x-1"
//                   >
//                     <span
//                       className="w-3 h-3 rounded-full inline-block"
//                       style={{ backgroundColor: color }}
//                     />
//                     <span>{label}</span>
//                   </span>
//                 ))}
//               </div>
//             </div>
//             <div className="mt-4 text-sm font-semibold select-none">
//               <div>Dropped/Suspended Fees</div>
//               <div className="mt-1">
//                 Total: <span className="font-normal">53000</span>
//                 <span className="ml-4">Received: </span>
//                 <span className="font-normal">48500</span>
//               </div>
//             </div>
//             <div className="relative w-full max-w-[320px] mx-auto mt-4">
//               <img
//                 src="https://storage.googleapis.com/a1aa/image/451dc188-f669-4832-026c-eddb1c83b1b4.jpg"
//                 alt="Dropped/suspended fees pie chart"
//                 className="mx-auto"
//                 width={320}
//                 height={320}
//               />
//             </div>
//           </div>

//           {/* Session Fees (placeholder) */}
//           <div
//             className="bg-white rounded-xl shadow-md flex flex-col p-4"
//             style={{ boxShadow: "0 2px 8px rgb(0 0 0 / 0.05)" }}
//           >
//             <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
//               <div>
//                 <div className="font-semibold text-sm select-none">
//                   Session Fees
//                 </div>
//                 <div className="text-xs text-gray-600 select-none">
//                   Click on the bar to view detail.
//                 </div>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <select
//                   aria-label="Select session year"
//                   className="border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-[#0077cc]"
//                 >
//                   <option>2024 - 2025</option>
//                 </select>
//                 <button
//                   type="button"
//                   aria-label="Expand session fees chart"
//                   className="text-[#0077cc] hover:bg-gray-200 rounded p-1"
//                 >
//                   <i className="fas fa-expand-alt"></i>
//                 </button>
//               </div>
//             </div>
//             <div className="flex-1 min-h-[320px] bg-white border border-gray-200 rounded">
//               {/* TODO: insert your chart component here */}
//             </div>
//           </div>

//           {/* Spacer on md+ */}
//           <div className="hidden md:block" />
//         </div>
//       </div>

//       {/* Floating add button */}
//       <button
//         aria-label="Add new item"
//         className="fixed bottom-6 right-6 bg-[#0077ff] hover:bg-[#005fcc] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
//       >
//         <i className="fas fa-plus text-2xl"></i>
//       </button>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Home = () => {
  const [dashboardData, setDashboardData] = useState({
    smsUsage: { total: 1000, used: 250, available: 750 },
    teachersCount: 24,
    studentsCount: 345,
    feeStructure: { created: 102, notCreated: 13 },
    feeStatus: { paid: 38, due: 64 },
    monthlyFee: [
      { month: "Jan", amount: 45000 },
      { month: "Feb", amount: 52000 },
      { month: "Mar", amount: 48000 },
      { month: "Apr", amount: 60000 },
    ],
    dailyFee: { total: 120000, online: 45000 },
    feeReport: [
      { name: "Paid", value: 65 },
      { name: "Due", value: 35 },
    ],
    sessionFee: [
      { month: "Jan", fee: 40000 },
      { month: "Feb", fee: 45000 },
      { month: "Mar", fee: 48000 },
      { month: "Apr", fee: 52000 },
    ],
  });

  const Card = ({ children, title }) => (
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
      {title && <h3 className="font-semibold text-sm mb-2">{title}</h3>}
      {children}
    </div>
  );

  return (
    <div className="bg-[#f5f6fa] min-h-screen p-4">
      <div className="max-w-[1440px] mx-auto space-y-4">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {/* SMS Usage */}
          <Card title="SMS Usage">
            <div className="flex items-center gap-4">
              <i className="fas fa-mobile-alt text-[#0077cc] text-2xl"></i>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="text-xs text-gray-500">
                  {dashboardData.smsUsage.total}
                </div>
                <div className="text-xs text-gray-500">
                  {dashboardData.smsUsage.used}
                </div>
                <div className="text-xs text-gray-500">
                  {dashboardData.smsUsage.available}
                </div>
                <div className="text-xs text-gray-400">Total</div>
                <div className="text-xs text-gray-400">Used</div>
                <div className="text-xs text-gray-400">Available</div>
              </div>
            </div>
          </Card>

          {/* Teachers Count */}
          <Card title="Teachers">
            <div className="flex items-center gap-4">
              <i className="fas fa-chalkboard-teacher text-[#0077cc] text-2xl"></i>
              <div className="text-2xl font-bold">
                {dashboardData.teachersCount}
              </div>
            </div>
          </Card>

          {/* Students Count */}
          <Card title="Students">
            <div className="flex items-center gap-4">
              <i className="fas fa-user-friends text-[#0077cc] text-2xl"></i>
              <div className="text-2xl font-bold">
                {dashboardData.studentsCount}
              </div>
            </div>
          </Card>

          {/* Monthly Fee Collection */}
          <Card title="Monthly Fee Collection">
            <ResponsiveContainer width="100%" height={100}>
              <BarChart data={dashboardData.monthlyFee}>
                <Bar dataKey="amount" fill="#1f7a4c" />
                <XAxis dataKey="month" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Daily Fee Collection */}
          <Card title="Today's Collection">
            <div className="space-y-2">
              <div className="text-xl font-bold">
                ₹{dashboardData.dailyFee.total}
              </div>
              <div className="text-sm text-[#0077cc]">
                Online: ₹{dashboardData.dailyFee.online}
              </div>
            </div>
          </Card>
        </div>

        {/* Middle Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Fee Structure */}
          <Card title="Fee Structure Created">
            <div className="flex items-center gap-4">
              <i className="fas fa-coins text-[#0077cc] text-2xl"></i>
              <div className="text-2xl font-bold">
                {dashboardData.feeStructure.created}
              </div>
            </div>
          </Card>

          <Card title="Fee Structure Not Created">
            <div className="flex items-center gap-4">
              <i className="fas fa-coins text-[#0077cc] text-2xl"></i>
              <div className="text-2xl font-bold">
                {dashboardData.feeStructure.notCreated}
              </div>
            </div>
          </Card>

          <Card title="Paid Students">
            <div className="flex items-center gap-4">
              <i className="fas fa-check-circle text-[#0077cc] text-2xl"></i>
              <div className="text-2xl font-bold">
                {dashboardData.feeStatus.paid}
              </div>
            </div>
          </Card>

          <Card title="Due Students">
            <div className="flex items-center gap-4">
              <i className="fas fa-exclamation-triangle text-[#0077cc] text-2xl"></i>
              <div className="text-2xl font-bold">
                {dashboardData.feeStatus.due}
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Fee Report Pie Chart */}
          <Card title="Fee Report">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dashboardData.feeReport}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#0077cc"
                  label
                />
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>

          {/* Session Fee Graph */}
          <Card title="Session Fee Progress">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dashboardData.sessionFee}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="fee"
                  stroke="#0077cc"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 bg-[#0077ff] hover:bg-[#005fcc] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
        <i className="fas fa-plus text-2xl"></i>
      </button>
    </div>
  );
};

export default Home;
