import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Details from "./Details";
import Calculator from "./Calculator";
import Chart from "./Chart";
import MyBitcoin from "./MyBitcoin";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <NavigationBar/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route path="/details" component={ Details} />
              <Route path="/calculator" component={ Calculator } />
              <Route path="/chart" component={ Chart } />
              <Route path="/myBitcoin" component={ MyBitcoin } />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
