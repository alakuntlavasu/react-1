import React, { Component } from 'react'

class Form1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: ''
    }
  }
  //    handleUsernameChange=(event)=>{
  //      this.setState({
  //         username:event.targent.value
  //      })
  //    }
  render() {
    return (
      <div>
        <label>userName</label>
        <input type='text' />
      </div>
    )
  }
}

export default Form1
