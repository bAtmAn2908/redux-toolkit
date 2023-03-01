import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { add, remove } from '../Store/cartSlice';
import { useDispatch,useSelector } from 'react-redux';
import { fetchProducts } from '../Store/productSlice';
import { STATUSES } from '../Store/productSlice';
import './Products.css';

export const Products = () => {

  const dispatch = useDispatch();
  const {data: prods , status} = useSelector((state) => state.product)
  useEffect(() => {
     dispatch(fetchProducts()); 

  //== getAlldata();
   
  }, [])
  

  // const [prods, setprods] = useState([])

  // const getAlldata = async()=>{

  //    await axios.get('https://fakestoreapi.com/products').then(res=>{
  //     setprods(res.data)
  //     console.log(res.data)
      
  //   })
  // }

  const handleAdd = (items)=>{
        dispatch(add(items));
  } 
  const handleRemove = (id)=>{
    dispatch(remove(id));
  }

  if (status === STATUSES.LOADING){
    return <h1>Loader</h1>
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
}

  return (
    <div>
       <div className='container'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
      {
          prods.map((items)=>(
           
              <div className='col-sm-6 col-md-4 col-lg-3'>

             
            <div class="card h-100" key={items.id} >
            <img src={items.image} class="card-img-top" alt="..." style={{maxHeight:350}}></img>
            <div class="card-body">
    <h5 class="card-title">{items.title}</h5>
  </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Price : ${items.price}</li>
              <li class="list-group-item">Rating: {items.rating.rate}*</li>
              <li class="list-group-item">Reviews: {items.rating.count}</li>
            </ul>
            <div class="card-body">
              <button  onClick={()=> handleAdd(items)} className='btn btn-primary me-2'  >Add to cart</button>
              <button className='btn btn-danger ms-2' onClick={()=>handleRemove(items.id)}>Remove from cart</button>
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
