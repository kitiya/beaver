import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const useFetchActivity = (initialState, activityUrl) => {
    const [value, setValue] = useState(initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(activityUrl);
                const result = await response.json();
                setValue(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [activityUrl]);

    return  { value };
}

const Activity = () => {
    const id = 2;
    const activityUrl = 'http://localhost:8080/api/activities/'+id;
    const activity = useFetchActivity({value: []}, activityUrl).value;
    
    //const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric'};
    //const TIME_OPTIONS = { hour: 'numeric', minute: 'numeric'};

    console.log(activity);

    if ( !activity ) {
        return (
            <div>Loading...</div>
        );
    }
    return (
        <div className="container mt-3">
            <h3 className="text-center">{activity.name}</h3>
            {/* <h3 className="text-center">{activity.provider.name}</h3> */}
            {/* <div className="row mb-2">
                {activity.imageUrls.map( (url, index) => (
                    <div key={index} className="col-4">
                        <img className="card-img-top rounded border" src={url} alt={index} />
                    </div>
                ))}
            </div> */}
            <div className="row">
                <span className="col-6 text-left">{activity.type}</span>
                <div className="col-6 text-right">
                    <span className="badge badge-pill badge-danger kty-bg-pinkish px-3 py-1">Cost: ${activity.cost}</span>
                </div>
            </div>
            <p className="text-left">{activity.description}</p>
            <p className="text-left">Age: {activity.ageRange}</p>
            {/* <p className="text-left"><span className="lead text-info">
                {activity.provider.name}</span> |&nbsp;
                {activity.provider.streetAddress}, 
                {activity.provider.city}, 
                {activity.provider.province}
            </p> */}
            {/* <div className="row mb-3">
                <span className="col-md-8 text-left">
                    {new Date(activity.schedule.startDate).toLocaleString('en-US', DATE_OPTIONS)} - {new Date(activity.schedule.endDate).toLocaleString('en-US', DATE_OPTIONS)} (On {activity.schedule.dayOfWeek})
                </span>
                <span className="col-md-4 text-left">
                    {new Date('1970-01-01T' + activity.schedule.startTime).toLocaleString('en-US', TIME_OPTIONS)} - {new Date('1970-01-01T' + activity.schedule.endTime).toLocaleString('en-US', TIME_OPTIONS)}
                </span>
            </div> */}
        </div>
    );
}
export default withRouter(Activity);
