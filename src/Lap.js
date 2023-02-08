import React, { Component } from 'react'

export class Lap extends Component {
  constructor(props) {
    super();
    this.state = {
      modal: 'Hp',
      ram: '8gb',
      storage: '512ssd'

    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.modal}</h1>
        <h4>{this.state.ram}</h4>
        <h5>{this.state.storage}</h5>
        <button onClick={() => this.setState({ modal: 'lenova' })}>Click</button>

      </div>
    )
  }
}

export default Lap