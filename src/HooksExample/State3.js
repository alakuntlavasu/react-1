import React, { useState } from 'react'

const State3 = () => {
    const[count,setcount]=useState(0)
  return (
    <div className='text-center'>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>click</button>
    </div>
  )
}

export default State3