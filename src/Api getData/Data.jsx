import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Data = () => {
  const[data,setdata]=useState([]);
    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then(response=>setdata(response.data))
    })
  return (
    <div className='text-center'>
    <img src="" alt="..." class="rounded-circle"></img>
    <pre>{JSON.stringify(Data)}</pre>
       <h1> API get the Data</h1>
       {
        data.map(item=><li key={item.id}>{item.name} {item.email}</li>)
       }
    </div>
  )
}

export default Data