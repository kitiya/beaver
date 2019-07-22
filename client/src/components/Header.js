import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import DarkLogo from '../static/images/logo/logo03_dark.png'
import LightLogo from '../static/images/logo/logo01_white.png'
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../contexts/theme-context/ThemeContext';

let logoStyle = {
    width: '50px',
    height: 'auto'
}

const HeaderLink = ({children, ...props}) => (
    <NavLink
        exact
        className="nav-link"
        activeClassName="active bg-info text-white border border-info rounded"
        {...props}
    >
        {children}
    </NavLink>
);

const DropDownItemLink = ({children, ...props}) => (
    <NavLink
        exact
        className="dropdown-item"
        {...props}
    >
        { children }
    </NavLink>
);

class Header extends Component {
    static contextType = ThemeContext;

    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const { isLightTheme, light, dark } = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <nav className=
                        {   isLightTheme ?
                            "navbar navbar-expand-lg navbar-light bg-light pt-0 pb-0" :
                            "navbar navbar-expand-lg navbar-dark bg-dark pt-0 pb-0"
                        }
                    >
                        <div className="container d-flex justify-content-between">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <NavLink className="navbar-brand" to="/">
                                    <img    alt="logo"
                                            style={logoStyle}
                                            src={theme ? LightLogo : DarkLogo} />
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <HeaderLink to="/">Home</HeaderLink>
                                    </li>
                                    <li className="nav-item">
                                        <HeaderLink to="/activities">Activity</HeaderLink>
                                    </li>
                                    <li className="nav-item">
                                        <HeaderLink to="/providers">Provider</HeaderLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <HeaderLink to="/categories" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Category</HeaderLink>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <DropDownItemLink to="/catagories/swimming">Swimming</DropDownItemLink>
                                            <DropDownItemLink to="/catagories/art_craft">Art & Craft</DropDownItemLink>
                                            <DropDownItemLink to="/catagories/academic">Academic</DropDownItemLink>
                                            <DropDownItemLink to="/catagories/dance">Dance</DropDownItemLink>
                                            <DropDownItemLink to="/catagories/others">Others</DropDownItemLink>
                                            <div className="dropdown-divider"></div>
                                            <DropDownItemLink to="/catagories/summer_camp">Summer Camp</DropDownItemLink>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <HeaderLink to="/users">User</HeaderLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <HeaderLink to="/tutorials" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Tutorials
                                        </HeaderLink>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <DropDownItemLink to="/tutorials">Sandbox</DropDownItemLink>
                                            <DropDownItemLink to="/tutorials/greeting_class">React Class</DropDownItemLink>
                                            <DropDownItemLink to="/tutorials/greeting_hooks">React Hooks</DropDownItemLink>
                                            <div className="dropdown-divider"></div>
                                            <DropDownItemLink to="/tutorials/ryan/media">Media</DropDownItemLink>
                                            <DropDownItemLink to="/tutorials/ryan/carousel">Carousel</DropDownItemLink>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-inline my-2 my-lg-0">
                                <ThemeToggle />
                            </div>
                        </div>
                    </nav>
                );
            }}</ThemeContext.Consumer>
        );
    }

}

export default Header;
