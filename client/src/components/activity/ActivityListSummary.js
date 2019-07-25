import React from 'react';
import { NavLink } from 'react-router-dom';

const ActivityListSummary = (props) => {
    if (!props.activity) {
        return (
            <div>
                <h2 className="text-center text-info">Discover Amazing Kids' Activities</h2>
                <p className="text-center ">
                    Get inspired and browse through the businesses offering programs for kids in & around Saskatoon.
                </p>
                <img
                    className="img-fluid rounded"
                    src="http://speakenglishcenter.com/wp-content/uploads/2015/06/kid-summer-itcu-dot-org.jpg"
                    alt="activity"
                />
            </div>
        );
    }

    let activity = props.activity;

    return (
        <div className="card border-0">
            <div className="card-body text-center border rounded">
                <h5 className="card-title bg-info text-light p-2 rounded">{activity.name}</h5>
                <div className="row mb-2">
                {props.activity.imageUrls.map( (url, index) => (
                    <div key={index} className="col-4">
                        <img className="card-img-top rounded border" src={url} alt={activity.name} />
                    </div>
                ))}
                </div>
                <div className="row">
                    <span className="col-6 text-left">{activity.type}</span>
                    <div className="col-6 text-right">
                        <span className="badge badge-pill badge-danger px-3 py-1">Cost: ${activity.cost}</span>
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
                <div className="row justify-content-end">
                    <NavLink
                        className="mr-3 text-decoration-none"
                        to={`/activity/${activity.id}`}
                        href={`/activity/${activity.id}`}
                    >
                        Read more...
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default ActivityListSummary;
