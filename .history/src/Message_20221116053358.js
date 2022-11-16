import React from 'react'

function Message({ timestamp, user, message }) {
  return (
    <div className=" flex items-center mx-2 my-3  ">
            <img className="h-12 w-12 rounded-full"   src="https://cdn.pixabay.com/photo/2022/10/17/15/55/meditate-7528123__340.jpg" alt="img" /> 
            <h3 className="m-x-3 ml-5 font-serif flex items-center font-bold text-xl">abejide oluwaseyi<span className="text-xs ml-2">Timestamp</span>  </h3> 
            <h1>{user.displayName}</h1>
            
        </div>
  )
}

export default Message