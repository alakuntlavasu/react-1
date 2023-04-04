import React, { Component } from 'react'
import Function from './Function'
export class Class1 extends Component {
    name='manasa'
    age=22


  render() {
    return (
      <div>
        <h1>Class</h1>
        <Function name={this.name} age={this.age}/>
      </div>
    )
  }
}
