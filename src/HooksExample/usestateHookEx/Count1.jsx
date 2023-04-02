import React, { useState } from 'react'
import { useEffect } from 'react'

const Count1 = () => {
    const[count,setcount]=useState(0)
    useEffect(()=>{
     console.log('Vasu')
    },[count])
  return (
    <div className='text-center text-info'>
    <h1> you are clicked {count} times</h1>
    <button className='btn-primary' onClick={()=>setcount(count+1)}>clickme</button>
    </div>
  )
}

export default Count1