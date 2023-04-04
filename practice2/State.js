import React, { Component } from 'react'

export class State extends Component {
    state={
        message:'Hello everyone'
    }
    gmhandler=()=>{
        this.setState({message:'Good morning'})
    }
    gnhandler=()=>{
   this.setState({message:'Good Night'})
    }
  render() {
    return (
      <div>
      <h1>class component</h1>
      <h1> Wishing from  vasu {this.state.message}</h1>
        <button className='btn btn-success mr-3' onClick={this.gmhandler}>GM</button>
        <button className='btn btn-danger' onClick={this.gnhandler}>GN</button>
      </div>
    )
  }
}

export default State
