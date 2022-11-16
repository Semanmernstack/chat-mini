import React from 'react'
import { useSelector } from 'react-redux'
import BodyHeader from './BodyHeader'
import { selectChannelId, selectChannelName } from './features/appSlice'
import { selectUser } from './features/userSlice'
import Message from './Message'

function Body() {
  const user = useSelector(selectUser)
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName)
  return (
    <div className="flex flex-col h-screen bg-slate-500  ">
        <div className="flex-1 ">
        <BodyHeader channelName={channelName}  />
        <div  >
            <Message/>
            <Message/>
            <Message/>
        </div>
        </div>
        <div className="mb-5">
        <form className=" flex p-2 space-x-2 ">
            <input className="flex-1 rounded-full w-[100%] outline-none p-3 border-none" type="text" placeholder='type in your message' />
            <button className="text-xl font-medium animate-pulse">send</button>
        </form>
        </div>
    </div>
  )
}

export default Body