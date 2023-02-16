
import React, { Component } from 'react'

export class Bag extends Component {
    constructor(){
        super();
        this.state={
           brand:'Hpbag',
           modal:'lapbag',
           price:4000 
        }
    }
  render() {
    return (
      <div>
       <h1>{this.state.brand}</h1>
       <h2>{this.state.modal}</h2>
       <h3>{this.state.price}</h3>
       <button onClick={()=>this.setState({brand:'lenovabag'})}>Click</button>
      </div>
    )
  }
}

export default Bag