import React, { useEffect } from 'react'

const Digital1 = () => {
    const[ct,setct]=React.useState(new Date().toLocaleTimeString())
    useEffect(()=>{
        setInterval(()=>{
            setct((new Date().toLocaleTimeString()))
        })
    },[])
  return (
    <div>
    Digital1 DigitalClock
    <h1>{ct}</h1>
    <pre>{JSON.stringify(ct)}</pre>
    </div>
  )
}

export default Digital1