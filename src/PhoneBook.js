import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowContacts from './ShowContacts';
import AddContact from './AddContact';

class PhoneBook extends Component {
    constructor() {
        super();
        this.state = {
            contactsList: []
        }
    }

    componentDidMount(){
        console.log("component")
        this.getContacts();
    }
    getContacts = async () => {
        try {
            const response = await fetch("http://localhost:5000/contacts");
            const jsonData = await response.json();
            this.setState({ contactsList: jsonData })
            //console.log(this.state)
        } catch (error) {
            console.error(error.message)
        }
    }


    deleteContact = async(id) => {
        try {
            this.setState({contactsList : this.state.contactsList.filter(contact => contact.id !== id)});
            const response = await fetch(`http://localhost:5000/contacts/${id}`,{method:"DELETE"});
            
            
        } catch (error) {
            console.error(error.message)
        }
    }
    render() {
        return (
            <div>
                <Router>
                    <div className="main-container">
                        <Route exact path='/' render={(props) => <ShowContacts {...props} getContacts={this.getContacts} contactsList={this.state.contactsList} deleteContact={this.deleteContact} />} />
                        <Route exact path='/add' render={({ history }, props) => <AddContact history={history} {...props} getContacts={this.getContacts} />} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default PhoneBook;