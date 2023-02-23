import React,{useState} from 'react'
import axios from'axios'
const Temparature = () => {
    const [search,setSearch]=useState('')
    const [result,setResult]=useState()
    const changeHandler=(e)=>{
setSearch(e.target.value);
    }
    const searchHandler=(e)=>{
        e.preventDefault()
        console.log(search);
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d885aa1d783fd13a55050afeef620fcb`)
.then(response=>response.data)
// .then(data=>console.log(data))
.then(data=>setResult("Temperature at "+data.name+" is "+Math.round(data.main.temp-273.5)+' degrees'))
    }
  return (
    <>
    <div className='container mt-5'>
<div className='row'>
<div className="col">
    <form className='text-center '>
        <input type='search' placeholder='search...' className='form-control-lg' value={search} onChange={changeHandler}/>
        <button className='btn btn-success ml-3' onClick={searchHandler}>Search</button>
    </form><br/>
    <h1 className='text-danger  text-center'>{result}</h1>
</div>
</div>
    </div>
    </>
  )
}

export default Temparature
  

