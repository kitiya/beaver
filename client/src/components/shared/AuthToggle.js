import React, { Component } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
//import { ThemeContext } from '../contexts/theme-context/ThemeContext';

export default class AuthToggle extends Component {
    static contextType = AuthContext;

    render() {
        const { isAuthenticated, toggleAuth } = this.context;
        return(
            <span
                className="text-white my-2 my-sm-0 mr-3"
                onClick={toggleAuth}
            >
                {isAuthenticated ? "log out" : "log in"}
            </span>
        );
    }
}