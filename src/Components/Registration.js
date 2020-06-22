import React, { Component } from 'react'
import './Registration.css'
import FooterPage from './FooterPage.js';
import {Jumbotron, Container} from 'react-bootstrap';


class Registration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            ContactNo: "",
            gender: "",


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    contacthandler = (event) => {
        this.setState({
            ContactNo: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    handleSubmit = (event) => {
        if(( this.state.firstName!="" ) && ( this.state.lastName!="") && ( this.state.ContactNo!="") && ( this.state.gender!=""))
         {   alert(` Registered Successfully !!!!`)
            console.log(this.state);
            this.setState({
                firstName: "",
                lastName: "",
                ContactNo: '',
                gender: "",
            })
        event.preventDefault()
        } 
        else
        {
            alert('Some Field are Missing ')
            event.preventDefault()
        }  
    }




    render() {
        return (
            <div>
                <Container style={{ backgroundColor:" rgb(202, 198, 240)" }}>
                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration</h1>
                    <label>FirstName :</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName..." /><br />
                    <label>Contact No :</label> <input type="Contact" value={this.state.password} onChange={this.passwordhandler} placeholder="add +91..." /><br />
                    <label>Gender :</label><select onChange={this.genderhandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>
                </Container>

                <FooterPage/>
                
            </div>
            
        )
    }
}

export default Registration;