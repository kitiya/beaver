import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import DarkLogo from '../../static/images/logo/logo03_dark.png'
import LightLogo from '../../static/images/logo/logo01_white.png'
import ThemeToggle from './ThemeToggle';
import AuthToggle from './AuthToggle';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthContext } from '../../contexts/AuthContext';

let logoStyle = {
    width: '50px',
    height: 'auto'
}

const HeaderLink = ({children, ...props}) => (
    <NavLink
        exact
        className="nav-item nav-link"
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
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { isLightTheme } = themeContext;
                    //const theme = isLightTheme ? light : dark;
                    return (
                        <nav className=
                            {   isLightTheme ?
                                "navbar navbar-expand-md navbar-light bg-light pt-0 pb-0" :
                                "navbar navbar-expand-md navbar-dark bg-dark pt-0 pb-0"
                            }
                        >
                            <div className="container d-flex justify-content-between">
                                <button className="navbar-toggler my-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <NavLink className="navbar-brand d-none d-md-block" to="/">
                                        <img    alt="logo"
                                                style={logoStyle}
                                                src={isLightTheme ? LightLogo : DarkLogo} />
                                    </NavLink>

                                    <div className="navbar-nav">
                                        <HeaderLink to="/">Home</HeaderLink>
                                        <HeaderLink to="/activities">Activity</HeaderLink>
                                        <HeaderLink to="/providers">Provider</HeaderLink>
                                        <div className="nav-item dropdown">
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
                                        </div> {/* nav-item dropdown */}
                                        <HeaderLink to="/users">User</HeaderLink>
                                        <div className="nav-item dropdown">
                                            <HeaderLink to="/tutorials" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Sandbox
                                            </HeaderLink>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <DropDownItemLink to="/tutorials">Misc</DropDownItemLink>
                                                <div className="dropdown-divider"></div>
                                                <DropDownItemLink to="/tutorials/greeting_class">React Class</DropDownItemLink>
                                                <DropDownItemLink to="/tutorials/greeting_hooks">React Hooks</DropDownItemLink>
                                            </div>
                                        </div>  {/* nav-item dropdown */}
                                    </div> {/* navbar-nav <ul> */}
                                </div>
                                <div className="d-inline text-center my-2 my-lg-0">
                                    <AuthToggle />
                                    <ThemeToggle />
                                </div>
                            </div>
                        </nav>
                    );
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>

        );
    }

}

export default Header;
