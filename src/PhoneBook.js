import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowContacts from './ShowContacts';
import AddContact from './AddContact';

class PhoneBook extends Component {
    constructor() {
        super();
        this.state = {
            subscriberList: []
        }
    }
    addSuscriberHandler = (newSuscriber) => {
        let subscribersList = this.state.subscriberList;
        if (subscribersList.length > 0) {
            newSuscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSuscriber.id = 1;
        }
        subscribersList.push(newSuscriber)
        this.setState({ subscriberList: subscribersList })
        console.log(this.state.subscriberList)
    }
    deleteSuscriberHandler = (id) => {
        let subscribersList = this.state.subscriberList
        let subscriberIndex = 0
        subscribersList.forEach(function(subscriber , index){
            if(subscriber.id === id){
                subscriberIndex = index
            }
        } , this)

        subscribersList.splice(subscriberIndex , 1)
        this.setState({subscriberList : subscribersList })
    }
    render() {
        return (
            <div>
                <Router>
                    <div className="main-container">
                        <Route exact path='/' render={(props) => <ShowContacts {...props} subscriberList={this.state.subscriberList} deleteSuscriberHandler={this.deleteSuscriberHandler}/>} />
                        <Route exact path='/add' render={({history},props) => <AddContact history = {history} {...props} addSuscriberHandler={this.addSuscriberHandler} />} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default PhoneBook;