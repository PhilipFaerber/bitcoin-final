import React, { Component } from "react"
import { Jumbotron } from "react-bootstrap";

class MyBitcoin extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="page">
                <br></br>
                <h1>Meine Bitcoin</h1>
                <br></br>

                <Jumbotron></Jumbotron>
            </div>
        );
    }

}

export default MyBitcoin;