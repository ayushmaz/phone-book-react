import React, { Component } from 'react';
import Header from './Header';

class ShowContacts extends Component {
    render() {
        return (
            <div>
                <Header header={"Phone Book"}></Header>
                <div className="container" style={{ marginTop: '30px' }}>
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" style={{ padding: '25px', fontSize: '1.15rem', marginBottom:'20px' }} />
                    <div class="accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <div className="row" >
                                            <div className="col-11" style={{alignSelf:'center'}}><h5>Ayush Majumder</h5></div>
                                            <div className="col-1"><button type="button" class="btn btn-danger">Delete</button></div>
                                        </div>
                                    </button>
                                </h2>
                            </div>

                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <h6>DOB:- 20/12/1997</h6>
                                    <div className="row">
                                        <div className = "col-6">Mobile Number</div>
                                        <div className = "col-6">Email</div>
                                    </div>
                                    <div className="row">
                                        <div className = "col-6">7002273403</div>
                                        <div className = "col-6">majumdershuvu@gmail.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-success" style={{marginTop:'20px'}}>Add</button>
                </div>
            </div>
        );
    }
}

export default ShowContacts;