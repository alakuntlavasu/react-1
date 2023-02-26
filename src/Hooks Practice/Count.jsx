import React, { useState } from 'react'

const Count = () => {
    const[Count,setCount]=useState(0)
    const incriment=()=>{
        setCount(Count+1)
    }
  return (
    <div>
        <p>Count:{Count}</p>
        <button onClick={incriment}>Incriment</button>
    </div>
  )
}

export default Count