import React, { useState } from 'react'

const Count2 = () => {
    const intialcount=0
    const[Count,setCount]=useState(intialcount)

    const incrimentFive=()=>{
        for(let i=0; i<5; i++){
         setCount(prevcount=>prevcount+1)
        }
    }
  return (
    <div>
        Count:{Count}
        <button onClick={incrimentFive}>Incriment 5</button>
    </div>
  )
}

export default Count2