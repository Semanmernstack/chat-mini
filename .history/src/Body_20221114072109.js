import React from 'react'
import BodyHeader from './BodyHeader'

function Body() {
  return (
    <div className="flex flex-col  ">
        <div className="  flex-1">
        <div>
            <BodyHeader/>
        </div>
        <div className=" flex items-center  ">
            <img className="h-12 w-12 rounded-full"   src="https://cdn.pixabay.com/photo/2022/10/17/15/55/meditate-7528123__340.jpg" alt="img" /> 
            <h3>Abejide oluwaseyi</h3> 
            <span>my id</span>
        </div>
        </div>
        <form className="flex-1 flex p-2">
            <input className="flex-1" type="text" placeholder='type in your message' />
            <button>send</button>
        </form>
    </div>
  )
}

export default Body