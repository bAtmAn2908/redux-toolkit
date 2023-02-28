import React from 'react'
import { Products } from '../Components/Products'

export const Home = () => {
  return (
    <div className='mt-5'>
        <h2>Welcome to the store</h2>
           <h4>Products</h4>
            <Products/>
    </div>
  )
}
