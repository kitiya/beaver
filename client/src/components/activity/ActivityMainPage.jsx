import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActivitySummary from './ActivitySummary';
import useFetch from '../util/useFetch';

const ActivityMainPage = () => {
   
    const activitiesUrl = 'http://localhost:8080/api/activities?page=0&size=5';
    const { data } = useFetch({ result: [] }, activitiesUrl);
    const activities = data.result.content;
    
    const [ selectedActivity, setSelectedActivity ] = useState(null);
    const handleClick = (id) => {
        fetch('http://localhost:8080/api/activities/'+id)
        .then(response => response.json())
        .then(activity => setSelectedActivity(activity));
    }

    if (!activities) {
        return ('');
    }
    return (
        <div className="container">
            <div>
                <section className="row justify-content-center">
                    <h2 className="text-center text-info mt-3">Discover Amazing Kids' Activities</h2>
                    <p className="text-center ">
                        Get inspired and browse through the businesses offering programs for kids in & around Saskatoon.
                    </p>
                </section>
                
            </div>
            <section className="row mt-2 justify-content-around">
                <div className="col-md-3" >
                    <ul className="list-group w-100">
                        {activities.map(activity => (
                            <li
                                key={activity.id}
                                className="list-group-item text-right px-3 py-1"
                                onClick={() => handleClick(activity.id)}
                            >
                                <span>{activity.name}</span><br/>
                                <span className="font-weight-bold text-info"> {activity.provider.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-9">
                        <ActivitySummary activity={ selectedActivity } />
                </div>
            </section>
            <section className="row justify-content-end pt-3 px-0">
                <Link to={`activities/new`} className="btn btn-outline-info mb-2 px-3 py-1 rounded">Add new activity...</Link>
            </section>
        </div>
    );
}

export default ActivityMainPage;