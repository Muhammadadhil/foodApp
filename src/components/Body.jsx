import RestuarantCards from "./RestuarantCards"
import { useEffect, useState } from "react";
import axios from "axios";
import Shimmer from "./shimmer";

const Body = () => {

    console.log('body component renders!');
    
    const [resList, setRestList] = useState([]);
    const [filteredReslist, setfilteredReslist] = useState([]);

    const [searchText,setSearchText]=useState("");                  
    
    useEffect(()=>{
        fetchResData()
    },[]);
    
    const fetchResData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2920667&lng=75.8257955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const data = await response.json();
        console.log("apidata:", data);
        setRestList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants  || []);
        setfilteredReslist(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    };
    
    // if (resList.length===0) {
    //     return <Shimmer/>;
    // }

    return resList.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="main-content">
            <div className="filter-top">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);  //* updating input field with typed value
                        }}
                    />
                    
                    <button
                        onClick={() => {
                            const filteredRestaurant = resList.filter((res) => res.info.name.includes(searchText));
                            setfilteredReslist(filteredRestaurant);
                        }}
                    > 
                        search
                    </button>
                </div>

                <button
                    onClick={() => {
                        const filteredResList = resList.filter((restaurant) => restaurant.info.avgRating > 4);
                        setfilteredReslist(filteredResList);
                    }}
                >
                    filter top rating restaurants
                </button>
            </div>

            <div className="restaurant-container">
                {filteredReslist.map((restaurant) => {
                    return <RestuarantCards key={restaurant.info.id} restData={restaurant} />;
                })}
            </div>
        </div>
    );
};

export default Body;
