export default function Home() {
    return (
      <div className="bg-neutral-300 min-h-screen">
    

  {/* Search Bar */}
<div className="flex items-center space-x-2 pt-10 pl-11">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-12 h-12 text-gray-700"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607Z"
    />
  </svg>

  <input
    type="text"
    placeholder="Search"
    className="w-80 h-10 rounded-md bg-neutral-400 text-black px-3 border-2 border-slate-800"
  />
</div>


    {/* #Black line at the top of the screen that seperates the screen (diveder) */}
      <div className="flex justify-center pt-10"> 
        
      <div className="h-1 w-1000 aspect-square bg-black">
      </div>

      </div>

    {/* for space in between the bow and the divider */}    
      <div className="flex justify-center pt-15 ">
        
     {/* The box in the center  */}       
      <div className="w-[1800px] h-[700px] p-6 rounded-2xl bg-neutral-400 flex gap-6 border-2 border-slate-800 ">
  {/* Left box */}
  <div className="w-[600px] h-full bg-neutral-300 rounded-2xl p-4 flex flex-col justify-between border-2 border-slate-800 ">
    
    {/* Image + Info */}
    <div className="flex gap-4">
      {/* Placeholder for Image */}
      <div className="w-[220px] h-[220px] bg-neutral-400 rounded" />
      
      {/* Item Details */}
      <div className="text-[28px] text-black  space-y-1">
        <p>Item Name:</p>
        <p>Cost:</p>
        <p>Stock:</p>
      </div>
    </div>

    {/* Description box */}
    <div className="h-[300px] bg-neutral-400 rounded flex items-center justify-center">
      <p className="text-center text-black ">Item Description</p>
    </div>
  </div>

  {/* Right box */}
  <div className="flex-1 bg-neutral-300 rounded-2xl flex items-center justify-center border-2 border-slate-800">
    <p className="text-center text-black">Item Location</p>
  </div>
</div>
      </div>
      
      </div>
      
      
    )
  }
  