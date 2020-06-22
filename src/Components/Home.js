import React, { Component } from 'react';
import './Home.css'
import {Link} from 'react-router-dom';
import {Jumbotron, Container ,Row,Col,Image,Button} from 'react-bootstrap';
import Carousel_Hom from './Carousel_Hom.js';
import FooterPage from './FooterPage.js';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel_Hom/>
                <Container>
                    <Jumbotron>
                    <div className="col-md-12">
                    
                        <h2 style={{'text-align': "center"}}> What we Provide</h2>
                        <div className="row">
                            <div className="col-md-6">
                                <p>MathsOne is a unique Institution that makes every aspect of learning Math - Fun, Associated, Engaging, Interesting, Meaningful and Practical.</p>
                                <p>Students are taken into a Math journey through a series of Worksheets, Projects, Everyday Math, Case Studies, Exercises, Puzzles and Logical Reasoning, in addition to the Workbooks comprised of an array of more than 200 problems per Chapter as per their regular academic syllabus, aggregating to practice of a cumulative number of more than 3500 problems per Class per Year.</p>
                                <p>Children benefit from the best of the special, systematic and specifically developed unique course materials through extensive Research based on Bloom’s Taxonomy which are arranged in the form of Worksheets, Workbooks, Puzzles, Reasoning, Objective Type Assortments, Olympiad, Practice and Remedial Sessions, Math Lab, Projects and many more</p>
                            </div>

                            <div className="col-md-6">
                                <p> And Again MathsOne is a unique Institution that makes every aspect of learning Math - Fun, Associated, Engaging, Interesting, Meaningful and Practical.</p>
                                <p>Students are taken into a Math journey through a series of Worksheets, Projects, Everyday Math, Case Studies, Exercises, Puzzles and Logical Reasoning, in addition to the Workbooks comprised of an array of more than 200 problems per Chapter as per their regular academic syllabus, aggregating to practice of a cumulative number of more than 3500 problems per Class per Year.</p>
                                <p>Children benefit from the best of the special, systematic and specifically developed unique course materials through extensive Research based on Bloom’s Taxonomy which are arranged in the form of Worksheets, Workbooks, Puzzles, Reasoning, Objective Type Assortments, Olympiad, Practice and Remedial Sessions, Math Lab, Projects and many more</p>
                            </div>
                          </div>
                    </div>      
                    </Jumbotron>
                </Container>
                <Container>
                    
                    <Jumbotron>
                        <Link to="/about">
                            <Button bsStyle="primary">About</Button>
                        </Link>
                    </Jumbotron>
                    </Container>
                    <FooterPage/>
            </div>
        )
    }
}
