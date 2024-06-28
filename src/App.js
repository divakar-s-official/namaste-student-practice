import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import {Body} from "./components/Body"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { About } from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";












const AppLayout = () => {
    console.log(<body />);
    return (
        <div className="app">
            <Header/> 
            {/* {this outlet is over here in the app layout} */}
            
            <Outlet />
        </div>
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
            path: "/contact",
            element: <Contact />
        }
    ],
        errorElement: <Error />,
        
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);