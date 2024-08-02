import {Component} from "react"
import UserContext from "../utils/UserContext";

class UserClass extends Component {
    constructor(props){
        super(props);

        this.state = {
            userInfo : {}
        }
        
        
        
    }

   async componentDidMount(){
       try {
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        console.log(data);

        const json = await data.json();

        this.setState({
            userInfo : json
        })
        console.log(json);
       } catch (error) {
        console.log(error);
        
       }


        
    }

    

    render() {
        const {name, location, avatar_url, followers} = this.state.userInfo;        
        //this render will return a piece of jsx which will display be on a UI
        
        return (
            <div className="user-card">
                
                <img src={avatar_url} alt="" />
                
    
                <UserContext.Consumer>{({loggedInUser})=> <h1>Name : {loggedInUser}</h1>}</UserContext.Consumer>
                <h3>Location : {location}</h3>
                <h4>Contact : {followers}divaoffi01@gmail.com</h4>
                
    
            </div>
        )


    }
}

export default UserClass;




// Inheritance and super: In JavaScript, the super keyword is used to call functions on an object's parent class. When you create a class-based component in React, your component class extends React.Component. This means your class inherits from React.Component, and you need to call the parent class's constructor when defining your own constructor.

// Passing props to the Parent Class: React.Component has its own constructor that expects props as an argument. By calling super(props), you ensure that the props are passed to the parent class's constructor. This is necessary for the props to be available in this.props within your component.

// Access to this.props: If you don't call super(props) in the constructor, this.props will be undefined in your component, leading to potential bugs and issues when trying to access props.