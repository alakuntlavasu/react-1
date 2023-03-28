import React, { Component } from 'react'

export class Mesage extends Component {
    state={
        Mesage:'How are You'
    }
    updateHandler=(vasu)=>{
        this.setState({Mesage:vasu})
    }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <button onClick={this.updateHandler.bind(this,'good morning')}>gm</button>
        <button onClick={this.updateHandler.bind(this,'good Afternoon')}>GA</button>
        <button onClick={this.updateHandler.bind(this,'good Evening')}>GE</button>
      </div>
    )
  }
}

export default Mesage