import React from 'react'
import BodyHeader from './BodyHeader'

function Body() {
  return (
    <div className="flex flex-col h-screen  ">
        <div className="flex-1 ">
        <BodyHeader/>
        <div className=" flex items-center p-3 space-x-2   ">
            <img className="h-12 w-12 rounded-full"   src="https://cdn.pixabay.com/photo/2022/10/17/15/55/meditate-7528123__340.jpg" alt="img" /> 
            <h3>Abejide oluwaseyi</h3> 
            <span>my id</span>
        </div>
        </div>
        <div className="mb-5">
        <form className=" flex p-2 space-x-2">
            <input className="flex-1 w-[100%] outline-none p-3 border-none" type="text" placeholder='type in your message' />
            <button>send</button>
        </form>
        </div>
    </div>
  )
}

export default Body