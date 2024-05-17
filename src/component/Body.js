import { useState } from "react";
import { restrauntList } from "../config";
import RestaurantCard from "./RestaurantCard";

// const { info: { name } } = restaurant;


function filterdata(searchText,restaurants){
   const filteredData= restaurants.filter((restaurant)=>{
        return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    })

    return filteredData;
}

const Body=()=>{

    let [searchText,setSearchText]=useState("")
    const { sections: { SECTION_SEARCH_RESULT } } = restrauntList;
    let [restaurants,setRestaurants]=useState(SECTION_SEARCH_RESULT)


  return(
    <>
    <br/>
    <div className="search-container">
        <input 
            type="text" 
            className="search-input" 
            placeholder="Search"
            value={searchText}
            onChange={(e)=>{
                setSearchText( searchText=e.target.value);
               }}
            />
            <button 
            className="search-btn"
            onClick={()=>{
               const data= filterdata(searchText,restaurants);
               setRestaurants(data)
            }}
            >Search</button>
    </div>

    <div className="restaurant-list">

      {restaurants.map((restaurant) => (
        <RestaurantCard  restaurant={restaurant} key={restaurant.info.resId}/>
      ))}

    </div>
    
    </>
  )
}
export default Body