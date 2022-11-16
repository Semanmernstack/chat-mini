import React from 'react'

function BodyHeader() {
  return (
    <div className=" flex flex-col  p-4">
        
        <div className="shadow-md mb-10">
            <h1 >$youtube</h1>

        </div>
        <div className=" flex items-center ">
            <img className="h-12 w-12 rounded-full"   src="https://cdn.pixabay.com/photo/2022/10/17/15/55/meditate-7528123__340.jpg" alt="img" /> 
            <h3>Abejide oluwaseyi</h3> 
            <span>my id</span>
        </div>
        
        
    </div>
  )
}

export default BodyHeader