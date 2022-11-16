import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from './features/appSlice'

function SidebarList({ id, channelName}) {
    const dispatch = useDispatch()
  return (
    <div onClick={() => dispatch(setChannelInfo(
        {channelId: id,
         channelName: channelName,       
        }
    ))} 
        className="flex items-center justify-between cursor-pointer border p-2">
        <h2 className="my-3 text-lg">
         $   <span>{channelName}</span>
        </h2>
    </div>
  )
}

export default SidebarList