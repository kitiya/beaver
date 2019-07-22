import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
    state = {
        isAuthenticated: false,
    };

    toggleAuth = () => {
        this.setState((prevSate, props) => {
            return {isAuthenticated: !prevSate.isAuthenticated};
        });
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}