import React, { Component } from 'react';

export default class AddUsers extends Component {
    submitUser(event) {
        event.preventDefault();

        let user = {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value
        }

        fetch("http://localhost:8080/api/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
         })
         .then(response => response.json());

         window.location.reload();
    }

    render() {
        return (
            <form onSubmit={this.submitUser.bind(this)}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" ref="firstName" placeholder="First Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" ref="lastName" placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" ref="email" placeholder="name@example.com" />
                </div>
                <div className="row">
                    <button type="submit" className="btn btn-primary" name="action">Sign in</button>
                </div>
            </form>
        )
    }
}