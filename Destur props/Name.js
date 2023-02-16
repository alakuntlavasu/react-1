// import React from 'react'

// const Name =(props)=> {
//   const{Name,heroname}= props
//   return (
//     <div>
//         <h1>Hello {Name} andhra {heroname}</h1>
//     </div>
//   )
// }

// export default Name
import React from 'react'
const Greet = props=>{
   const {name, heroName} = props
   return(
     <div>
       <h1>
         Hello {name} a.k.a {heroName}
         </h1>
       </div>)
       
       }
export default Greet
