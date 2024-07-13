import { IMG_URL } from "../../utils/constants";

const RestuarantCards = (props) => {
    
    const { name, cuisines, avgRating, areaName, cloudinaryImageId } = props.restData.info;
    return (
        <div className="card">
            <img alt="food-image" src={IMG_URL+ cloudinaryImageId}></img>

            <h4>{name}</h4>
            <h4>{cuisines.join(" , ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{areaName}</h4>
        </div>
    );
};


export default RestuarantCards;