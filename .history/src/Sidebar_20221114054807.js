import React from 'react'
import Sidebarlist from './app/Sidebarlist'

function Sidebar() {
  return (
    <div className="flex flex-col   border-r-2  ">
        <div className="shadow-lg p-1">
            <h1>abejide seyi</h1>
        </div>
        <div  className="flex border-blue-300 items-center justify-between">  
           <h1>Add Channels</h1>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg> 
        </div>
        <Sidebarlist/>
        <Sidebarlist/>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eius maiores dolorum molestiae dicta totam magnam fuga dolor explicabo reprehenderit corrupti velit minus quas placeat? Sed illum rerum consequuntur neque?</h1>
    </div>
  )
}

export default Sidebar