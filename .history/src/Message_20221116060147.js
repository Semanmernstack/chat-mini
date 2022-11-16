import React from 'react'

function Message({ timestamp, user, message }) {
  return (
    <div className=" flex items-center mx-2 my-3 border  p-3 rounded-tr-full  ">
      <img className="h-12 w-12 rounded-full"   src={user?.photo} alt="img" /> 
      <div className="flex flex-col ">      
      <h3 className="m-x-3 ml-5  font-serif flex items-center font-bold text-xl">{user?.displayName}<span className="text-xs ml-2">{new Date(timestamp?.toDate()).toUTCString()}</span>  </h3> 
      <h1 className="ml-5 font-serif">{message}</h1>
      </div>
             
            
    </div>
  )
}

export default Message