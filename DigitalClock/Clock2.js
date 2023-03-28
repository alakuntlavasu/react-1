import React, { Component } from 'react'

 class Clock2 extends Component {
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
      <div>
        <h1 className='text-center text-info'>Digital Clock</h1>
        {/* <pre>{JSON.stringify(this.state.ct)}</pre> */}
        <h3 className='text-center text-primary'>{this.state.ct}</h3>
      </div>
    )
  }
}

export default Clock2