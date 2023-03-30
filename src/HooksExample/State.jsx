import React, { useState } from 'react'

const State = () => {
    const[name,setname]=useState('vasu')
    const[surename,setsurename]=useState('Alakuntla')
  return (
    <div className='text-center'>
     <h1>{name}</h1>
     <h1>{surename}</h1>
     <button onClick={()=>setname('Alakuntla')}>click Name</button>
     <button onClick={()=>setsurename('vasu')}>show surname</button>
    </div>
  )
}

export default State