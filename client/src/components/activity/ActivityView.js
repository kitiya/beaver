import React from 'react';
import ActivityList from './ActivityList';
import ActivityDetail from './ActivityDetail';

class ActivityView extends React.Component {
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
            <div className="row">
                <div className="col-4">
                    <ActivityList
                        activities={activities}
                        onClick={this.onActivityClick}
                    />
                </div>

                <div className="col-8">
                    <ActivityDetail activity={selectedActivity} />
                </div>
                {/* <div className="row pl-3 pr-3"><Activities /></div>*/}
            </div>

        );
    }
}

export default ActivityView;