import { useEffect, useState } from "react";
import { LIST_API } from "./constants";

const useListOfRestaurants = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
  
    const [searchText,setSearchText] = useState("");
    // console.log('body rendered');
  
    useEffect(()=>{
    //   console.log("useCallback called");
      fetchData();
    }, []);
    //console.log("Render called");
  
    const fetchData = async() => {
      try{
        const data = await fetch(LIST_API);
      
        const json = await data.json();
    
        console.log(json);
    
        //used optional chaining for safely access nested property
        //
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      } catch (err) {
        console.log(err);
      }
      
    }

    return {
        listOfRestaurants,
        filteredRestaurants,
        searchText,
        setSearchText,
        setFilteredRestaurants
    }

}

export default useListOfRestaurants
  
  
  
  