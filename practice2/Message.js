import React, { useState } from 'react'

const Message = () => {
    const [wish, SetWish] = useState({ wishing: 'Hello everyone' })
    const gmhandler = () => {
        SetWish({ wishing: 'good morning' })
    }
    const gnhandler = () => {
        SetWish({ wishing: 'good night' })
    }
    return (
        <div>
            <h1>function component</h1>
            <h1> Wishing from vasu {wish.wishing}</h1>
            <button className='btn btn-primary mr-3' onClick={gmhandler}>GM</button>
            <button className='btn btn-secondary' onClick={gnhandler}>GN</button>
        </div>
    )
}

export default Message