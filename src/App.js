import React, { Component } from 'react'
import './App.css';

//import Carousel_Hom from './Components/Carousel_Hom.js';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Components/Home';
import History from './Components/History';
import Vision from './Components/Vision';
import Vaccancy from './Components/Vaccancy';
import Mission from './Components/Mission';
import Headerbar from './Components/Headerbar';
import Footerpage from './Components/FooterPage';
import Registration from './Components/Registration';

export default class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Headerbar/>
         
          <Route exact path="/mathonedemo2"> <Home/></Route>
          <Route path="/mathonedemo2/history" ><History/></Route>
          <Route path="/mathonedemo2/vision" ><Vision/></Route>
          <Route path="/mathonedemo2/mission" ><Mission/></Route>
          <Route path="/mathonedemo2/careers/Vaccancy" ><Vaccancy/></Route>
          <Route path="/mathonedemo2/careers/Registration" ><Registration/></Route>
          
        </div>
      </Router>
    )
  }
}

