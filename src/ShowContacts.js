import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom'

class ShowContacts extends Component {
    render() {
        return (
            <div>
                <Header header={"Phone Book"}></Header>
                <div className="container" style={{ marginTop: '30px' }}>
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" style={{ padding: '25px', fontSize: '1.15rem', marginBottom: '20px' }} />
                    <div class="accordion" id="accordionExample">
                        {this.props.subscriberList.map(sub => {
                            console.log(sub)
                            return <div className="card" key = {sub.id}>
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target={`#collapse${sub.id}`} aria-expanded="false" aria-controls={`collapse${sub.id}`}>
                                            <div className="row" >
                                                <div className="col-11" style={{ alignSelf: 'center' }}><h5>{sub.name}</h5></div>
                                                <div className="col-1"><button type="button" class="btn btn-danger">Delete</button></div>
                                            </div>
                                        </button>
                                    </h2>
                                </div>

                                <div id={`collapse${sub.id}`} class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
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
                    <Link to="/add"><button type="button" class="btn btn-success" style={{ marginTop: '20px' }}>Add</button></Link>
                </div>
            </div>
        );
    }
}

export default ShowContacts;