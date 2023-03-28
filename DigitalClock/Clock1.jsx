import React, { Component } from 'react'

export class Clock1 extends Component {
  state={
    ct:new Date().toLocaleTimeString()
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        ct:new Date().toLocaleTimeString()
      })
    },1000)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="card">
              <div className="card-header">
                <h1 className='text-center text-info' >Digital Clock </h1>
              </div>
              <div className="card-body">
                <h4  className='text-center'>{this.state.ct}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Clock1