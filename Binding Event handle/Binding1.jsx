import React,{Component} from 'react';  
  
class Binding1 extends Component{  
         constructor(props){  
               super(props)  
               this.state = {  
                     message : "Testing"  
               }  
         }  
  
        clickHandler(){  
               this.setState({  
                         message : "Tested"  
               })  
         }  
  
        render(){  
               return(  
                  <div> {this.state.message}  
                           <button onClick={this.clickHandler.bind(this)}>Test</button>  
                  </div>  
        );  
    }  
}  
  
export default Binding1; 