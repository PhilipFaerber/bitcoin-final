import React, { Component } from "react"
import { Jumbotron } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import "./App.css";


class Home extends Component{

    constructor(props){
        super(props);
        
        this.showCurrency = this.showCurrency.bind(this);
    }  

    async showBitcoinInEuro(){
        let euro = document.getElementById("bitcoinToEuro");
        const url = "https://blockchain.info/ticker";
        const response = await fetch(url);
        const bitcoinData = await response.json();
        euro.innerHTML = bitcoinData["EUR"]["15m"] +  " " + bitcoinData["EUR"]["symbol"];
    }

    async showBitcoinInUsDollar(){
        let usDollar = document.getElementById("bitcoinToUsDollar");
        const url = "https://blockchain.info/ticker";
        const response = await fetch(url);
        const bitcoinData = await response.json();
        usDollar.innerHTML = bitcoinData["USD"]["15m"] +  " " + bitcoinData["USD"]["symbol"];
    }    

    async showBitcoinInAud(){
        let yen = document.getElementById("bitcoinToAud");
        const url = "https://blockchain.info/ticker";
        const response = await fetch(url);
        const bitcoinData = await response.json();
        yen.innerHTML = bitcoinData["AUD"]["15m"] +  " " + bitcoinData["AUD"]["symbol"];
    }

    async showBitcoinInNzd(){
        let yen = document.getElementById("bitcoinToNzd");
        const url = "https://blockchain.info/ticker";
        const response = await fetch(url);
        const bitcoinData = await response.json();
        yen.innerHTML = bitcoinData["NZD"]["15m"] +  " " + bitcoinData["NZD"]["symbol"];
    }

    async showBitcoinInGbP(){
        let pound = document.getElementById("bitcoinToPound");
        const url = "https://blockchain.info/ticker";
        const response = await fetch(url);
        const bitcoinData = await response.json();
        let endResult = new Intl.NumberFormat("de-De", { style: "decimal" }).format(bitcoinData);
        pound.innerHTML = bitcoinData["GBP"]["15m"] +  " " + bitcoinData["GBP"]["symbol"];
    }

    showCurrency(){
        this.showBitcoinInEuro();
        this.showBitcoinInUsDollar();
        this.showBitcoinInAud();
        this.showBitcoinInNzd();
        this.showBitcoinInGbP();
    }

    componentDidMount(){
        window.addEventListener("load", this.showCurrency());
    }
  
    render(){
        return(
            <div className="page">
                <br></br>          
                <h1>Home</h1>
                <br></br>
                <Jumbotron>
                    <p>1 Bitcoin entspricht...</p>
                    <ListGroup>
                        <ListGroupItem>Euro: <span id="bitcoinToEuro"></span></ListGroupItem>
                        <ListGroupItem>US-Dollar: <span id="bitcoinToUsDollar"></span></ListGroupItem>
                        <ListGroupItem>Australische Dollar: <span id="bitcoinToAud"></span></ListGroupItem>
                        <ListGroupItem>Neuseeländische Dollar: <span id="bitcoinToNzd"></span></ListGroupItem>
                        <ListGroupItem>Pfund: <span id="bitcoinToPound"></span></ListGroupItem>
                    </ListGroup>
                    <br></br>
                </Jumbotron>
            </div>
        );
    }
}

export default Home;