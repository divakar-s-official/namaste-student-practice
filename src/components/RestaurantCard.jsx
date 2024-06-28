import { CDN_URL } from "../utils/constants";
const ResturantCard = ({resData}) => {
    const {name, cuisines, totalRatingsString, sla, cloudinaryImageId } = resData.info;
    
    return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>

            <div className="card-container">
            <img 
            className="res-logo"
            src={CDN_URL+ cloudinaryImageId}
            alt="res-logo"
            />
            </div>
            
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{totalRatingsString + "ratings"}</h5>
            <h6>{sla.slaString}</h6>
        </div>
    )
}

export default ResturantCard;