import React from 'react';
//import SingleActivity from './SingleActivity';
import UnderConstruction from '../shared/UnderConstruction';

export default class Activity extends React.Component {
    constructor(props) {
        super(props);

        this.state = () => {
            this.activity = null;
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        fetch('http://localhost:8080/api/activities/'+{id})
        .then(response => response.json())
        .then(activity => this.setState({ activity }));
    }

    render() {
        const {activity} = this.state;
        console.log({activity});
        return (
            <div>
                <h1 className="text-center text-info mt-2">TODO: Get parameters from URLs</h1>
                <UnderConstruction />
            </div>
        );
    }
}