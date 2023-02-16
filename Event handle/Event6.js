import React, { Component } from 'react'

 class Event6 extends Component {
  clickHandler(){
    console.log('clicked the button');
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click me</button>
      </div>
    )
  }
}

export default Event6