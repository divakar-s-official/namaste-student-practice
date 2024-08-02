import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CategoryItemList from './CategoryItemList';
import { clearCart} from '../utils/cartSlice';

const Cart = () => {

    //so whenever you are using a selector right make sure you are subscribing to the  to the right portion of the store 
    //if you dont subscribe to the right portion of the store it will be a big performance loss
    //always subscribe to the small portion of the store
    const cartItems = useSelector((store)=>store.cart.items);
    

    const dispatch = useDispatch();
  return (
    <div className='w-full p-10 px-48 mx-auto text-center'>
        <h1 className='text-2xl font-bold'>Cart</h1>
        <button className='p-2 text-center text-white bg-black rounded-xl'
        onClick={()=>{
            return dispatch(clearCart())
        }}
        >Clear Cart</button>
        <div>
          <h1></h1>
        </div>
        <div className='mt-10 border border-gray-300 rounded-2xl'>
            {cartItems.length === 0 && <h1 className='p-4 text-xl font-bold text-slate-500 '>Your Cart is empty 🛒</h1>}
            <CategoryItemList items={cartItems}/>
            
        </div>
    </div>
  )
}

export default Cart;