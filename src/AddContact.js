import React, { Component } from 'react';
import Header from './Header'
import './App.css';
import './public/icons/icons.svg'


class AddContact extends Component {
  render() {
    return (
      <div>
        <Header header="Add Contact" />
        <div className="container">
          <div className="container" style={{ background: '#7a7b7b', padding: '40px' }}>
            <form>
              <div class="form-group">
                <label htmlFor="contact-name">Name</label>
                <input type="text" class="form-control" id="contact-name" />
              </div>
              <div class="form-group">
                <label htmlFor="dob">DOB</label>
                <input type="date" class="form-control" id="dob" />
              </div>

              <div class="form-group">

                <label htmlFor="mobile-number">Mobile Number</label>
                <div className="row">
                  <div className="col-11"><input type="number" class="form-control" id="mobile-number" /></div>
                  <div className="col-1" style={{ alignSelf: 'center' }}><svg class="bi bi-plus-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
                  </svg></div>
                </div>
              </div>
              <div className="form-group">
              <label htmlFor="email">Email</label>
                <div className="row">
                  <div className="col-11"><input type="email" class="form-control" id="email" /></div>
                  <div className="col-1" style={{ alignSelf: 'center' }}><svg class="bi bi-plus-circle-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
                  </svg></div>
                </div>
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddContact;
