import React from 'react'

function List1() {
    const names=['vasu','varun','naveen']
  return (
    <div>
      {
        names.map(Name=><h2>{Name}</h2>)
      }
    </div>
  )
}

export default List1