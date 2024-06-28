import { useEffect, useState } from "react";
import { URL_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
    

    const [btnName,setBtnName] = useState("Login")


    console.log("Header render");

    //when you call a useEffect without a dependency array it will render everytime my component renders
    useEffect(()=>{
        console.log("useEffect called");
    },[btnName]);

    return (
        <div className="Header">
            <div className="logo-container">
                 <img 
                 className="logo" 
                 src={URL_LOGO} />
                 
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{
                       btnName === "Login" 
                       ? setBtnName("Logout")
                       : setBtnName("Login")

                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;