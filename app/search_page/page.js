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
    placeholder="Item Name"
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
      <div className="w-[1800px] h-[700px] p-6 items-start  rounded-2xl bg-neutral-400 flex gap-10 border-2 border-slate-800">

     {/* left side (Results of search side)   */}
        <div className="w-1/2 h-full bg-neutral-300 rounded-xl border-2 border-slate-800">
        
        <div className="text-black pl-5 pt-5">
            <h1>Results of Search</h1>

        </div>

     <div className=" w-[650px] h-[100px] bg-neutral-300 rounded-2xl p-4 mx-3 flex flex-col justify-between flex-1/2 border-2 border-slate-800 ">
        <div className="w-[50px] h-[50px]  bg-neutral-400 rounded" />
    
     </div>
    
  </div>
  
    {/* right side (Similar items)     */}
   <div className="w-1/2 h-full bg-neutral-300 rounded-xl border-2 border-slate-800">
   <div className="text-black pl-5 pt-5 ">
            <h1>Similar Products:</h1>

        </div>
    <div className="w-[650px] h-[100px] bg-neutral-300 rounded-2xl mx-3 flex items-center justify-center border-2 border-slate-800">

  </div>
  </div>


</div>
      </div>
      
      </div>
      
      
    )
  }
  