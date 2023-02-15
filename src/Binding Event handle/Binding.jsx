import React, { Component } from "react";
class Binding extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         mesage:'Testing'
      }

    }
    ClickHsndler(){
        this.setState({
            mesage:'Tested'
        })
    }
    render(){
        return(
            <div>
               <h1>{this.state.mesage}</h1>
               <button onClick={this.ClickHsndler}>Test</button>
            </div>
        )
    }
}
export default Binding
// Binding with constructor