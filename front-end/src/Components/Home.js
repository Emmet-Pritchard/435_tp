import React from 'react'
import { Badge, Card } from 'react-bootstrap';
// eslint-disable-next-line
import Chart from 'chart.js/auto';
// eslint-disable-next-line
import { Line, Bar, Scatter, Doughnut } from 'react-chartjs-2'
// eslint-disable-next-line
import faker from 'faker';

const DELIMITERS = /\W+/;

function Home(props) {

    let darkMode = {
        color: '#fff', 
        fontSize: '40px', 
        fontWeight: '400',
    }

    function handleOnChange(e){
        var event = e.target.value;
        event = event.trim();
        var text = event.split(DELIMITERS);
        var validWords = 0;
        for(let i of text){
            if(i !== ""){
                validWords += 1;
            }
        }
        props.setWordCount(validWords);
    }

    return (
        <div className="main" id="main">
            <br/>
            <div className="container my-5">
                <h1 className="text-center" style={darkMode}>Speech Timer - word counter and speech time calculator</h1>
                <br/>
                <hr/>
                <textarea
                    className="form-control"
                    id="text"
                    rows="10"
                    style={{backgroundColor: '#ede8e8'}}
                    placeholder="Paste text block or begin typing to begin calculations..."
                    onChange={(e) => handleOnChange(e)}
                ></textarea>
                <br/>
                <h1 className="text-center" style={darkMode}>Summary of the Text</h1>
                <br/>
                <div className="d-flex justify-content-md-around justify-content-around">
                    <Badge bg="dark">Word Count: {props.wordCount}</Badge>
                    <Badge bg="dark">Speech Time: {props.speechLength}</Badge>
                </div>
            </div>
            <div className="d-flex justify-content-md-around justify-content-around">
                <Card>
                    <Card.Header as="h5">Average Word Length</Card.Header>
                    <Card.Body>
                        <Bar
                            data={{
                                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                                datasets: [
                                    {
                                    label: "Scatter Dataset",
                                    data: [10, 13, 5, 7, 14, 25],
                                    fill: true,
                                    backgroundColor: "DarkOliveGreen",                                    },
                                    {
                                    label: "Second dataset",
                                    data: [33, 25, 35, 51, 54, 76],
                                    fill: false,
                                    backgroundColor: "GoldenRod",                                    }
                                ]
                            }}
                            options={{
                                responsive: true
                            }}
                        />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header as="h5">Most Common Words</Card.Header>
                    <Card.Body>
                        <Doughnut
                            data={{
                                labels: [
                                    'Red',
                                    'Blue',
                                    'Yellow'
                                  ],
                                  datasets: [{
                                    label: 'My First Dataset',
                                    data: [300, 50, 100],
                                    backgroundColor: [
                                      'rgb(255, 99, 132)',
                                      'rgb(54, 162, 235)',
                                      'rgb(255, 205, 86)'
                                    ],
                                    hoverOffset: 4
                                  }]
                            }}
                            options={{
                                responsive: true
                            }}
                        />
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Header as="h5">Average Speech Length</Card.Header>
                    <Card.Body>
                        <Scatter
                            data={{
                                datasets: [
                                    {
                                    label: "Scatter Dataset",
                                    data: [
                                        {x: 2, y: 10}, {x: 3, y: 15},{x: 5, y: 13},{x: 13, y: 25},{x: 10, y: 22},
                                        {x: 7, y: 18},{x: 9, y: 19},{x: 10, y: 16},{x: 11, y: 21},{x: 16, y: 26},
                                        {x: 14, y: 16},{x: 7, y: 20},{x: 13, y: 24},{x: 17, y: 27},{x: 15, y: 31},
                                    ],
                                    // fill: true,
                                    backgroundColor: "LightCoral",
                                    borderColor: "IndianRed",
                                    },
                                ]
                            }}
                            options={{
                                responsive: true
                            }}
                        />
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Home