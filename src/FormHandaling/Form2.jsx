import React, { useState } from 'react'

const Form2 = () => {
    const[formvalus,setformvalus]=useState({email:'',password:''})
    const  changHandler=(e)=>{
        setformvalus({...formvalus,[e.target.name]:e.target.value})
      }
  return (
    <div className='container mt-5'>
    <div className='row'>
     <div className='col col-md-5'>
     <form className='border p-5 '>
      <h1 className='text-info text-center md-5'>Login Form</h1>
      <div className='form-group'>
      <input type="text" className='form-control' placeholder='Email' name='email' value={formvalus.email} onChange={changHandler} />
        </div>
        <div className='form-group'>
        <input type="password" className='form-control' placeholder='password' name='password' value={formvalus.password} onChange={changHandler} />
        </div>
        <button className='btn btn-primary'>Submit</button>
     </form>
     </div>
    </div>

    </div>
  )
}

export default Form2
