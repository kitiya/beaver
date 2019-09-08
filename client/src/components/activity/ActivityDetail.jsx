import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

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


const ActivityDetail = (props) => {
    const id = props.match.params.id;
    const activityUrl = `http://localhost:8080/api/activities/${id}`;
    const initialState = {
        imageUrls: [],
        provider: {},
        schedule: {},
    };
    const activity = useFetchActivity(initialState, activityUrl).value;
    
    const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric'};
    const TIME_OPTIONS = { hour: 'numeric', minute: 'numeric'};
    
    const handleDelete = () => {
        try {
            const response = fetch(`http://localhost:8080/api/activities/delete/${id}`, {
                                    method: "DELETE",
                                    headers: {
                                        'Access-Control-Allow-Origin':'http://localhost:3000',
                                    }
            }).then(response => response.json());

            console.log(response);
            let redirectUrl = `/activity/${id}`;
            props.history.push(redirectUrl);
        } catch (error) {
            console.log(error);
        }
    };

    if ( !activity ) {
        return (
            <div>Loading...</div>
        );
    }
    
    return (
        <div className="container mt-3">
            <h3 className="text-center text-info bg-light border border-left-0 border-right-0 py-1">{activity.name}</h3>
            <div className="row mb-2">
                {activity.imageUrls.map( (url, index) => (
                    <div key={index} className="col-4">
                        <img className="card-img-top rounded border" src={url} alt={index} />
                    </div>
                ))}
            </div>
            <h4 className="text-center bg-light">{activity.provider.name}</h4>
            <div className="row">
                <span className="col-6 text-left">{activity.type}</span>
                <div className="col-6 text-right">
                    <span className="badge badge-pill badge-danger kty-bg-pinkish px-2 py-1">Cost: ${activity.cost}</span>
                </div>
            </div>
            <p className="text-left">{activity.description}</p>
            <p className="text-left">Age: {activity.ageRange}</p>
            <p className="text-left">
                <span className="lead text-info">{activity.provider.name}</span> |&nbsp;
                {activity.provider.streetAddress}, 
                {activity.provider.city}, 
                {activity.provider.province}
            </p>
            <div className="row mb-3">
                <span className="col-md-8 text-left">
                    {new Date(activity.schedule.startDate).toLocaleString('en-US', DATE_OPTIONS)} - {new Date(activity.schedule.endDate).toLocaleString('en-US', DATE_OPTIONS)} (On {activity.schedule.dayOfWeek})
                </span>
                <span className="col-md-4 text-right">
                    {new Date('1970-01-01T' + activity.schedule.startTime).toLocaleString('en-US', TIME_OPTIONS)} - {new Date('1970-01-01T' + activity.schedule.endTime).toLocaleString('en-US', TIME_OPTIONS)}
                </span>
            </div>
            <div className="row justify-content-center">
                <Link to={`/activity/${activity.id}/edit`} className="btn btn-outline-info mx-2 px-3 py-1 rounded">Edit</Link>
                <input type="button" className="btn btn-outline-danger mx-2 px-3 py-1 rounded" value="Delete" onClick={handleDelete} />
            </div>
        </div>
    );
}
export default withRouter(ActivityDetail);

