import React from 'react';

const ActivityDetail = (props) => {
    if (!props.activity) {
        return (
            <img
                className="img-fluid rounded"
                src="http://speakenglishcenter.com/wp-content/uploads/2015/06/kid-summer-itcu-dot-org.jpg"
                alt="activity"
            />
        );
    }

    var activity = props.activity;

    return (
        <div className="card border-0">
            <div className="card-body text-center border rounded">
                <h5 className="card-title bg-info text-light p-2 rounded">{activity.name}</h5>
                <div className="row mb-2">
                {props.activity.imageUrls.map( url => (
                    <div className="col-6">
                        <img className="card-img-top rounded" src={url} alt={activity.name} />
                    </div>
                ))}
                </div>
                <div className="row">
                    <span className="col-6 text-left">{activity.type}</span>
                    <div className="col-6 text-right">
                        <span className="text-dark bg-light pl-1 pr-1 rounded">Cost: ${activity.cost}</span>
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
