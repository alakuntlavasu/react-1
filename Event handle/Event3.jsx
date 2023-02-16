import React, { useState } from "react";
const Event3=()=>{
    const[count,setcount]=useState();
    const sayHello=()=>{
        alert('Hello')
    }
    return(
        <>
            <p>{count}</p>
            <button onClick={()=>{sayHello()(count+1)
            }}
            >click</button>
        </>
    )
}
export default Event3
// call multiple function in an onClick handler
