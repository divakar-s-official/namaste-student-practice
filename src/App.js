import React, { lazy, Suspense, useEffect,useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import {Body} from "./components/Body"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// import Groceries from "./components/Groceries";
const Groceries = lazy(()=>import("./components/Groceries"));












const AppLayout = () => {
    
    const [userName,setUserName] = useState();

    useEffect(()=> {
        // Api data over here 
        const data = {
            name : "Divakar S"
        }
        setUserName(data.name);
    }, []);

    
    // console.log(<body />);
    return (
        
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser : userName}}>
                <div className="app">
                
                    <Header/> 
                    {/* {this outlet is over here in the app layout} */}
                
                    <Outlet />
            
                </div>
            </UserContext.Provider>
        </Provider>
        
    )
}

const appRouter = createBrowserRouter([
    
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
            path: "/",
            element: <Body />
        },
            
        {
            path: "/about",
            element: <About />
        },

        {
            path: "/Groceries",
            element: <Suspense fallback={<h2>Loading...</h2>}><Groceries /></Suspense>
        },
        
        {
            path: "/contact",
            element: <Contact />
        },
        {
            //dynamic path /:resId  ---- so it will be changed accordig to the dynamic of the restarants
            path: "/restaurants/:resId",
            element: <RestaurantMenu />
        },
        {
            path: "/cart",
            element: <Cart/>
        }
    ],
        errorElement: <Error />,
        
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
