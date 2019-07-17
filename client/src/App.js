import React from 'react';
//import Users from './components/user/Users';
//import Activities from './components/activity/Activities';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import ActivityList from './components/activity/ActivityList';
import ActivityDetail from './components/activity/ActivityDetail';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        // state is an object that can have various keys.
        this.state = {
            activities: [],
            selectedActivity: null,
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/activities')
        .then(response => response.json())
        .then(activities => this.setState({activities}));
    }

    onActivityClick = (id) => {
        fetch('http://localhost:8080/api/activities/'+id)
        .then(response => response.json())
        .then(activity => this.setState({selectedActivity: activity}));
    }

    render() {
        const { activities, selectedActivity } = this.state;

        return (
            <div className="container">
                <div className="row bg-dark"><Header /></div>
                <main className="row">
                    <div className="col-4">
                        <ActivityList
                            activities={activities}
                            onClick={this.onActivityClick}
                        />
                    </div>

                    <div className="col-8">
                        <ActivityDetail activity={selectedActivity} />
                    </div>
                </main>
                <div className="row justify-content-center bg-dark color-light"><Footer /></div>

                {/* <div className="row pl-3 pr-3"><Activities /></div>
                                <div className="row"><Users /></div>*/}
            </div>


        );
    }
}

export default App;
