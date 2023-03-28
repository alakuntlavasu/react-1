import React,{useState,useEffect} from 'react'

const Validation = () => {
    const [formvalues,setFormvalues]=useState({email:'',password:''})
    const [formErrors,setFormErrors]=useState({})
    const [isSubmit,setIsSubmit]=useState(false)
    const changeHandler=(e)=>{
        setFormvalues({...formvalues,[e.target.name]:e.target.value})
    }
    const submitHandler=(e)=>{
e.preventDefault()
console.log(formvalues);
setFormErrors(validate(formvalues))
// setFormvalues({email:"",password:''})
setIsSubmit(true)
    }
//     useEffect(()=>{
// if(Object.keys(formErrors).length===0 && isSubmit){
//     console.log(formvalues);
// }
//     },[])
    const validate=(values)=>{
        const errors={}
        if(!values.email){
            errors.email='*This field is required'
        }
         if(!values.password){
             errors.password='*This field is required'
         }
        return errors
    }
  return (
    <div className='container mt-5 '>
<div className='row'>
<div className='col col-md-5'>
<form className='border p-5 border-danger' onSubmit={submitHandler}>
<h1 className='text-info text-center mb-3'>Login form</h1>
    <div className='form-group'>
<input type='text' className='form-control' placeholder='Enter Email'name='email' value={formvalues.email} onChange={changeHandler}/>
    </div>
    <p className='text-danger'>{formErrors.email}</p>
    <div className='form-group'>
<input type='text' className='form-control' placeholder='Enter Password'name='password' value={formvalues.password}onChange={changeHandler}/>
    </div>
    <p className='text-danger'>{formErrors.password}</p>

    <button className='btn btn-success'>Signin</button>
</form>
</div>
</div>
    </div>
  )
}

export default Validation