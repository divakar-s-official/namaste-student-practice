import React from 'react'
import CategoryItemList from './CategoryItemList';

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
  // const [showItems,setShowItems] = useState(false);
  const handleClick = () => {
    //if false it becomes true, if true it becomes false
    // setShowItems(!showItems);
    setShowIndex();
    
  }
    
  return (
    <div>
        {/* Accordion Header */}
        <div className="w-6/12 p-4 m-auto my-4 border shadow-lg rounded-xl bg-gray-50">
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
            <span className='text-lg font-bold'>{data.title} ({data.itemCards.length})</span>
            <span>🔻</span>
            </div>

            {/* Accordion body */}
            { showItems && <CategoryItemList items={data.itemCards}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory