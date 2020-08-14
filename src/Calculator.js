import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./App.css";

class Calculator extends Component{
    
    constructor(props){
        super(props);
        this.convertEuroToBitcoin = this.convertEuroToBitcoin.bind(this);
        this.convertUsDollarToBitcoin = this.convertUsDollarToBitcoin.bind(this);
        this.convertAudToBitcoin= this.convertAudToBitcoin.bind(this);
        this.convertNzdToBitcoin = this.convertNzdToBitcoin.bind(this);
        this.convertGbpToBitcoin = this.convertGbpToBitcoin.bind(this);
        this.checkCurrencySelection = this.checkCurrencySelection.bind(this);
    }

   async convertEuroToBitcoin(){
        const url = "https://blockchain.info/ticker";
        const response = await fetch(url);
        const bitcoinData = await response.json();
        let bitcoinInEuro = bitcoinData["EUR"]["15m"];
        let inputCurrency = document.getElementById("inputCurrency").value;
        let solution = inputCurrency / bitcoinInEuro;
        solution = new Intl.NumberFormat("de-De", { style: "decimal" }).format(solution);
        let showSolution = document.getElementById("showSolution");
        showSolution.innerHTML = solution + " BTC";
   }

    async convertUsDollarToBitcoin(){
        const url = "https://blockchain.info/ticker";
        const response = await fetch(url);
        const bitcoinData = await response.json();
        let bitcoinInUSD = bitcoinData["USD"]["15m"];
        let inputCurrency = document.getElementById("inputCurrency").value;
        let solution = inputCurrency / bitcoinInUSD;
        solution = new Intl.NumberFormat("de-De", { style: "decimal" }).format(solution);
        let showSolution = document.getElementById("showSolution").innerHTML;
        showSolution = solution + " BTC";
        return showSolution;
    }

    async convertAudToBitcoin(){
        const url = "https://blockchain.info/ticker";
        const response = await fetch(url);
        const bitcoinData = await response.json();
        let bitcoinInAud = bitcoinData["AUD"]["15m"];
        let inputCurrency = document.getElementById("inputCurrency").value;
        let solution = inputCurrency / bitcoinInAud;
        solution = new Intl.NumberFormat("de-De", { style: "decimal" }).format(solution);
        let showSolution = document.getElementById("showSolution");
        showSolution.innerHTML = solution + " BTC";
    }

    async convertNzdToBitcoin(){
        const url = "https://blockchain.info/ticker";
        const response = await fetch(url);
        const bitcoinData = await response.json();
        let bitcoinInNzd= bitcoinData["NZD"]["15m"];
        let inputCurrency = document.getElementById("inputCurrency").value;
        let solution = inputCurrency / bitcoinInNzd;
        solution = new Intl.NumberFormat("de-De", { style: "decimal" }).format(solution);
        let showSolution = document.getElementById("showSolution");
        showSolution.innerHTML = solution + " BTC";
   }

    async convertGbpToBitcoin(){
        const url = "https://blockchain.info/ticker";
        const response = await fetch(url);
        const bitcoinData = await response.json();
        let bitcoinInGbp = bitcoinData["GBP"]["15m"];
        let inputCurrency = document.getElementById("inputCurrency").value;
        let solution = inputCurrency / bitcoinInGbp;
        solution = new Intl.NumberFormat("de-De", { style: "decimal" }).format(solution);
        let showSolution = document.getElementById("showSolution");
        showSolution.innerHTML = solution + " BTC";
    }

    checkCurrencySelection(){
        if(document.getElementById("wishedCurrency").value == "eur"){
            this.convertEuroToBitcoin();
        }
        if(document.getElementById("wishedCurrency").value == "usd"){
            this.convertUsDollarToBitcoin();
        }
        if(document.getElementById("wishedCurrency").value == "aud"){
            this.convertAudToBitcoin();
        }
        if(document.getElementById("wishedCurrency").value == "nzd"){
            this.convertNzdToBitcoin();
        }
        if(document.getElementById("wishedCurrency").value == "gbp"){
            this.convertGbpToBitcoin();
        }
    }

    render(){
        return(
            <div className="page">
                <br></br>
                <h1>Umrechner</h1>
                <br></br>
                <Jumbotron>

                    <Row>
                    <Col><Input type="text" id="inputCurrency" placeholder="Betrag" ></Input></Col>
                    <Col>
                    <Input type="select" name="select" id="wishedCurrency">
                        <option value="eur">EUR</option>
                        <option value="usd">USD</option>
                        <option value="aud">AUD</option>
                        <option value="nzd">NZD</option>
                        <option value="gbp">GBP</option>
                    </Input></Col>
                    </Row>
                
                    <br></br>

                    <p id="showSolution" fontWeight="bold">0 BTC</p>

                    <Button id="button" onClick={ this.checkCurrencySelection }>umrechnen</Button>

                </Jumbotron>
                
            </div>
        );
    }
}

export default Calculator;

