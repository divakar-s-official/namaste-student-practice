
import Shimmer from "./Shimmer";
import {  useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    // followed the single responsibily principle 
    // our code is more maintainable

    // custom hook created = useRestaurantMenu() -> from the utils folder

    // so the only job of restauraunt menu is displaying menu items and our code looks cleaner

    
    
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    const [showIndex,setShowIndex]  = useState(null);
    

    if ( resInfo===null) return <Shimmer />
    

    
    const {name,
           avgRating,
           costForTwoMessage, 
           cuisines, 
           
        } = resInfo?.cards[2]?.card?.card?.info;

    
    const {itemCards} = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    

    const categories = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
       return c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
   
     console.log("categories", categories);

    return (
        <div className="text-center ">
            
            <h1 className="my-4 text-2xl font-bold"> {name}</h1>
            <p className="text-lg font-bold">{cuisines.join(",")} {costForTwoMessage}</p>

            {categories.map((category, index)=>{ 
                // {console.log(category)}
              return  <RestaurantCategory key={category.card.card.title} data={category?.card?.card} showItems={index === showIndex ? true : false} setShowIndex={()=>setShowIndex(index)}/>
            })}

            
        </div>
    )
} 

export default RestaurantMenu;