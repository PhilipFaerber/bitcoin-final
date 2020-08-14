import React, { Component } from "react";
import { Nav, Navbar} from "react-bootstrap";
import "../App.css";
import styled from "styled-components";
import { render } from "@testing-library/react";

function selectNav(){
    let selection = document.getElementsByClassName("selectNav");
    this.setState({
        bgColor: "orange"
    })
}

const Styles = styled.div`
    .navbar{
        background-color: #d8d8d8;
    }

    .navbar-brand{
        color: orange;
        font-weight: bold;
    }

    .nav-item: hover{
        border-bottom: 4px solid orange;
    } 
    
    .nav-item > .acive > a{
        border-bottom: 4px solid orange;
    }
    
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" fixed="top"> 
            <Navbar.Brand href="/"><img id="bitcoinIcon" src="https://cdn.pixabay.com/photo/2015/08/27/11/20/bitcoin-910307_960_720.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>itcoin</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" > 
                    <Nav.Item><Nav.Link className="selectNav" href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="selectNav" href="/details">Details & News</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="selectNav" href="/calculator">Umrechner</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="selectNav" href="/chart">Diagramm</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="selectNav" href="/myBitcoin">Meine Bitcoin</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

