

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
  const [inputt, setInputt] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (channelId) {
      onSnapshot(collection(db, "channels", channelId, "messages"), (snapshot) =>
        setMessages(snapshot.docs.map((doc) =>   doc.data() ))
        
    );
    }
    

}, [channelId]);



  const sendMessage = (e) => {
    e.preventDefault();
    addDoc(collection(db, "channels", channelId, "messages"), {
      message: inputt,
      user: user,
      timestamp: serverTimestamp()
    })
    setInputt("")
  }
  return (
    <div className="flex flex-col h-screen bg-slate-500 w-full  ">
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
            
            
        </div>
        </div>
        <div >
        <form className=" flex p-1 space-x-2 mb-1 lg:mb-2  ">
            <input value={inputt}
              onChange={(e) => setInputt(e.target.value)}

              className="flex-1 rounded-full outline-none mb-6  p-1 lg:3 border-none" type="text" placeholder='type in your message'
            />
            <button onClick={sendMessage} type="submit" className="lg:text-xl text-sm font-medium  animate-pulse">send</button>
        </form>
        </div>
    </div>
  )
}

export default Body