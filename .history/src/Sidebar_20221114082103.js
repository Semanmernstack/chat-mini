import React from 'react'
import Sidebarlist from './app/Sidebarlist'

function Sidebar() {
  return (
    <div className="flex flex-col h-screen bg-slate-400  border-r-2 p-2 mb-4">
        <div className="flex-1"  >
        <div className="shadow-lg p-1 text-xl font-extrabold">
            <h1>Abejide seyi</h1>
        </div>
        <div  className="flex p-1   items-center justify-between">  
           <h1 className="text-lg font-bold">Add Channels</h1>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg> 
        </div>
        <div  >
        <Sidebarlist/>
        <Sidebarlist/>
       

        </div>
        
        
        </div>
        <div className=" flex items-center space-x-2 mb-5 font-serif">
            <img className="h-12 w-12 rounded-full"   src="https://cdn.pixabay.com/photo/2022/10/17/15/55/meditate-7528123__340.jpg" alt="img" /> 
            <h3>Abejide oluwaseyi</h3> 
            <span>my id</span>
        </div>
        
        
    </div>
  )
}

export default Sidebar