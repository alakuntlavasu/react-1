import React, { useState } from 'react'

const State2 = () => {
    const [click, setclick] = useState(0)
    return (
        <div className='text-center'>
            <p>You've clicked number {click}</p>
            <p>The number of times you have clicked is  {click % 2 == 0 ? 'even!' : 'odd!'}</p>
            <button onClick={() => setclick(click => click + 1)}>click me</button>
        </div>
    )
}

export default State2