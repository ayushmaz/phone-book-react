import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom'

class ShowContacts extends Component {
    constructor(){
        super();
        this.state={
            query : ''
        }
    }

    updateSearch(e){
        const state = this.state;
        state[e.target.name] = e.target.value.substr(0,20);
        this.setState(state)
    }

    onDeletedClick = contactID => {
        this.props.deleteSuscriberHandler(contactID)
    }
    
    render() {
        let searchedContacts = this.props.contactList.filter(contact => contact.name.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1 )
        return (
            <div>
                <Header header={"Phone Book"}></Header>
                <div className="container" style={{ marginTop: '30px' }}>
                    <input className="form-control" type="text"  placeholder="Search" name = "query"onChange={this.updateSearch.bind(this)} style={{ padding: '25px', fontSize: '1.15rem', marginBottom: '20px' }} />
                    <div className="accordion" id="accordionExample">
                        {searchedContacts.map(sub => {
                            return <div className="card" key = {sub.id}>
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target={`#collapse${sub.id}`} aria-expanded="false" aria-controls={`collapse${sub.id}`}>
                                            <div className="row" >
                                                <div className="col-11" style={{ alignSelf: 'center' }}><h5>{sub.name}</h5></div>
                                                <div className="col-1"><button type="button" className="btn btn-danger" onClick={this.onDeletedClick.bind(this, (sub.id))}>Delete</button></div>
                                            </div>
                                        </button>
                                    </h2>
                                </div>

                                <div id={`collapse${sub.id}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                    <div className="card-body">
                                        <h6>DOB:- {sub.dob}</h6>
                                        <div className="row">
                                            <div className="col-6">Mobile Number</div>
                                            <div className="col-6">Email</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">{sub.phone}</div>
                                            <div className="col-6">{sub.email}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                    <Link to="/add"><button type="button" className="btn btn-success" style={{ marginTop: '20px' }}>Add</button></Link>
                </div>
            </div>
        );
    }
}

export default ShowContacts;