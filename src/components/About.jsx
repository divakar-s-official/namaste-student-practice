import {Component} from 'react'
import User from './User'
import UserClass from './UserClass'
import UserContext from "../utils/UserContext";

export class About extends Component {
  constructor(props){
    super(props);

    // console.log("parent constructor");
  }

  

  render(){
    // console.log("parent render");
    return (
      <div>
        <div>
          <h1>About</h1>
          <div>
            <UserContext.Consumer>{({loggedInUser})=> <h1>{loggedInUser}</h1>}</UserContext.Consumer> 
          </div>
          <UserClass name={"Divakar"}/>
          
      </div>
    </div>
    )
  }
}


