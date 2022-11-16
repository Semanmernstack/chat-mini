import React from 'react'

function Message({ timestamp, user, message }) {
  return (
    <div className=" flex items-center mx-2 my-3 border    p-1 lg:p-3  rounded-b-xl w-70 lg:w-full  ">
      <img className="h-6 w-6 rounded-full"   src={user?.photo} alt="img" /> 
      <div className="flex flex-col ">      
      <h3 className="m-x-3 ml-5  font-serif flex items-center font-bold text-sm lg:xl">{user?.displayName}<span className="text-xs ml-2">{new Date(timestamp?.toDate()).toUTCString()}</span>  </h3> 
      <h1 className="ml-5 font-serif">{message}</h1>
      </div>
             
            
    </div>
  )
}

export default Message