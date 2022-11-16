import React from 'react'
import BodyHeader from './BodyHeader'

function Body() {
  return (
    <div className="flex flex-col ">
        <div className="flex-1">
            <BodyHeader/>
        </div>
        <form>
            <input type="text" placeholder='type in your message' />
            <button>send</button>
        </form>
    </div>
  )
}

export default Body