import React from 'react';
//import ActivityDetail from './ActivityDetail';

class SingleActivity extends React.Component {
    constructor(props) {
        super(props);
        const activity = this.props;

        this.state = {
            register: false,
        };
    }

    // using the arrow function to automatically bind "this" inside of the context of the toggleRegister() function
    toggleRegister = () => {
        this.setState(prevState => ({
            registered: !prevState.registered
        }))
    }

    render() {
        // ES6 destructure
        // const item = this.props.item;
        const {activity} = this.props;

        const registerMessage = this.state.registered
                                ? "You've already registered to this course."
                                : "Click to add this course to your shopping cart."
        const buttonMessage = this.state.registered
                                ? "Unregister"
                                : "Register"
        return (
        <div>
            <h1>Single Activity</h1>

            <div className="card border-0">
                <div className="card-body text-center">
                    <h5 className="card-title bg-info text-light p-2 rounded">{activity.name}</h5>
                    <div className="row">
                        <span className="col-6 text-left">{activity.type}</span>
                        <div className="col-6 text-right">
                            <span className="text-dark bg-light pl-1 pr-1 rounded">Cost: ${activity.cost}</span>
                        </div>
                    </div>
                    <p className="text-left">{activity.description}</p>
                    <p className="text-left"><span className="lead text-info">{activity.provider}</span> | {activity.location}</p>
                    <div className="row mb-3">
                        <span className="col-6">
                            Start Date: {activity.startDate}
                            <br/>
                            End Date: {activity.endDate}</span>
                        <span className="col-6">
                            Start Time: {activity.startTime}
                            <br/>
                            End Time: {activity.endTime}
                        </span>
                    </div>
                    <p className="text-info">{registerMessage}</p>
                    <button type="button"
                            className="btn btn-dark"
                            onClick={this.toggleRegister}>{buttonMessage}</button>
                </div>
            </div>
        </div>

        )
    }
}

export default SingleActivity;