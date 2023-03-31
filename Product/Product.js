import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
const Product = () => {
    const [product,setProduct]=useState({})
    const { id } = useParams();
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(response=>response.data)
    .then(data=>setProduct(data))
  },[])
  return (
    <div className='container-fluid'>
    <pre>{JSON.stringify(product)}</pre>
<div className='row'>
<div className='col col-md-6'>
<img src={product.image} width='300px' height='300px'/>
<h4>Name: {product.title}</h4>
<h4>Price: {product.price}</h4>

</div>
<div className='col col-md-6'>
<h4> {product.category}</h4>
<h4>{product.description}</h4>

</div>
</div>
    </div>
  )
}

export default Product