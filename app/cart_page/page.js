export default function Home() {
    return (
      <div className="bg-neutral-300 min-h-screen">
    

    {/* Search Bar */}

    
    {/* <div className="pl-1 pt-10">

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6 text-gray-700"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607Z"
      />
    </svg>

    </div> */}

      <div className="pl-15 pt-10">

        <input
          type="text"
          placeholder="Search"
          className="w-10 h-10 rounded-md w-80 bg-gray-400 text-black"
        />
        </div>

    {/* #Black line at the top fo the screen that seperates the screen  */}
      <div className="flex justify-center pt-10"> 
        
      <div className="h-1 w-1000 aspect-square bg-black">
      </div>

      </div>

      <div className="flex justify-center pt-15">
        
        
      <div className="w-[1800px] h-[700px] aspect-square rounded-2xl bg-gray-400 flex items-center justify-center">

        <h1 className="text-black">hello</h1>

      </div>
      </div>
      
      </div>
      
      
    )
  }
  