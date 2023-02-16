import React, { Component } from "react";
class Greeting extends Component{
    constructor(props){
        super()
        this.state={
            isLoggedIn:true
        }
    }
    render(){
        if(this.state.isLoggedIn){
            return(
                <div>
                    Welcome to my gist
                </div>
            )
        }
        else{
            return(
                <div>
                    Welcome to my Family
                </div>
            )
        }
        return(
            <div>
                <div>Welcome to Vasu</div>
                <div>Welcome to Vasu</div>
            </div>
        )
    }
}
export default Greeting