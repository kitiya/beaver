import React from 'react';
import Users from './components/user/Users'
import Activities from './components/activity/Activities'
import Header from './components/header'
import Footer from './components/footer/'
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row bg-dark"><Header /></div>
                <div className="row pl-3 pr-3"><Activities /></div>
                {/* <div className="row"><Users /></div>*/}
                <div className="row justify-content-center bg-dark color-light"><Footer /></div>
            </div>

        );
    }
}

export default App;
