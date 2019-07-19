import React from 'react';

class SingleActivity extends React.Component {
    state = {register: false};

    // using the arrow function to automatically bind "this" inside of the context of the toggleRegister() function
    toggleRegister = () => {
        this.setState(prevState => ({
            registered: !prevState.registered
        }))
    }

    render() {
        // ES6 destructure
        // const item = this.props.item;
        const {item} = this.props;

        const registerMessage = this.state.registered
                                ? "You've already registered to this course."
                                : "Click to add this course to your shopping cart."
        const buttonMessage = this.state.registered
                                ? "Unregister"
                                : "Register"
        return (
            <div className="card border-0">
                <div className="card-body text-center">
                    <h5 className="card-title bg-info text-light p-2 rounded">{item.name}</h5>
                    <div className="row">
                        <span className="col-6 text-left">{item.type}</span>
                        <div className="col-6 text-right">
                            <span className="text-dark bg-light pl-1 pr-1 rounded">Cost: ${item.cost}</span>
                        </div>
                    </div>
                    <p className="text-left">{item.description}</p>
                    <p className="text-left"><span className="lead text-info">{item.provider}</span> | {item.location}</p>
                    <div className="row mb-3">
                        <span className="col-6">
                            Start Date: {item.startDate}
                            <br/>
                            End Date: {item.endDate}</span>
                        <span className="col-6">
                            Start Time: {item.startTime}
                            <br/>
                            End Time: {item.endTime}
                        </span>
                    </div>
                    <p className="text-info">{registerMessage}</p>
                    <button type="button"
                            className="btn btn-dark"
                            onClick={this.toggleRegister}>{buttonMessage}</button>
                </div>
            </div>
        )
    }
}

export default SingleActivity;