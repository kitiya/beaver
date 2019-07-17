import React from 'react';
//import Activities from './components/activity/Activities';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ActivityView from './components/activity/ActivityView';

import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row bg-dark"><Header /></div>
                <main><ActivityView /></main>
                <div className="row justify-content-center bg-dark color-light"><Footer /></div>
            </div>
        );
    }
}

export default App;
