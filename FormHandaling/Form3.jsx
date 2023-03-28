import React, { Component } from 'react'

export class Form3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         email:'',
         pasword:''
      }
    }
    emailHandler=(event)=>{
        this.setState({email:event.target.value})
    }
    passwordHandler=(event)=>{
        this.setState({pasword:event.target.value})
    }
  render() {
    return (
      <React.Fragment>
        <h1>Login Details</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <form>
            <div>
                <label>Email id</label>
                <input type="text"onChange={this.emailHandler} />
            </div>
            <div>
            <label>password</label>
                <input type="password" onChange={this.passwordHandler}/>
            </div>
            <input type="Submit" />
        </form>
      </React.Fragment>
    )
  }
}

export default Form3