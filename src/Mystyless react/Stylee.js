import React from 'react'
import './Stylee1.css'
function Stylee(props) {
     let className=props.primary?'primary':''
  return (
    <div>
        <h1 className={`${className} font-xl`}>AlaKuntla Vasu</h1>
    </div>
  )
}

export default Stylee
