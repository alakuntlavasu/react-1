import React, { useState } from 'react'

const State1 = () => {
    const [count, setcount] = useState(0)
    // using array destructuring here
    //to assign initial value 0
    //to click and a reference to the function
    //that updates click to setclick
    return (
        <div className='text-center'>
            <h1>{count}</h1>
            <button onClick={() => setcount(count + 1)}>click</button>
        </div>
    )
}

export default State1
