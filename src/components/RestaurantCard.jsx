import { CDN_URL } from "../utils/constants";
const ResturantCard = ({resData}) => {
    
    const {
        name, cuisines, totalRatingsString, sla, cloudinaryImageId 
    } = resData.info;
    
    return (
        <div className="p-2  w-[250px] h-[400px] hover:bg-gray-100 rounded-xl flex flex-col items-center justify-between ">

            <div className="w-full card-container h-[150px] flex justify-center">
            <img 
            className="object-cover w-full h-full rounded-lg"
            src={CDN_URL+ cloudinaryImageId}
            alt="res-logo"
            />
            </div>
            
            <h3 className="text-xl font-bold text-center">{name}</h3>
            <h4 className="text-[12px] text-slate-500 text-center">{cuisines.join(", ")}</h4>
            <h5 className="mt-1 text-xs font-extrabold text-slate-500">{totalRatingsString + "ratings"}</h5>
            {/* <h6 className="text-center">{sla.slaString}</h6> */}
        </div>
    )
}

//Higher order component 

export const withPromotedLabel = (ResturantCard) =>{
    return (props) => 
    {
        return (
            <div>
                <label htmlFor="">Promoted</label>
                <ResturantCard {...props}/>
            </div>
        )
    }
}

export default ResturantCard;