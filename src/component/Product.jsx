import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div><h2>Product name page </h2>
    <div className='d-flex flex-row'>
      <NavLink to="product1" className="p-2 m-2 " >Product1</NavLink>
      <NavLink to="product2"className="p-2 m-2">Product2</NavLink>
      <NavLink to="product3"className="p-2 m-2">Product3</NavLink>
    </div>
    
    <Outlet/>
    
    
    
    
    </div>
  )
}

export default Product