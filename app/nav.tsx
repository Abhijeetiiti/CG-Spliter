export default function home() {
  return (
    <>
     <nav className="w-full bg-black text-white px-6 py-4 flex items-center justify-between">
      
   
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-semibold pl-25">CG Expense Spliter</h1>

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
      </div>
    </nav>
    </>
  );
}