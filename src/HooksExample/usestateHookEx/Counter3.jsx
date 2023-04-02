import React, { useEffect, useState } from 'react'

const Counter3 = () => {
    const[count,setcount]=useState(0)
    useEffect(()=>{
        console.log('Alakuntla vasu')
    },[count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setcount(count+1)}>click</button>
    </div>
  )
}

export default Counter3