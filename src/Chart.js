import React, { Component } from "react"
import { Jumbotron } from "react-bootstrap";
import Line from "react-chartjs-2";

class Chart extends Component{

    constructor(props){
        super(props);
    }

    /*LineChart () {
        const data = {
          labels: [
            'Jan',
            'Feb',
            'Mar',
            'April',
            'May'
          ],
          datasets: [
            {
              label: 'Sales 2020 (M)',
              data: [3, 2, 2, 1, 5],
              borderColor: ['rgba(255, 206, 86, 0.2)'],
              backgroundColor: ['rgba(255, 206, 86, 0.2)'],
              pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
              pointBorderColor: 'rgba(255, 206, 86, 0.2)'
            },
            {
              label: 'Sales 2019 (M)',
              data: [1, 3, 2, 2, 3],
              borderColor: ['rgba(54, 162, 235, 0.2)'],
              backgroundColor: ['rgba(54, 162, 235, 0.2)'],
              pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
              pointBorderColor: 'rgba(54, 162, 235, 0.2)'
            }
          ]
        }
      
        const options = {
          title: {
            display: true,
            text: 'Line Chart'
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0,
                  max: 6,
                  stepSize: 1
                }
              }
            ]
          }
        }
      
      }*/
    
    render(){
        return(
            <div className="page">
                <br></br>
                <h1>Diagramm</h1>
                <br></br>
                <Jumbotron>
                    <Line></Line>
                </Jumbotron>
            </div>
        );
    }
}

export default Chart;