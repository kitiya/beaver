import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ActivitySummary from './ActivitySummary';
import useFetch from '../util/useFetch';

const ActivityMainPage = () => {
   
    const activitiesUrl = 'http://localhost:8080/api/activities';
    const { data } = useFetch({ result: [] }, activitiesUrl);
    const activities = data.result;
   // const [ _activities, setActivities ] = useState([]);
    
    const [ selectedActivity, setSelectedActivity ] = useState(null);
    const handleClick = (id) => {
        fetch('http://localhost:8080/api/activities/'+id)
        .then(response => response.json())
        .then(activity => setSelectedActivity(activity));
    }

    return (
        <div className="container">
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
            <section className="row justify-content-end pt-3 px-3">
                <NavLink to={`activities/new`} className="btn bg-info text-white mb-2 px-3 py-1 rounded-pill">Add new activity...</NavLink>
            </section>
        </div>
    );
}

export default ActivityMainPage;