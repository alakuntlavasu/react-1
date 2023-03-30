import React, { useEffect,useState } from 'react'
import axios from'axios'
import { Link } from 'react-router-dom'
const Products = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
axios.get('https://fakestoreapi.com/products')
.then(response=>response.data)
// .then(data=>console.log(data))
.then(data=>setProducts(data))
.catch(err=>console.log(err))
    },[])
  return (
    <div className='container mt-5'>
    <pre>{JSON.stringify(products)}</pre>
<div className="row justify-content-center">
    <div className="col-12">
    <div className='row justify-content-center'>

{
    products.map((product)=>{
        return(
       <div className='col col-md-3 mb-3'>
<div className="card text-center mb-3">
    <div className="card-header">
    <Link to={`/product/${product.id}`}>
    <img src={product.image} width='150px' height='150px'/>
</Link></div>
    <div className="card-body">
        <h4>{product.title}</h4>
    </div>
</div>
            </div>

        )
    })
}
</div>

       </div> 
</div>

    </div>
  )
}

export default Products