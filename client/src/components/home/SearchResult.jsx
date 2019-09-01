import React from 'react';
import { NavLink } from 'react-router-dom';

const SearchResult = ({activities}) => {
    const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric'};
    const TIME_OPTIONS = { hour: 'numeric', minute: 'numeric'};
    return (
        <section>
            {activities.map(activity => (
                <div key={activity.id} className="card border-0">
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
                    <p className="text-left"><span className="lead text-info">
                        {activity.provider.name}</span> |&nbsp;
                        {activity.provider.streetAddress}, 
                        {activity.provider.city}, 
                        {activity.provider.province}
                    </p>
                    <div className="row mb-3">
                        <span className="col-md-8 text-left">
                            {new Date(activity.schedule.startDate).toLocaleString('en-US', DATE_OPTIONS)} - {new Date(activity.schedule.endDate).toLocaleString('en-US', DATE_OPTIONS)} (On {activity.schedule.dayOfWeek})
                        </span>
                        <span className="col-md-4 text-left">
                            {new Date('1970-01-01T' + activity.schedule.startTime).toLocaleString('en-US', TIME_OPTIONS)} - {new Date('1970-01-01T' + activity.schedule.endTime).toLocaleString('en-US', TIME_OPTIONS)}
                        </span>
                    </div>
                    <div className="row justify-content-end">
                        <NavLink
                            className="mr-3 text-decoration-none"
                            to={`/activity/${activity.id}`}
                            // href={`/activity/${activity.id}`}
                        >
                            Read more...
                        </NavLink>
                    </div>
                </div>
            </div>
            ))}
        </section>
    );
}

export default SearchResult;