import React, { useState } from 'react'
import { useEffect } from 'react'

const Count = () => {
    const[count,setcount]=useState(0)
    useEffect(()=>{
     console.log('Alakuntla')
    },[count])
  return (
    <div>
     <h1>you are click {count} times</h1>
     <button onClick={()=>setcount(count+1)}>clickme</button>
    </div>
  )
}

export default Count