import React, { useState } from 'react'

const User = () => {
    const[userDetails,setuserDetails]=useState({
        name:'vasu',
        age:23,
        location:'madanapalle'
    })
  return (
    <div>
    <h1>{userDetails.name}</h1>
    
    <button onClick={()=>setuserDetails('bangalore')}>click me</button>
    </div>
  )
}

export default User