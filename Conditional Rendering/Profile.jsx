import React from "react";
function Profile(){
    const[loggedin,setLoggedIn]=React.useState(true);
    if(loggedin){
        return(
            <div>
                <h1>Hello varun</h1>
            </div>
        )
    }
    else{
        return(
            <div>
                <h2>Welcome to varu</h2>
            </div>
        )
    }
}
export default Profile