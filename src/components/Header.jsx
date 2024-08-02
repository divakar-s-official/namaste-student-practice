import { useContext, useEffect, useState } from "react";
import { URL_LOGO } from "../utils/constants";
import { Link,NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    

    const [btnName,setBtnName] = useState("Login")

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const NavStyleLinks = ({isActive}) => {
        return {
            fontWeight: isActive ?  'bold' : 'normal'
        }
    }
    
    


    // console.log("Header render");

    //when you call a useEffect without a dependency array it will render everytime my component renders
    useEffect(()=>{
        // console.log("useEffect called");
    },[btnName]);

    //subscribing to the store using selector

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    

    return (
        <div className="flex justify-between m-2 bg-pink-200 shadow-lg ">
            <div className="logo-container">
                 <img 
                 className="w-36" 
                 src={URL_LOGO} />
                 
            </div>
            <div className="flex items-center ">
                <ul className="flex items-center p-4 m-4">
                    <li className="px-4">
                        <label htmlFor="checked">
                            {onlineStatus ? "Online" : "Offline"}
                        </label>
                        

                    </li>
                    <li className="px-4">
                        <NavLink to="/" style={NavStyleLinks}>Home</NavLink>
                    </li>
                    <li className="px-4">
                        <NavLink to="/about" style={NavStyleLinks}>About us</NavLink>
                    </li>

                    <li className="px-4">
                        <NavLink to="/Groceries" style={NavStyleLinks}>Mart</NavLink>
                    </li>
                    <li className="px-4"> 
                        <NavLink to="/contact" style={NavStyleLinks}>Contact us</NavLink>
                    </li>
                    <li className="px-4 text-xl font-bold">
                        <NavLink to="/cart" style={NavStyleLinks}>🛒Cart ({cartItems.length})</NavLink>
                    </li>
                    <button className="px-4 font-bold" onClick={()=>{
                       btnName === "Login" 
                       ? setBtnName("Logout")
                       : setBtnName("Login")

                    }}>{btnName}</button>

                    <li>{loggedInUser}</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;