import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';

export default class Carousel_Hom extends Component {
    render() {
        return (
            <div>
                <Carousel>
  <Carousel.Item style={{'height':"400px",'width':"1350px",'padding':"30px"}}>
    <img style={{'height':"400px"}}
      className="d-block w-100"
      src={require("../assets/math11.jpg")}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{'height':"400px",'width':"1350px",'padding':"30px"}}>
    <img style={{'height':"400px"}}
      className="d-block w-100"
      src={require("../assets/math11.jpg" )}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{'height':"400px",'width':"1350px",'padding':"30px"}}>
    <img style={{'height':"400px"}}
      className="d-block w-100"
      src={require("../assets/math3.jpg")}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
        )
    }
}
