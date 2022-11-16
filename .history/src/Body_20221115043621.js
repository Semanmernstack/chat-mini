import { input } from '@testing-library/user-event/dist/types/event'
import e from 'express'
import { addDoc, collection, onSnapshot, serverTimestamp } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BodyHeader from './BodyHeader'
import { selectChannelId, selectChannelName } from './features/appSlice'
import { selectUser } from './features/userSlice'
import { db } from './firebase'
import Message from './Message'

function Body() {
  const user = useSelector(selectUser)
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (channelId) {
      onSnapshot(collection(db, "channels", channelId, "messages"), (snapshot) =>
        setMessages(snapshot.docs.map((doc) =>   doc.data() ))
        
    );
    }
    

}, [channelId]);



  const sendMessage = () => {
    e.preventDefault();
    addDoc(collection(db, "channels", channelId, "messages"), {
      message: input,
      user: user,
      timestamp: serverTimestamp()
    })
    setInput("")
  }
  return (
    <div className="flex flex-col h-screen bg-slate-500  ">
        <div className="flex-1 ">
        <BodyHeader channelName={channelName}  />
        <div  >
          {messages?.map((message) => (
            <Message
              timestamp={message.timestamp}
              message={message.message}
              user={message.user}
            />
          ))}
            <Message/>
            <Message/>
            <Message/>
        </div>
        </div>
        <div className="mb-5">
        <form className=" flex p-2 space-x-2 ">
            <input value={input} 
            onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-full w-[100%] outline-none p-3 border-none" type="text" placeholder='type in your message'
            />
            <button onClick={sendMessage} type="submit" className="text-xl font-medium animate-pulse">send</button>
        </form>
        </div>
    </div>
  )
}

export default Body