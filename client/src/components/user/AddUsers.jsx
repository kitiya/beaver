import React, { Component } from 'react';

export default class AddUsers extends Component {
    
    submitUser(event) {
        event.preventDefault();

        let user = {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value,
            role: this.refs.role.value,
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
            <div className="w-100">
                <h3 className="m-3 text-center text-info border border-info border-top-0 border-left-0 border-right-0">Add User</h3>
                <form onSubmit={this.submitUser.bind(this)} className="mx-auto pt-0 px-3">
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
                    <div className="form-group">
                            <label htmlFor="roleSelect">Role</label>
                            <select className="form-control" id="roleSelect"
                                    defaultValue={'OTHER'}
                                    ref="role"
                            >
                                <option value="OTHER">Select one...</option>    
                                <option value="ADMIN">Admin</option>
                                <option value="USER">User</option>
                            </select>
                        </div>
                    <div className="row">
                        <button type="submit" className="btn btn-info  mx-auto" name="action">Sign in</button>
                    </div>
                </form>
            </div>
        )
    }
}