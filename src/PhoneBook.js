import React, { Component  } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowContacts from './ShowContacts';
import AddContact from './AddContact';

class PhoneBook extends Component {
    constructor() {
        super();
        this.state = {
            contactList: []
        }
    }
    componentDidMount(){
        this.ShowContacts();
    }

    ShowContacts = async () => {
        try {
            const response = await fetch("http://localhost:5000/contacts");
            const jsonData = await response.json();
            this.setState({ contactList: jsonData })
        } catch (err) {
            console.error(err.message)
        }
    } 

    
    // addSuscriberHandler = (newSuscriber) => {
    //     let subscribersList = this.state.subscriberList;
    //     if (subscribersList.length > 0) {
    //         newSuscriber.id = subscribersList[subscribersList.length - 1].id + 1;
    //     } else {
    //         newSuscriber.id = 1;
    //     }
    //     subscribersList.push(newSuscriber)
    //     this.setState({ subscriberList: subscribersList })
    // }
    deleteSuscriberHandler = (id) => {
        let contactList = this.state.contactList
        let subscriberIndex = 0
        contactList.forEach(function (subscriber, index) {
            if (subscriber.id === id) {
                subscriberIndex = index
            }
        }, this)

        contactList.splice(subscriberIndex, 1)
        this.setState({ contactList: contactList })
    }
    render() {
        return (
            <div>
                <Router>
                    <div className="main-container">
                        <Route exact path='/' render={(props) => <ShowContacts {...props} contactList={this.state.contactList} deleteSuscriberHandler={this.deleteSuscriberHandler} />} />
                        <Route exact path='/add' render={({ history }, props) => <AddContact history={this.history} {...props} ShowContacts = {this.ShowContacts} />} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default PhoneBook;