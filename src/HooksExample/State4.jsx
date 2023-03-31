import React, { useState } from 'react'

const State4 = () => {
    const[counter,setcounter]=useState(0)
    const incriment=()=>{
        setcounter(5)
    }
  return (
    <div className='text-center'>
        <button onClick={incriment}>incriment</button>
    </div>
  )
}

export default State4