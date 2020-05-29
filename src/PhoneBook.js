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
        this.getContacts();
    }
    getContacts = async () => {
        try {
            console.log("Running1")
            const response = await fetch("http://localhost:5000/contacts");
            const jsonData = await response.json();
            console.log(jsonData);
            this.setState({ contactsList: jsonData })
        } catch (error) {
            console.error(error.message)
        }
    }
    
    // deleteSuscriberHandler = (id) => {
    //     let subscribersList = this.state.subscriberList
    //     let subscriberIndex = 0
    //     subscribersList.forEach(function (subscriber, index) {
    //         if (subscriber.id === id) {
    //             subscriberIndex = index
    //         }
    //     }, this)

    //     subscribersList.splice(subscriberIndex, 1)
    //     this.setState({ subscriberList: subscribersList })
    // }
    render() {
        return (
            <div>
                <Router>
                    <div className="main-container">
                        <Route exact path='/' render={(props) => <ShowContacts {...props} contactsList={this.state.contactsList} deleteSuscriberHandler={this.deleteSuscriberHandler} />} />
                        <Route exact path='/add' render={({ history }, props) => <AddContact history={history} {...props} getContacts={this.getContacts} />} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default PhoneBook;