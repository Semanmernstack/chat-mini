import React from 'react'

function Sidebar() {
  return (
    <div className="flex flex-col flex-0.5 border-r-2 ">
        <div>
            <h1>abejide seyi</h1>
        </div>
        <div  className="flex items-center justify-between">  
           <h1>Add Channels</h1>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg> 
        </div>
    </div>
  )
}

export default Sidebar