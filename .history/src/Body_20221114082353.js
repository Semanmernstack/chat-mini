import React from 'react'
import BodyHeader from './BodyHeader'
import Message from './Message'

function Body() {
  return (
    <div className="flex flex-col h-screen bg-slate-600  ">
        <div className="flex-1 ">
        <BodyHeader/>
        <div  >
            <Message/>
            <Message/>
            <Message/>
        </div>
        </div>
        <div className="mb-5">
        <form className=" flex p-2 space-x-2 ">
            <input className="flex-1 w-[100%] outline-none p-3 border-none" type="text" placeholder='type in your message' />
            <button>send</button>
        </form>
        </div>
    </div>
  )
}

export default Body