import { restrauntList } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body=()=>{
    const { sections: { SECTION_SEARCH_RESULT } } = restrauntList;
  return(
    <div className="restaurant-list">

      {SECTION_SEARCH_RESULT.map((restaurant) => (
        <RestaurantCard  restaurant={restaurant} key={restaurant.info.resId}/>
      ))}
      
      

    </div>
  )
}
export default Body