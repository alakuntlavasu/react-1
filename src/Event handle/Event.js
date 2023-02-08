import React from 'react'

function Event() {
  function cliclkhandler(){
    console.log('vasu')
  }
  return (
    <div>
        <button onClick={cliclkhandler()}>click</button>
    </div>
  )
}

export default Event