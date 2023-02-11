import React from "react";
function Profile1(){
    const[loggedin,setLoggedIn]=React.useState(false)
    return(
        <>
            {
                loggedin?<h1>welcome</h1>
                :<h2>Welcome to varun</h2>
            }
        </>
    )

}
export default Profile1