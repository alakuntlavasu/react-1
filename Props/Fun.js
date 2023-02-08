import React from 'react'
import Class from './Class'

const Fun = () => {
    let name='vasu'
    let loc='bangalore'  
  return (
    <div>
    <h1>function component</h1>
        <Class name={name} loc={loc}/>
    </div>
  )
}

export default Fun