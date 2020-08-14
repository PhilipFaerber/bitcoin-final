import React, { Component } from "react"
import { Jumbotron } from "react-bootstrap";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class Details extends Component{

    constructor(props){
        super(props);
    }

    async showMarketcap(){
        let url = "https://blockchain.info/q/marketcap";
        let marketcapPres = document.getElementById("marketcap");
        const response = await fetch(url);
        const marketcap = await response.json();
        let endResult = new Intl.NumberFormat("de-De", { style: "decimal" }).format(marketcap);
        marketcapPres.innerHTML = "akuell: " + endResult;
    }

    async showUnconfTransactions(){
        let url = "https://blockchain.info/q/unconfirmedcount";
        let unconfTransactions = document.getElementById("unconfTransactions");
        const response = await fetch(url);
        const unconfTrans = await response.json();
        let endResult = new Intl.NumberFormat("de-De", { style: "decimal" }).format(unconfTrans);
        unconfTransactions.innerHTML = "aktuell: " + endResult;
    }

    async showHashrate(){
        let url = "https://blockchain.info/q/hashrate";
        let hashrateId = document.getElementById("hashrate");
        const response = await fetch(url);
        const hashrate = await response.json() * 1000;
        let endResult = new Intl.NumberFormat("de-De", { style: "decimal" }).format(hashrate);
        hashrateId.innerHTML = "aktuell: " + endResult + " TH/s";
    }

    async showTransaction(){
        let url = "https://blockchain.info/q/24hrtransactioncount";
        let transactionsId = document.getElementById("transactions");
        const response = await fetch(url);
        const transactions = await response.json();
        let endResult = new Intl.NumberFormat("de-De", { style: "decimal" }).format(transactions);
        transactionsId.innerHTML = "aktuell: " + endResult;
    }

    async showWeightedPrices(){
        let url = "https://blockchain.info/q/24hrprice";
        let weightedPriceId = document.getElementById("weightedPrice");
        const response = await fetch(url);
        const weightedPrice = await response.json();
        let endResult = new Intl.NumberFormat("de-De", { style: "decimal" }).format(weightedPrice);
        weightedPriceId.innerHTML = "aktuell: " + endResult;
    }

    componentDidMount(){
        window.addEventListener("load", 
        this.showMarketcap(), 
        this.showUnconfTransactions(), 
        this.showHashrate(),
        this.showTransaction(),
        this.showWeightedPrices()
        ); 
    }

    render(){
        return(
            <div className="page">
                <br></br>
                <h1>Details & News</h1>
                <br></br>
                <Jumbotron>
                    <Row>
                        <Col xs="6">
                            <Card>
                                <CardBody>
                                <CardTitle><h4>Marktkapitalisierung</h4></CardTitle>
                                <br></br>
                                <CardSubtitle id="marketcap"></CardSubtitle>
                                <br></br>
                                <CardText>
                                    Die Marktkapitalisierung ergibt sich aus dem Produkt von Bitcoin-Wert und der sich aktuell im Umlauf befindenen Anzahl an Bitcoins
                                    <br></br>
                                    Marktkapitalisierung = Bitcoin Kurs * Anzahl Bitcoins
                                </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="6">
                            <Card>
                                <CardBody>
                                <CardTitle><h4>schwebende Transaktionen</h4></CardTitle>
                                <br></br>
                                <CardSubtitle id="unconfTransactions"></CardSubtitle>
                                <br></br>
                                <CardText>
                                    Gibt die Anzahl der momentan schwebenden (unbestätigten) Transaktionen an.
                                </CardText>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col xs="6">
                                <Card>
                                    <CardBody>
                                    <CardTitle><h4>Hashrate</h4></CardTitle>
                                    <br></br>
                                    <CardSubtitle id="hashrate"></CardSubtitle>
                                    <br></br>
                                    <CardText>
                                        Die Hashrate ist eine Maßeinheit für die Rechenleistung des Bitcoin-Netzwerks. 
                                        Eine Hashrate von 10 TH/s bedeutet, dass 10 Billionen Berechnungen pro Sekunde durchgeführt werden.
                                    </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="6">
                                <Card>
                                    <CardBody>
                                    <CardTitle><h4>Transaktionen</h4></CardTitle>
                                    <br></br>
                                    <CardSubtitle id="transactions"></CardSubtitle>
                                    <br></br>
                                    <CardText>
                                        Anzahl der Transaktionen innerhalb der letzten 24 Stunden.
                                    </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br></br>
                        <Row>
                            <Col xs="6">
                                <Card>
                                    <CardBody>
                                    <CardTitle><h4>gewichteter Durchschnitsspreis</h4></CardTitle>
                                    <br></br>
                                    <CardSubtitle id="weightedPrice"></CardSubtitle>
                                    <br></br>
                                    <CardText>
                                        Gibt den gewichteten Durchschnitsspreis eines Bitcoin im Verhältnis zum Gesamtvolumen innerhalb eines vorgegebenen Zeithorizonts an.
                                    </CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                </Jumbotron>
               
            </div>
        );
    }
}

export default Details;