import React from "react";
const Funp =()=>{
    const sayHello=(name)=>{
        alert('vasu is good boy')
    }
    return(
        <div>
            <button onClick={()=>{sayHello('really')}}>click</button>
        </div>
    )

}
export default Funp
// pass a parameter to an onClick event handler