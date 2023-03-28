import React, { Component } from 'react'
import axios from 'axios'
 class User1 extends Component {
    state={
        users:[]
    }
    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response)=>{
        //  console.log(response.data);
         this.setState({users:response.data})
      })
      .catch()
    }
  render() {
    return (
      <div>
       <pre>{JSON.stringify(this.state.users)}</pre>
 {
  this.state.users.map((user)=>{
    return(
      <div>
      <h4>address:{user.address.city}</h4>
      </div>
    )
  })
} 
<h1>{this.state.users.email}</h1>
      </div>
    )
  }
}

export default User1