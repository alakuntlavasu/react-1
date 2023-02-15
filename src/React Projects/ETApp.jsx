import React, { useState } from "react";
import ETForm from './ETForm'
import ETList from './ETList'
const ETApp=()=>{
    const [track,settrack]=useState([])
    return<>
      <ETForm track={track} settrack={settrack} />
        <ETList track={track} />
    </>
}
export default ETApp