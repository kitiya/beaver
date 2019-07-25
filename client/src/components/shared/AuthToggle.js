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

/*
import React, { Component } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';

export default class AuthToggle extends Component {
    //static contextType = AuthContext;
    // TODO: update isLightTheme when ThemeContext is clicked

    render() {
        return(
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isLightTheme } = ThemeContext;
                    const { isAuthenticated, toggleAuth } = AuthContext;

                    return (
                        <span
                            className=
                            {   isLightTheme ?
                                "text-dark my-2 my-sm-0 mr-3" :
                                "text-white my-2 my-sm-0 mr-3"
                            }
                            onClick={toggleAuth}
                        >
                            {isAuthenticated ? "log out" : "log in"}
                        </span>
                    );
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        );
    }
}
*/