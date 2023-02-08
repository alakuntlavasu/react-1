import React, { Component } from 'react'

export class State1 extends Component {
  state={
       massage:'Hello Varun' 
  }
  gmhandler=()=>{
    this.setState({massage:'vasu is coming'})
  }
  gnhandler=()=>{
    this.setState({massage:'vasu is going'})
  }
  render() {
    return (
      <div>
        <h1>Class component</h1>
        <h1>{this.state.massage}</h1>
        <button onClick={this.gmhandler}>Gm</button>
        <button onClick={this.gnhandler}>Ge</button>
      </div>
    )
  }
}

export default State1