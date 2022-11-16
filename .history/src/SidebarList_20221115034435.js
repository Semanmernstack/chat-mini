import React from 'react'

function SidebarList({ id, channlName}) {
  return (
    <div className="flex items-center justify-between cursor-pointer border p-2">
        <h2 className="my-3 text-lg">
         $   <span>youtube</span>
        </h2>
    </div>
  )
}

export default SidebarList