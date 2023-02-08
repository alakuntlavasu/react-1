import React, { Component } from 'react'

export class Masage extends Component {
    constructor(props){
        super()
        this.state={
            Masage:'Hello'
        }
    }
  render() {
    return (
      <div>
        <h1> my name{this.state.Masage}</h1>
        <button onClick={()=>this.setState({Masage:'vasu'})}>Click</button>
      </div>
    )
  }
}

export default Masage