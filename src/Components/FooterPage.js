import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
//import Socialmedia from './Socialmedia.js'
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import './FooterPage.css'

const FooterPage = () => {
  return (
    <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
      <div style={{ backgroundColor: "#6351ce" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 white-text">
                Get connected with us on social networks!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right"> 
            <a className="fb-ic ml-0">
                <i className="fab fa-facebook-f white-text mr-lg-4">
                <SocialIcon url="https://www.facebook.com/pages/category/Science--Technology---Engineering/Miltek-Technologies-Pvt-Ltd-103104538089199/"  /> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter white-text mr-lg-4">
                <SocialIcon url= "https://twitter.com/Miltek_Techno"/> </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in white-text mr-lg-4">
                <SocialIcon url="https://in.linkedin.com/" /> </i>
              </a>

            </MDBCol>
            
            
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Company name</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              Here you can use rows and columns here to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Our Services</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">Service1</a>
            </p>
            <p>
              <a href="#!">Service2</a>
            </p>
            <p>
              <a href="#!">Service3</a>
            </p>
            
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="#!">Your Account</a>
            </p>
            <p>
              <a href="#!">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!">Location</a>
            </p>
            <p>
              <a href="#!">Help</a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> miltek@co.in
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.miltek.co.in"> miltek.co.in </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;