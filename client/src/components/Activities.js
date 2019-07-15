import React, {Component} from 'react';
import SingleActivity from './SingleActivity';

export default class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/activities')
        .then(response => response.json())
        .then(data => this.setState({activities: data}))
    }

    render() {
        return (
            <div className="row">
                {this.state.activities.map((item) => (
                    <SingleActivity key={item.id} item={item} />
                ))}
            </div>
        )
    }
}
