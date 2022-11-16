import React from 'react'
import BodyHeader from './BodyHeader'

function Body() {
  return (
    <div className="flex flex-col h-screen ">
        <div className="flex-1 mb-5">
        <BodyHeader/>
        <div className=" flex">
            <h1 className="">jj</h1>
        </div>
        </div>
        <div>
        <form className=" flex p-2">
            <input className="flex-1" type="text" placeholder='type in your message' />
            <button>send</button>
        </form>
        </div>
    </div>
  )
}

export default Body