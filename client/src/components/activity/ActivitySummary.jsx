import React from 'react';
import { NavLink } from 'react-router-dom';

const bannerStyle = {
    background: 'linear-gradient(rgba(0, 45, 92, 0.2), rgba(0, 45, 92, 0.2)), url(http://www.yellowballoon.org/YellowBalloonProject/media/Images/YellowBanner.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '20vh',
}

const ActivitySummary = (props) => {
    if (!props.activity) {
        return (
            <div>
                <section className="row justify-content-center align-items-center p-3 rounded" style={bannerStyle}>
                    <h2 className="text-center text-white font-weight-bold">It's That Time! Easily Find After School Programs</h2>
                </section>
                <section className="row justify-content-center align-items-center mt-3">
                    <div className="col-md-6 p-0">
                        <h4 className="text-pinkish">Find Awesome Afterschool Activities</h4>
                        <p>Beaver compiles all after school options around the Saskatoon area. Use our filters to find exact matches that fit with your child's interest.</p>
                        <p>Discover programs for your child that work with your schedule. Whether sports, arts, or academic enrichment.</p>
                        {/* <NavLink to={`/providers`} className="btn bg-secondary text-white mb-2 px-3 py-1 rounded">See Progrmas (TODO)</NavLink> */}
                    </div>
                    <div className="col-md-6 p-0">
                        <img
                            className="img-fluid rounded"
                            src="https://d1hcau8biln41r.cloudfront.net/general/_seoimage/GoSnowNiseko50.jpg?mtime=20170330153645O"
                            alt="activity"
                        />
                    </div>
                </section>
            </div>
        );
    }

    let activity = props.activity;
    const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric'};
    const TIME_OPTIONS = { hour: 'numeric', minute: 'numeric'};
    //const DATETIME_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    
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
                    >
                        Read more...
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default ActivitySummary;
