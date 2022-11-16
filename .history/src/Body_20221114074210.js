import React from 'react'
import BodyHeader from './BodyHeader'

function Body() {
  return (
    <div className="flex flex-col  ">
        <BodyHeader/>
        <div className="flex-1">hi</div>
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