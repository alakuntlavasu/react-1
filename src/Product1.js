import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Product1 = () => {
    const[products,setProduct]=useState([])
   useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(response=>response.data)
    .then(data=>setProduct(data))
     .then(data=>console.log(data))
    // .catch(err=>console.log(err));
   },[])
  return (
    <div>
   <pre>{JSON.stringify(Product1)}</pre>
   <h1>{Product1}</h1>
    </div>
  )
}

export default Product1