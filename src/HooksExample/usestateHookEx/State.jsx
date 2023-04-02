import React, { useState } from 'react'

const State = () => {
    const[count,setcount]=useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>click</button>
    </div>
  )
}

export default State