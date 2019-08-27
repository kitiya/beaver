import React from 'react'
import { NavLink } from 'react-router-dom';
import DarkLogo from '../../static/images/logo/logo03_dark.png'
import AuthToggle from '../shared/AuthToggle';
import { AuthContext } from '../../contexts/AuthContext';

export default function Header() {
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
                                    <HeaderLink to="/activities">Camps & Classes</HeaderLink>
                                    <HeaderLink to="/providers">[Provider]</HeaderLink>
                                    <HeaderLink to="/things-to-do">Things To Do</HeaderLink>
                                    <HeaderLink to="/events">Events</HeaderLink>
                                    <HeaderLink to="/blogs">Blog</HeaderLink>
                                    <HeaderLink to="/users">User</HeaderLink>
                                    <HeaderLink to="/tutorials">Sandbox</HeaderLink>
                                </div>
                            </section>
                            <section className="d-block ml-auto">
                                <div><AuthToggle /></div>
                            </section>
                        </div>

                    </div>
                </nav>
            </header>
        )}</AuthContext.Consumer>
    );
}

let logoStyle = {
    width: '45px',
    height: 'auto',
    marginRight: '10px',
}

let navLinkStyle = {
    fontSize: '1rem',
    letterSpacing: 'normal',
}

const HeaderLink = ({children, ...props}) => (
    <NavLink
        exact
        className="nav-item nav-link mx-2 text-center"
        style={navLinkStyle}
        activeClassName="active bg-info text-white border border-info rounded"
        {...props}
    >
        {children}
    </NavLink>
);