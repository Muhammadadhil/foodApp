import RestuarantCards from "./RestuarantCards"
import { useEffect, useState } from "react";
import { restaurantData } from "../../utils/mockData";
import axios from "axios";
import Shimmer from "./shimmer";

const Body = () => {

    let resLists = [];

    const [resList, setRestList] = useState(resLists);                  
    
    
    useEffect(()=>{
        fetchResData()
        console.log('helloworld');
    },[]);
    
    const fetchResData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2920667&lng=75.8257955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const apiData = await response.json();
        console.log("apidata:", apiData);
        setRestList(apiData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants  || []);

    };
    
    // if (resList.length===0) {
    //     return <Shimmer/>;
    // }

    return resList.length===0 ? <Shimmer/> : (
        <div className="main-content">

            <div className="filter-top">
                <button onClick={()=>{
                    const filteredResList=resList.filter((restaurant)=> restaurant.info.avgRating > 4);
                    setRestList(filteredResList);
                    
                }}>filter top rating</button>
                
            </div>
            
            <div className="restaurant-container">
                {resList.map((restaurant) => {
                    return <RestuarantCards key={restaurant.info.id} restData={restaurant} />;
                })}
            </div>
        </div>
    );
};

export default Body;
