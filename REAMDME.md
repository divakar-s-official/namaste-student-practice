# Divakar React

Functionl component -- A normal javascript function
React Element -- plain javascript object
# React Hook -- A normal javascript function which is given by react but it is a utility function given by react.
useState();
useEffect();

# parcel
– Dev Build
– Local server
– HMR - Hot Module ReplaceMent
– File Watcging Algorithm - Written in c++.
– caching - faster builds (parcel gives a faster build experience).
- image optimization
- minification
- Bundling our file also
- compressing
- consistent hashing
- code spliting
- Differential Bundling - (support all browsers including older browsers).
- Diagnostic (If you make an error in your code or configuration, Parcel displays beautiful diagnostics in your terminal and in the browser.)
- error handling
- https (to host your app)
- Tree shaking (remove unused code for well)




# important thing want to know
 -- Never ever keep any hardcoded strings or data inside an component file.


# exports
 There are two types of export and import

-- Default Export/import
 export default ComponentName;
 import ComponentName from "path";

--Named Export/import
 export const Component;
 import {Component} from "path";


 # React Fiber

 so whatever you see in the UI over here reacts keeps a tracks of all this ui All the Dom Nodes as a virtual Dom
 virtual Dom -- its kind of like an object representation


 whenever there is any change in state variable react will find out the difference between virtual dom it will update the dom re-render a component.

 
# createBrowserRouter is a function provided by the React Router library, typically used in web applications built with React. React Router is a popular library for handling navigation and routing in React applications.

# createBrowserRouter is part of the React Router v6 and is used to create a router object that works with the HTML5 history API to keep your UI in sync with the URL. This allows for more complex and dynamic routing in single-page applications (SPAs).

# createBrowserRouter is part of React Router v6.4 and above. It provides a more flexible and powerful way to define your routes, enabling features like data loading and error handling directly within your route definitions.



 import {createBrowserRouter} from "react-router-dom";

 const router = createBrowserRouter([
    {
        path: "",
        element: "",
        children: [
            {
                path: "",
                element: ""
            }
        ],
        //own error page we can create if its not the correct path.
        errorElement : <component />
    }
 ]);

 useRouteError()
   # using the useRouteError hook is giving the more information about the error. --{object} we can use it)

 children Routes
   #  Outlet
    - An <Outlet> should be used in parent route elements to render their child route elements. 
    - This allows nested  UI to show up when child routes are rendered. 
    - If the parent route matched exactly,  
        it will render a child index route or nothing if there is no index route.


    --

    when you are use react and you want route to some other  page never ever use anchor tag.
     because the whole page got refreshed.

     --instead of you can navigate without reloading a new page use <Link to=""/> component from react-router-dom.
      -- by using this its just refreshing the component.
       -- if i change the route also its just changing the component so its not reloading the whole page.

       the main difference is 
                reloading the page 
                refreshes the component

                so that is why our react application are known as single page application.



#  Redux Toolikit

    - Install @reduxjs/toolkit and react-redux

    Build our store 
    connect our store to our app
    slice (cartSlice )
    dispatch(action)
    selector



// first step is to use configurestore() is to create a redux store
const appStore = configureStore({
    cart: cartReducer,
})


//seecond step is to provide this store where it can accessible by any other component from react-redux
<provider store={appStore}>
    // used to wrap part of the application
</provider>


//createSlices --- cart example for my reference

const cartSlice = createSlice({
    // it takes a configuration
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)        
        },

        removeItem: (state) => {
            state.items.pop()
        },

        clearcart: (state) => {
            state.items.length = 0;
        }

    }});

    //when you click on this add button

    const dispatch = useDispatch();

    //  it dispatches an action and calls the reducer function 

    onclick = () => {
        dispatch(addItem(items));
    }

    //selector

    //to read data from the redux store

    // we need to use selector to subscribing to the store

    //make sure you are subscribing to the right portion of the slice inside the redux store
    const selector = useSelector((store) => store.cart.items);

