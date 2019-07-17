import React from 'react';
import ActivityView from './activity/ActivityView';



class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div><ActivityView /></div>
            </div>
        );
    }
}

export default Home;
