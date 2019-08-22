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
    const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric'};
    const TIME_OPTIONS = { hour: 'numeric', minute: 'numeric'};
    const DATETIME_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};

    //let t = new Date('1970-01-01T' + activity.startTime);
    
    return (
        <div className="card border-0">
            <div className="card-body text-center border rounded">
                <h5 className="card-title bg-info text-light p-2 rounded">{activity.name}</h5>
                <div className="row mb-2">
                    {activity.imageUrls.map( (url, index) => (
                        <div key={index} className="col-4">
                            <img className="card-img-top rounded border" src={url} alt={activity.name} />
                        </div>
                    ))}
                </div>
                <div className="row">
                    <span className="col-6 text-left">{activity.type}</span>
                    <div className="col-6 text-right">
                        <span className="badge badge-pill badge-danger kty-bg-pinkish px-3 py-1">Cost: ${activity.cost}</span>
                    </div>
                </div>
                <p className="text-left">{activity.description}</p>
                <p className="text-left">Age: {activity.ageRange}</p>
                <p className="text-left"><span className="lead text-info">{activity.provider.name}</span> | {activity.provider.streetAddress}</p>
                <div className="row mb-3">
                    <span className="col-6">
                        Start Date: {new Date(activity.schedule.startDate).toLocaleString('en-US', DATE_OPTIONS)}
                        <br/>
                        End Date: {new Date(activity.schedule.endDate).toLocaleString('en-US', DATE_OPTIONS)}
                    </span>
                    <span className="col-6">
                        Start Time: {new Date('1970-01-01T' + activity.schedule.startTime).toLocaleString('en-US', TIME_OPTIONS)}
                        <br/>
                        End Time: {new Date('1970-01-01T' + activity.schedule.endTime).toLocaleString('en-US', TIME_OPTIONS)}
                    </span>
                </div>
                <div className="mb-3 text-left">
                    <p>Date Created: {new Date(activity.createdDate).toLocaleString('en-CA', DATETIME_OPTIONS)}</p>
                    <p>Last Modified: {new Date(activity.modifiedDate).toLocaleString('en-CA', DATETIME_OPTIONS)}</p>
                </div>
                <div className="row justify-content-end">
                    <NavLink
                        className="mr-3 text-decoration-none"
                        to={`/activity/${activity.activityId}`}
                        href={`/activity/${activity.activityId}`}
                    >
                        Read more...
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default ActivityListSummary;
