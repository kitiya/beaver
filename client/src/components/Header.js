import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../static/images/logo/logo03_dark.png'

var logoStyle = {
    width: '50px',
    height: 'auto'
}

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-0 pb-0">
            <div className="container d-flex justify-content-between">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <NavLink className="navbar-brand" to="/"><img alt="logo" style={logoStyle} src={Logo} /></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/providers">Providers</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Category
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Swimming</a>
                                <a className="dropdown-item" href="#">Art & Craft</a>
                                <a className="dropdown-item" href="#">Academic</a>
                                <a className="dropdown-item" href="#">Dance</a>
                                <a className="dropdown-item" href="#">Others</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Summer Camp</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/users">User</NavLink>
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
}

export default Header;
