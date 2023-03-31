
import React, { Component } from 'react'

 class Clock extends Component {
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
      <div >
        <h1 className='text-center text-primary'>Digital Clock</h1> <br />
        {/* <pre>{JSON.stringify(this.state.ct)}</pre> */}
        <h3 className='text-center text-info'>{this.state.ct}</h3>
      </div>
    )
  }
}

export default Clock