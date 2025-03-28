import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local state variables - superpowerful variable
  // React will re-renders the component if state changes - (good in DOM manipulations)
  // whenever state variables updates , react triggers a reconciliation cycle (re-renders the component)

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //  useState returns an array like below :
  //  const arr = useState(resList)
  //   const listOfRestaurants = arr[0];
  //   const setListOfRestaurants = arr[1];
  useEffect(() => {
    fetchdata();
  }, []);

  const onSearchText = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  const fetchdata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // optional chaining
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  //   if (listOfRestaurants.length === 0) {
  //     return <h1>Loading...</h1>;
  //   }

  // adding key is good practice and optimisations (performance) coz if we
  // don't mention the React will re-render all the cards, its not recommended to use index as key
  // not using keys (not acceptable) <<< index as key (if unique id not available) <<<<< unique ID (best practice)
  return listOfRestaurants.length > 0 ? (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={onSearchText}>Search</button>
        </div>
        <div className="filter-btn">
          <button
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.avgRating > +4.3;
              });
              // setListOfRestaurants(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            {" "}
            Top rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  ) : (
    <Shimmer />
  );
};

export default Body;
