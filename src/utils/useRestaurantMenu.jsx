import { useState,useEffect } from "react";
import { MENU_API } from "./constants";
";


const useRestaurantMenu = (resId) => {
    const [resInfo,setResInfo] = useState(null);
    

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async() => {
        try {
            const data = await fetch(MENU_API + resId);
            console.log(data);
            const json = await data.json();
            console.log(json);
            setResInfo(json.data)
        } catch (error) {
            console.log(error);
        }
    };

    


    return resInfo;
}

export default useRestaurantMenu;