import React from 'react'

export class Counter extends React.Component {
    state = {
        count: 0
    }
    incrhandler = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrhandler = () => {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        return (
            <div>
                <h1>counter class component</h1>
                <h1 className='bg-success text-white'>Counter value :{this.state.count}</h1>
                <button className='btn btn-info mr-3' onClick={this.incrhandler}>+</button>
                <button className='btn btn-info' onClick={this.decrhandler}>-</button>
            </div>
        )
    }
}

export default Counter