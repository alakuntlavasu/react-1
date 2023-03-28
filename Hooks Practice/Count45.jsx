import React, { useState } from 'react'

const Countqw = () => {
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

export default Countqw
// useState hook example