import React, { useMemo, useState } from "react";
function Counter3(){
    const[counterone,setcounterone]=useState(0)
    const[Countertwo,setcountertwo]=useState(0)
 
     const incrimentone=()=>{
        setcounterone(counterone+1)
     }
     const incrimenttwo=()=>{
        setcountertwo(Countertwo +2)
     }
     const isEven= useMemo(()=>{
        return counterone % 2 ===0
     },[counterone])
        
    
    return(
        <div>
            <button onClick={incrimentone}>count one-{counterone}</button>
            <button onClick={incrimenttwo}>counttwo-{Countertwo}</button>
            <span>{isEven()?'Even':'odd'}</span>
        </div>
        
            
        
    )
}
export default Counter3