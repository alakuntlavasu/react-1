import React, { Component } from 'react'

class Formhandle extends Component {
  state = {
    emailId: "",
    password: "",
    mobial_num:""

  }
  emailHandler = (event) => {
    this.setState({ emailId: event.target.value })
  }
  passwordHandler = (event) => {
    this.setState({ password: event.target.value })
  }
  mobial_numHandler=()=>{
    this.setState({mobial_num: event.target.value})
  }
  submitHandler = (event) => {
    event.preventDefault()
  }
  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <h1>Formhandle</h1>
        <h1>Login form</h1>
        <form onSubmit={this.submitHandler} />
        <label>Email id:</label>
        <input type="text" onChange={this.emailHandler} /> <br></br> 
        <label>password</label>
        <input type="text" onChange={this.passwordHandler} /> <br></br>
        <label>mobial_num</label>
        <input type="text" onChange={this.mobial_numHandler} /> <br></br>
        <input type='submit' value="Login" /> <br></br>

      </div>
    )
  }
}
export default Formhandle