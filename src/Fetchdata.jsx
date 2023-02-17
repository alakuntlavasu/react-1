import React,{useEffect, useState} from 'react'
import axios from'axios'
const Fetchdata = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.data)
        //.then(data=>console.log(data))
        .then(data=>setUsers(data))
    },[])
  return (
    <div>
<pre>{JSON.stringify(users)}</pre>
<table  className='table table-hover'>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
        </tr>
    </thead>
    <tbody>
    {
    users.map((user)=>{
        return(
<tr>
  <td>{user.id}</td>  
  <td>{user.name}</td>
  <td>{user.email}</td>
  <td>{user.address.city}</td>
  <td>{user.phone.substring(0,7)}</td>
</tr>
        )
    })
}
    </tbody>
</table>

    </div>
  )
}

export default Fetchdata
