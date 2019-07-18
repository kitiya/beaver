import React, { Component } from 'react';
import SingleUser from './SingleUser';
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
                <div className="row mt-3 mx-auto">
                    <div className="col-3">
                        <AddUsers />
                    </div>
                    <div className="col-9">
                        <div className="row mr-1">
                            {this.state.users.map((item) => (
                                <SingleUser key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}