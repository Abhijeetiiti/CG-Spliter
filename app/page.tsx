import PieWithImage from "./components/PieWithImage";
import ExpenseForm from "./components/ExpenseItem";
import RecentExpenses from "./components/RecentExpense";
import RadialBarChartExample from "./components/RadialBarChartExample";
import GradientText from "./components/GradientText";
import AngleCircle from "./components/AngleCircle";
import React from "react";
import SettlementHistory from "./components/SettlementHistroy";
import StatsCards from "./components/StatsCard.tsx";
import GroupMemberCard from "./components/MemberCard";
import TedxFooter from "./components/TedxFooter";
export default function Home() {
  return (
    <>
  
    <nav className="w-full bg-black text-white px-6 py-4 flex items-center justify-between">
      
   
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-semibold pl-25"><GradientText
  colorse={["red", "orange", "yellow", "green", ]}
  className="custom-class"
>CG Splitter
</GradientText></h1>

        <ul className="hidden md:flex gap-6 text-sm font-medium pr-25">
          <li className="cursor-pointer hover:bg-gray-500 hover:px-4 py-2 rounded-full font-bold  ">Home</li>
          <li className="cursor-pointer hover:bg-gray-500 hover:px-4 py-2 rounded-full font-bold">Spliter</li>
          <li className="cursor-pointer hover:bg-gray-500 hover:px-4 py-2 rounded-full font-bold">Members</li>
          <li className="cursor-pointer hover:bg-gray-500 hover:px-4 py-2 rounded-full font-bold flex items-center gap-1">
            About
            <span className="text-xs">▾</span>
            
          </li>
          
        </ul>
      </div>

    
      <div className="flex items-center gap-5 text-sm font-medium pr-20">
        <div className="hidden md:flex font-bold items-center gap-1 cursor-pointer hover:bg-gray-500 hover:px-4 py-2 rounded-full">
          🌐 <span>EN</span>
        </div>
        <span className="cursor-pointer font-bold hover:bg-gray-500 hover:px-4 py-2 rounded-full">Help</span>
        <span className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-green-500 transition">Log in</span>

        <button className="bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-red-500 transition">
          Sign up
        </button>
       <div className="w-11 h-11 rounded-full overflow-hidden border">
  <img
    src="/avatars/Abhijeet.jpeg"alt="Profile"className="w-full h-full object-cover"/>
</div>
      </div>
    </nav>

<div className="px-10 mt-10">
  <h1 className="font-bold font-black text-5xl"> Namaste Abhijeet</h1>
  <p className="text-xl">Here is Today's Summary</p>
<StatsCards />
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
 <div className="bg-gray-200 p-4 rounded shadow w-md ml-20"> <RecentExpenses /></div>
  <div className="bg-blue-50 p-4 rounded shadow w-md ml-10"><ExpenseForm /></div>
<div className="bg-blue-50 p-4 rounded shadow w-md "> <SettlementHistory
  data={[
    {
      id: "1",
      from: { name: "Kedar", avatar: "/avatars/kedar.jpeg" },
      to: { name: "Abhijeet", avatar: "/avatars/Abhijeet.jpeg" },
      amount: 350,
      date: "14 Jan 2026",
      group: "College Trip",
      method: "UPI",
    },
    {
      id: "2",
      from: { name: "Abhishek", avatar: "/avatars/Abhishek.jpeg" },
      to: { name: "Mithlesh", avatar: "/avatars/Mithlesh.jpeg" },
      amount: 120,
      date: "10 Jan 2026",
      group: "Food Split",
      method: "Cash",
    },
      {
      id: "1",
      from: { name: "Abhi", avatar: "/avatars/Abhi.jpeg" },
      to: { name: "Veer", avatar: "/avatars/Veer.jpeg" },
      amount: 550,
      date: "14 Jan 2026",
      group: " Trip",
      method: "UPI",
    },
    {
      id: "2",
      from: { name: "Abhishek", avatar: "/avatars/Abhishek.jpeg" },
      to: { name: "Abhay", avatar: "/avatars/Abhay.jpg" },
      amount: 120,
      date: "10 Jan 2026",
      group: "Food Split",
      method: "Cash",
    },
  ]}
/></div>

 <div></div>
</div>
  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white p-4 rounded shadow">
      <PieWithImage />
    </div>
    <div className="bg-white p-4 rounded shadow">
      <RadialBarChartExample />
    </div>
    <div className="flex justify-center  bg-white p-4 rounded shadow">
      <AngleCircle percentage={72} />
    </div>
  </div>
   <h1 className="text-5xl text-center mt-10 font-bold">Group Member</h1>
  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
   <GroupMemberCard
  member={{
    id: "1",
    name: "Abhijeet",
    email: "abhijeet@example.com",
    avatar: "/avatars/abhijeet.jpeg",
    paid: 150,
    owed: 120,
    expenses: 5,
  }}
/>

<GroupMemberCard
  member={{
    id: "2",
    name: "Abhay",
    email: "abhay@example.com",
    avatar: "/avatars/abhay.jpg",
    paid: 200,
    owed: 250,
    expenses: 3,
  }}
/>

<GroupMemberCard
  member={{
    id: "3",
    name: "Kedar",
    email: "kedar@example.com",
    avatar: "/avatars/kedar.jpeg",
    paid: 100,
    owed: 100,
    expenses: 2,
  }}
/>

    
  </div>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
   <GroupMemberCard
  member={{
    id: "1",
    name: "Veer",
    email: "Veer@example.com",
    avatar: "/avatars/Veer.jpeg",
    paid: 550,
    owed: 600,
    expenses: 5,
  }}
/>

<GroupMemberCard
  member={{
    id: "2",
    name: "Abhishek",
    email: "Abhi@example.com",
    avatar: "/avatars/Abhishek.jpeg",
    paid: 200,
    owed: 450,
    expenses: 3,
  }}
/>

<GroupMemberCard
  member={{
    id: "3",
    name: "AbhijeetK",
    email: "Abhi@example.com",
    avatar: "/avatars/Abhi.jpeg",
    paid: 100,
    owed: 700,
    expenses: 2,
  }}
/>

    
  </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-15git remote add origin https://github.com/abhijeetiiti1-glitch/CG-Spliter.git
">
   <GroupMemberCard
  member={{
    id: "1",
    name: "Mithlesh",
    email: "Mithlesh@example.com",
    avatar: "/avatars/Mithlesh.jpeg",
    paid: 550,
    owed: 600,
    expenses: 5,
  }}
/>


<GroupMemberCard
  member={{
    id: "3",
    name: "Abhimanyu",
    email: "Abhimanyu@example.com",
    avatar: "/avatars/Abhimanyu.jpeg",
    paid: 100,
    owed: 700,
    expenses: 2,
  }}
/>

    
  </div>
      <TedxFooter />
    </>

  );
}
