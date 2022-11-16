import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'

import { selectUser } from './features/userSlice'
import { auth, db } from './firebase'
import SidebarList from './SidebarList'

function Sidebar() {
  const user = useSelector(selectUser) 
  
  const [channels, setChannels] = useState([])

  useEffect(() => {
      return  onSnapshot(collection(db, "channels"), (snapshot) =>
      setChannels(snapshot.docs.map((doc) => ({ channel: doc.data(), id: doc.id })))

  );
  },  [])


  const handleClick =  () => {
    const channelName = prompt("Add your group name")
    if (channelName) {
       addDoc(collection(db, "channels"), {
        channelName: channelName,
      })
    }
  }

  const signOut = () => {
    auth.signOut()
  }

  return (
    <div className="flex flex-col h-screen bg-slate-400  border-r-2 p-2 mb-4">
        <div className="flex-1"  >
        <div className="shadow-lg p-1 items-center  font-extrabold">
            <h1 className="text-2xl text-red-500">Welcome <span className="text-lg text-pink-500">{user.displayName}</span></h1>
        </div>
        <div  className="flex p-1   items-center justify-between">  
           <h1 className="text-lg font-bold">Add Channels</h1>
           <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="   w-6 h-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg> 
        </div>
        <div  >
          {channels?.map(({id, channel}) => (
            <SidebarList
              key={id}
              id={id}
              channelName={channel.channelName}

            />
          ))}
       
        
       

        </div>
        
        
        </div>
        <div className=" flex items-center space-x-2 mb-5 font-serif">
            <img className="h-12 w-12 rounded-full"   src={user.photo} alt="img" /> 
            <h3>{user.displayName}</h3> 
            <span>{user.uid.substring(0,6)} </span>
        </div>
        <h1 onClick={signOut} className="text-center text-2xl" >Logout</h1>
        
        
    </div>
  )
}

export default Sidebar