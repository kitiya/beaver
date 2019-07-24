import React, { Component } from 'react';
import AddUsers from './AddUsers';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/users')
        .then(response => response.json())
        .then(data => this.setState({users: data}))
    }

    render() {

        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-3">
                        <AddUsers />
                    </div>
                    <div className="col-9">
                        <div className="row justify-content-center">
                            {this.state.users.map((item) => (
                                <div key={item.id} className="card mr-1 mb-1 col-md-3">
                                    <div className="card-body text-center text-truncate">
                                        <h5 className="card-title  text-truncate">{item.firstName} {item.lastName}</h5>
                                        <img className="card-img-top d-block mx-auto w-75" src="https://images-na.ssl-images-amazon.com/images/I/81j1RXhpCtL.jpg" alt="Card" />
                                        <a href="/" className="card-link">{item.email}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}