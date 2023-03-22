import React, { Component } from 'react'
import Axios from 'axios'
export class User extends Component {
    state={
        User:[]
    }
    get_Data_Handler=()=>{
      Axios.get('https://jsonplaceholder.typicode.com/users')
         .then((resp)=>{
            console.log(resp.data);
         })
         .catch((err) => {
                console.log(err)
            })
        
    }
    
  render() {
    return (
      <div>
      <pre>{JSON.stringify(this.state)}</pre>
    <button onClick={this.get_Data_Handler}>submit</button>
      </div>
    )
  }
}

export default User