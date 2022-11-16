import React from 'react'
import BodyHeader from './BodyHeader'

function Body() {
  return (
    <div className="flex flex-col ">
        <div>
            <BodyHeader/>
        </div>
        <div className=" flex items-center flex-1 ">
            <img className="h-12 w-12 rounded-full"   src="https://cdn.pixabay.com/photo/2022/10/17/15/55/meditate-7528123__340.jpg" alt="img" /> 
            <h3>Abejide oluwaseyi</h3> 
            <span>my id</span>
        </div>
        <form>
            <input type="text" placeholder='type in your message' />
            <button>send</button>
        </form>
    </div>
  )
}

export default Body