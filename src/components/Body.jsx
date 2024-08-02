import React from 'react';
import useListOfRestaurants from "../utils/useListOfRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";
import ResturantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export const Body = () => {
  const onlineStatus = useOnlineStatus();

  // console.log('Online Status:', onlineStatus);


  const {
    listOfRestaurants,
    filteredRestaurants,
    searchText,
    setSearchText,
    setFilteredRestaurants
  } = useListOfRestaurants();

  const RestaurantcardPromoted = withPromotedLabel(ResturantCard);

  const info =  {
    promoted : true
  }

  console.log("list of Restaurants", listOfRestaurants);

  if (listOfRestaurants.length === 0) return <Shimmer />;

  return !onlineStatus ? <h1>It seems like you're not connected to the internet🛜</h1> :(
    <div className="flex flex-col items-center body">
      <div className="flex filter">
        <div className="p-4 my-4 search">
          <input
            type="text"
            className="border border-black border-solid"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 mx-4 bg-green-100 rounded-lg"
            onClick={() => {
              console.log(searchText);
              // Filter the restaurant cards and update the UI.
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className='flex items-center p-4 my-4 ' >
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg"
          onClick={() => {
            // Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.totalRatingsString >= "4"
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center res-container gap-y-2">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {
              restaurant.info.promoted ? <ResturantCard resData={restaurant}/> : <ResturantCard resData={restaurant} />
            }
            
          </Link>
        ))}
      </div>
    </div>
  );
};
