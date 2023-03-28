
import React, { Component } from 'react'

export class Count extends Component{
    state={
        Counter:1
    }
    incrimentHandler=()=>{
        this.setState({Counter:this.state.Counter+1})
    }
    decrimentHandler=()=>{
        this.setState({Counter: this.state.Counter-1})
    }

  render() {
    return (
      <div>
      <pre>{JSON.stringify(this.state)}</pre>
      <i className='fa fa-minus-circle' onClick={this.decrimentHandler}></i>
      {this.state.Counter}
      <i className='fa fa-plus-circle' onClick={this.incrimentHandler}></i>

      </div>
    )
  }
}

export default Count