import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice';



const CategoryItemList = ({items}) => {
 
  const dispatch = useDispatch();
    const handleAddItem = (item) => {
      //dispatch an action
      dispatch(addItem(item))
      
      console.log(addItem);
      

    }

    
  return (
    <div>
        
            {items.map((items)=> (
                
                <div key={items.card.info.id} className="p-2 m-2 text-left border-b-2 border-gray-200">
                  <div className='flex justify-between'>
                    <div className="flex flex-col py-2">
                      <span>{items.card.info.name}</span>
                      <span>₹{items.card.info.price / 100}</span>
                    </div>
                    
                    
                      <div className='relative h-28 w-28'>
                        <img src={CDN_URL + items.card.info.imageId} className='object-cover w-full h-full rounded-xl' alt = "."/> 
                        
                        <button className='absolute top-0 p-2 mt-2 font-bold text-white bg-black rounded-lg right-4 left-4' 
                        onClick={()=>handleAddItem(items)}
                        >ADD</button>
                      </div>
                     
                      
                        
                      
                    
                  </div>
                  <p className="py-6 text-xs text-gray-600">{items.card.info.description}</p>
                </div>
            ))}
        
    </div>
  )
}

export default CategoryItemList