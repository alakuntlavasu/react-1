import React, { Component } from 'react'

export class RegesterForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'mobile',email:''
      }
    }
    updateHandler=(event)=>{
            this.setState({[event.target.name]:event.target.value})
    }
    subimitHandler=(event)=>{
       event.preventDefault();
    }
  render() {
    return (
           <div className="container mt-5 d-flex justify-content-center">
            <div className="row">
                <div className="col">
           <pre>{JSON.stringify(this.state)}</pre>

                    <div className="card">
                        <div className="card-header ">
                            <h3 className='text-center text-info'>Sign up</h3>
                            <div className="card-body">
                               <form onSubmit={this.submitHandler}>
                                <div className='form-group'>
                                    <input className='form-control border-primary' type="text" placeholder='User name'onChange={this.updateHandler} />
                                </div>
                                <div className='form-group'>
                                    <input className='form-control' type="text" placeholder='mobile'onChange={this.updateHandler} />
                                </div>
                                <div className='form-group'>
                                    <input className='form-control' type="text" placeholder='email'onChange={this.updateHandler} />
                                </div>
                                <input type="submit" value='signup'className='btn btn-success' />
                               </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>

      
    )
  }
}

export default RegesterForm