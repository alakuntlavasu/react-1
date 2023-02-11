import React from "react";
function Profile2(){
 const[loggedin,setLoggedIn]=React.useState(2);
 // 1,2,esle
 return(
    <div>
        {
        loggedin==1?<h1>Welcome</h1>
        :loggedin==2?<h1>Wecome to varun</h1>
        :<h2>Welcome all peoples</h2>
        }
    </div>
 )
}
export default Profile2