import produce from 'immer';
import React from 'react'
import {useSelector,useDispatch} from 'react-redux';
import { remove } from '../Store/cartSlice';

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.cart);
  const handleRemove = (Id)=>{
      dispatch(remove(Id));
  }
  return (
    <div >
      <h3 className='mt-5'>Cart</h3>
      <div className='container'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
      {
          cartItems.map((items)=>(
           
              <div className='col-sm-6 col-md-4 col-lg-3'>

             
            <div class="card " >
            <img src={items.image} class="card-img-top" alt="..."></img>
            <h6 class="card-title">{items.title}</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Price : ${items.price}</li>
              <li class="list-group-item">Rating: {items.rating.rate}</li>
              <li class="list-group-item">Reviews: {items.rating.count}</li>
            </ul>
            <div class="card-body">
              <button className='btn btn-danger' onClick={()=> handleRemove(items.id)}>Remove from cart</button>
            </div>
          </div>
          </div>
           
          ))
      }
       </div>
            </div>
    </div>
  )
}
