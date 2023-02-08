 import React from "react";
 const Event4=()=>{
     const Vasu=(name)=>{
         alert(`Hello,${name}`);     }
     return(
         <>
          <button onMouseOver={()=>Vasu('why')}>click</button>
        </>
    )
 }
 export default Event4
// // pass a parameter to an onMouse over