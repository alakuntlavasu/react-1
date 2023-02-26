import React, { useState } from 'react'

const Count1 = () => {
    const intialcount=0
    const[Count,setCount]=useState(intialcount)
  return (
    <div>
    Count:{Count} <br/>
    <button onClick={()=> setCount(intialcount)}>Reset</button> 
    <button onClick={()=>setCount(Count+1)}>Incriment</button>
    <button onClick={()=>setCount(Count-1)}>Decriment</button>

    </div>
  )
}

export default Count1