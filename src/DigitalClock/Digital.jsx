import React, { useEffect, useState } from 'react'

const Digital = () => {
    const[ct,setct]=useState(new Date().toLocaleTimeString())
    useEffect(()=>{
        setInterval(()=>{
               setct(new Date().toLocaleTimeString())
        },[1000])
    },[])
  return (
    <div className='text-center'>
       <h1> Digital Clock With Functional Component</h1>
       <h2>{ct}</h2>
    </div>
  )
}

export default Digital