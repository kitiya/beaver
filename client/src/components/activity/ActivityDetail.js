import React from 'react';

const ActivityDetail = (props) => {
    if (!props.activity) {
        return (
            <p>select one</p>
        );
    }

    return (
        <div className="card border-0">
            <div className="card-body text-center">
                <h5 className="card-title bg-info text-light p-2 rounded">{props.activity.name}</h5>
                <div className="row">
                    <span className="col-6 text-left">{props.activity.type}</span>
                    <div className="col-6 text-right">
                        <span className="text-dark bg-light pl-1 pr-1 rounded">Cost: ${props.activity.cost}</span>
                    </div>
                </div>
                <p className="text-left">{props.activity.description}</p>
                <p className="text-left"><span className="lead text-info">{props.activity.provider}</span> | {props.activity.location}</p>
                <div className="row mb-3">
                    <span className="col-6">
                        Start Date: {props.activity.startDate}
                        <br/>
                        End Date: {props.activity.endDate}</span>
                    <span className="col-6">
                        Start Time: {props.activity.startTime}
                        <br/>
                        End Time: {props.activity.endTime}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ActivityDetail;
