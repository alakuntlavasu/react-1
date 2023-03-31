import React, { useEffect, useState } from 'react'

const Mesage = () => {
    const[message,setmessage]=useState('Hi there,how are you')
    useEffect(()=>{
        console.log('trigger use effect hook')
        setTimeout(()=>{
            setmessage('i am fine thanks for asking Srikanth')
        },6000)
    },[])
  return (
    <div>
     <h1>{message}</h1>
    </div>
  )
}

export default Mesage