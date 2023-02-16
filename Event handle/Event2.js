import React,{ useState } from "react";
const Event2=()=>{
    const[count,setcount]=useState(0)
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>setcount(count+1)}>Incriment</button>
            <button onClick={()=>setcount}>decriment</button>
        </div>
    )
}
export default Event2
// update the state inside a onClick handler