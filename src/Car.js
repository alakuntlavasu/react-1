import React, { Component } from 'react'

 class Car extends Component {
    constructor(props){
        super();
        this.state={
            name:'vasu'
        }
    }
  render() {
    return (
      <div>
      <h1> My Name is {this.state.name}</h1>
 <button onClick={()=>this.setState({name:'hemanth'})}>Click</button>
      </div>
    )
  }
}

export default Car