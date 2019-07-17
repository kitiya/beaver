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
                <div className="row">
                    <AddUsers />
                </div>
                <div className="row">
                    <hr />
                </div>
                <div className="row">
                    {this.state.users.map((item) => (
                        <SingleUser key={item.id} item={item} />
                    ))}
                </div>
            </div>
        )
    }
}