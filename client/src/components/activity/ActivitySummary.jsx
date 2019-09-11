import React from 'react';
import { Link } from 'react-router-dom';

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
            <div className="container">
                <section className="row justify-content-center align-items-center p-3 rounded" style={bannerStyle}>
                    <h2 className="text-center text-white font-weight-bold">Find Awesome Afterschool Activities</h2>
                </section>
                <section className="row justify-content-center align-items-top mt-3">
                    <h4 className="text-pinkish">It's That Time! Easily Find After School Programs</h4>
                    <div className="col-md-6 p-0 pr-3 text-right">
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
        <div className="card border-0 mb-3">
            <h5 className="card-title bg-info text-center text-light p-2 m-0 rounded-top" >{activity.name}</h5>
            <div className="card-body text-center border p-3 rounded-bottom">
                <div className="row">
                    {activity.imageUrls.map( (url, index) => (
                        <div key={index} className="col-4">
                            <img className="card-img-top rounded border" src={url} alt={activity.name} />
                        </div>
                    ))}
                </div>
                <div className="row mt-3">
                    <span className="col-6 text-left">{activity.type.toProperCase()}</span>
                    <div className="col-6 text-right">
                        <span className="badge badge-pill badge-danger kty-bg-pinkish px-2 py-1">Cost: ${activity.cost}</span>
                    </div>
                </div>
                <p className="text-left mt-3 w-100 kty-preline">{activity.description}</p>
                <p className="text-left">Age: {activity.ageRange}</p>
                <p className="text-left"><span className="lead text-info">
                    {activity.provider.name}</span> |&nbsp;
                    {activity.provider.streetAddress}, 
                    {activity.provider.city.toProperCase()}, 
                    {activity.provider.province}
                </p>
                <div className="row mb-3">
                    <span className="col-md-8 text-left">
                        {new Date(activity.schedule.startDate).toLocaleString('en-US', DATE_OPTIONS)} - {new Date(activity.schedule.endDate).toLocaleString('en-US', DATE_OPTIONS)} (On {activity.schedule.dayOfWeek.toProperCase()})
                    </span>
                    <span className="col-md-4 text-right">
                        {new Date('1970-01-01T' + activity.schedule.startTime).toLocaleString('en-US', TIME_OPTIONS)} - {new Date('1970-01-01T' + activity.schedule.endTime).toLocaleString('en-US', TIME_OPTIONS)}
                    </span>
                </div>
                <div className="row justify-content-end">
                    <Link to={`/activity/${activity.id}`} className="mr-3 text-decoration-none">Read more...</Link>
                    {/* <Link to={`/activity/${activity.id}`} className="btn btn-outline-info mx-2 px-3 py-1 rounded">Read More...</Link> */}
                    {/* <Link to={`/activity/${activity.id}/edit`} className="btn btn-outline-info mx-2 px-3 py-1 rounded">Edit</Link> */}
                    {/* <Link to={`/activity/${activity.id}/delete`} className="btn btn-outline-danger mx-2 px-3 py-1 rounded">Delete</Link> */}
                </div>
            </div>
        </div>
    )
}

export default ActivitySummary;
