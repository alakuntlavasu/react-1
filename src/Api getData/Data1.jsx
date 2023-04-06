import React, { useEffect, useState } from 'react'

const Data1 = () => {
    const[count,setcount]=useState(0)
    const onclickHandler=()=>{
        setcount(count=>count+1)
        console.log('Button clicked')
    }
    useEffect(()=>{
      console.log(`Button clicks Count:${count}`)
    },[count])
    console.log('App rendered')
  return (
    <div>
        <button onClick={onclickHandler}>Button</button>
    </div>
  )
}

export default Data1