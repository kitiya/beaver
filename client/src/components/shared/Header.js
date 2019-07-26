import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import DarkLogo from '../../static/images/logo/logo03_dark.png'
import AuthToggle from './AuthToggle';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthContext } from '../../contexts/AuthContext';

let logoStyle = {
    width: '45px',
    height: 'auto',
    marginRight: '10px',
}

const HeaderLink = ({children, ...props}) => (
    <NavLink
        exact
        className="nav-item nav-link ml-2 text-center"
        // activeClassName="active text-white border-info border border-5 border-top-0 border-left-0 border-right-0"
        activeClassName="active bg-info text-white border border-info rounded"
        {...props}
    >
        {children}
    </NavLink>
);

class Header extends Component {
    static contextType = ThemeContext;

    render() {
        return (
            <AuthContext.Consumer>{(authContext) => (
                <header>
                    <nav className="navbar navbar-expand-md pt-0 pb-0 text-uppercase navbar-dark bg-dark">
                        <div className="container-fluid justify-content-between">

                            <NavLink className="navbar-brand" to="/">
                                <img alt="logo" style={logoStyle} src={DarkLogo} />
                            </NavLink>

                            <button className="navbar-toggler my-2" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <section className="row">
                                    <div className="navbar-nav">
                                        <HeaderLink to="/">Home</HeaderLink>
                                        <HeaderLink to="/activities">Activity</HeaderLink>
                                        <HeaderLink to="/providers">Provider</HeaderLink>
                                        <HeaderLink to="/categories">Category</HeaderLink>
                                        <HeaderLink to="/users">User</HeaderLink>
                                        <HeaderLink to="/tutorials">Sandbox</HeaderLink>
                                    </div> {/* navbar-nav <ul> */}
                                </section>
                                <section class="d-block ml-auto">
                                    <div><AuthToggle /></div>
                                </section>
                            </div> {/* id="navbarSupportedContent" */}

                        </div> {/* .container-fluid */}
                    </nav>
                </header>
            )}</AuthContext.Consumer>
        );
    }
}

export default Header;