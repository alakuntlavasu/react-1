import React from 'react'

const fiower = {
  fontSize: '86px',
  color: 'red',
  padding: '50px',
  // margin_left:'20px',
  // text_aligin:'center',
  // align:"center"
}
const slower = {
  fontSize: '74px',
  color: 'blue'
}
const flower = {
  fontSize: '65px',
  color: 'green'

}



function Inline() {
  return (
    <div>
      <h1 style={fiower} align='center'>AlaKuntla Vasu</h1>
      <h2 style={slower} align='center'> Varun Taj</h2>
      <h2 style={flower} align='center'>AlaKuntla Naveen</h2>
     
    </div>
  )
}

export default Inline