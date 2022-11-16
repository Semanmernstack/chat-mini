import React from 'react'

function Message({ timestamp, user, message }) {
  return (
    <div className=" flex items-center mx-2 my-3 border    p-1 lg:p-3  rounded-b-xl w-70 lg:w-full  ">
      <img className="h-7 w-7 lg:w-12 lg:h-12 rounded-full"   src={user?.photo} alt="img" /> 
      <div className="flex flex-col ">      
      <h3 className=" ml-3  font-serif flex items-center font-bold text-xs lg:xl">{user?.displayName}<span className="text-xs ml-2">{new Date(timestamp?.toDate()).toUTCString()}</span>  </h3> 
      <h1 className="ml-3 font-serif">{message}</h1>
      </div>
             
            
    </div>
  )
}

export default Message