import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props){
        super();
        this.state={
            count:0
        }
    }
     incriment(){
        this.setState((prevState)=>({
            count:prevState.count +1
        }))
       /*  console.log(this.state.count); */
        
     }
     incrimentFive(){
        this.incriment()
        this.incriment()
        this.incriment()
        this.incriment()
        this.incriment()
     }
        
        
    
  render() {
    return (
      <div>
      <div>{this.state.count}</div>
        <button onClick={()=> this.incrimentFive()}>incriment</button>
      </div>
    )
  }
}

export default Counter