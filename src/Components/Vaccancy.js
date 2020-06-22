import React, { Component } from 'react';
import './Vaccancy.css'
import FooterPage from './FooterPage.js';

export default class Vaccancy extends Component {
    render() {
        return (
            <div className="current">
               <img src={require("../assets/oops.jpg")}/>
                <h3 className="message" >Currently No Vaccancies Available</h3>
                <FooterPage/>
            </div>
        )
    }
}
