
import {useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import {MENU_URL} from '../../utils/constants'

const RestuarantMenu=()=>{
    const [resInfo, setResInfo] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const {resId}=useParams();
    // console.log('parms:',params);

    console.log("resInfo State:", resInfo);
    console.log("swiggy menu url :", MENU_URL);

    const fetchData = async () => {
        const data = await fetch(MENU_URL+resId); 
        const json = await data.json();

        setResInfo(json.data);
        console.log("restaurant menu data:", json);

    };

    
    if(resInfo === undefined ){
        return <Shimmer />
    }
    
    const { name, cuisines ,costForTwo} = resInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>
                {cuisines.join(",")}- Rs:{costForTwo/100} for Two
            </h2>
            

            <ul>
                <h3>Menu</h3>
                {itemCards.map((item) => {
                    return (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - Rs:{item.card.info.price / 100}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default RestuarantMenu;