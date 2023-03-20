import React, { Component } from 'react'

export class Form1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      paswood: ''
    }
  }
  emailHandler=(event)=>{
    // console.log(event.target);
    console.log(event.target.value);
    this.setState({email:event.target.value})
  }
  render() {
    return (
      <div className='container mt-5  text-center'>
        <h1>Login Details</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <form>
          <div className='form-group mb-5'>
            <label className='form-label'>Email Id</label>{' '}
            <input type="text" onChange={this.emailHandler}  className='form-control-lg'/>
          </div>
          <div className='form-group'>
            <label className='form-label'>Password</label>{' '}{' '}
            <input type="password" className='form-control-lg'/>
          </div>
          <button className='btn btn-success'>Signin</button>
        </form>
      </div>
    )
  }
}

export default Form1