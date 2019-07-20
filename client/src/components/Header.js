import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../static/images/logo/logo03_dark.png'

let logoStyle = {
    width: '50px',
    height: 'auto'
}

const HeaderLink = ({children, ...props}) => (
    <NavLink
        exact
        className="nav-link"
        activeClassName="active text-warning"
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

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-0 pb-0">
        <div className="container d-flex justify-content-between">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <NavLink className="navbar-brand" to="/"><img alt="logo" style={logoStyle} src={Logo} /></NavLink>
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
                        <HeaderLink to="/categories" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            React Conf
                        </HeaderLink>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <DropDownItemLink to="/conf18/greeting_class">React Class</DropDownItemLink>
                            <DropDownItemLink to="/conf18/greeting_hooks">React Hooks</DropDownItemLink>
                            <div className="dropdown-divider"></div>
                            <DropDownItemLink to="/conf18/ryan/media">Media</DropDownItemLink>
                            <DropDownItemLink to="/conf18/ryan/carousel">Carousel</DropDownItemLink>
                        </div>
                    </li>
                </ul>
            </div>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
)

export default Header;
