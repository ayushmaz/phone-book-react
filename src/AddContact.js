import React, { Component } from 'react';
import Header from './Header'
import './App.css';
import './public/icons/icons.svg'


class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: '',
      dob: '',
      phone: '',
      email: ''
    }
  }

  inputChangedHandler = e => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state)
  }

  onFormSubmitted = async (e) => {
    e.preventDefault()
    //this.props.addSuscriberHandler(this.state)
    this.setState({ id: 0, name: '', phone: '' , dob: '' , email: '' })
    const state = this.state
    state[e.target.name] = e.target.value;
    try {
      const response = await fetch("http://localhost:5000/contacts",{
        method :"POST",
        headers: {"Content-Type" : "application/json"},
        body : JSON.stringify(state)
      })
      this.props.getContacts()
      console.log(response)
    } catch (error) {
      console.error(error.message);
    }
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <Header header="Add Contact" />
        <div className="container">
          <div className="container" style={{ background: '#7a7b7b', padding: '40px' }}>
            <form onSubmit = {this.onFormSubmitted.bind(this)}>
              <div className="form-group">
                <label htmlFor="contact-name">Name</label>
                <input type="text" className="form-control" name="name" id="contact-name" onChange={this.inputChangedHandler}/>
              </div>
              <div className="form-group">
                <label htmlFor="dob">DOB</label>
                <input type="date" className="form-control" name="dob" id="dob" onChange={this.inputChangedHandler}/>
              </div>
              <div className="form-group">
                <label htmlFor="mobile-number">Mobile Number</label>
                <div className="row">
                  <div className="col-11"><input type="number" name="phone" className="form-control" id="mobile-number" onChange={this.inputChangedHandler}/></div>
                  <div className="col-1" style={{ alignSelf: 'center' }}><svg className="bi bi-plus-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
                  </svg></div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="row">
                  <div className="col-11"><input type="email" name="email"className="form-control" id="email" onChange={this.inputChangedHandler}/></div>
                  <div className="col-1" style={{ alignSelf: 'center' }}><svg className="bi bi-plus-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
                  </svg></div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
