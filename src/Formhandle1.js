import React from "react";
class Formhandle1 extends React.Component{
render(){
    return(
     <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        <div className="card-body">
                            <form>
                                <div>
                                    <input type="text" placeholder="Email Id"/>
                                </div>
                                <div>
                                    <input type="text" placeholder="password"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
}
}
export default Formhandle1