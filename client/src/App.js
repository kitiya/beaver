import React from 'react';
import Users from './components/Users'
import './App.css';

function App() {
  return (
    <div className="container">
        <nav className="navbar navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className = "nav-item active">
                        <a className="nav-link" href="/">Users</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="row">
            <Users />
        </div>
    </div>

  );
}

export default App;
