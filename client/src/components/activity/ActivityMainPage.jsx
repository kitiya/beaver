import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ActivitySummary from './ActivitySummary';
import useFetch from '../util/useFetch';

const ActivityMainPage = () => {
    //const [activities, setActivities] = useState([]);
    const activitiesUrl = 'http://localhost:8080/api/activities?page=0&size=7';
    const { data } = useFetch({ result: [] }, activitiesUrl);
    const activities = data.result.content;
    
    const [ selectedActivity, setSelectedActivity ] = useState(null);
    const handleClick = (id) => {
        fetch('http://localhost:8080/api/activities/'+id)
        .then(response => response.json())
        .then(activity => setSelectedActivity(activity));
    }

    const handleNext = () => {

    }

    if (!activities) {
        return ('');
    }
    return (
        <div className="container">
            <section className="row justify-content-center">
                <h2 className="text-center text-info mt-3">Discover Amazing Kids' Activities</h2>
                <p className="text-center ">
                    Get inspired and browse through the businesses offering programs for kids in & around Saskatoon.
                </p>
            </section>
            <section className="row mt-2 justify-content-between">
                <div className="col-md-3 px-1" >
                    <ul className="list-group">
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
                    <div className="justify-content-center mt-2">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-between">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                        <i className="layout-icon text-info fa fa-angle-double-left"></i>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                {/* <li className="page-item"><a className="page-link text-info" href="#">1</a></li>
                                <li className="page-item"><a className="page-link text-info" href="#">2</a></li>
                                <li className="page-item"><a className="page-link text-info" href="#">3</a></li>
                                <li className="page-item"><a className="page-link text-info" href="#">4</a></li>
                                <li className="page-item"><a className="page-link text-info" href="#">5</a></li> */}
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next" onClick={handleNext}>
                                        <i className="layout-icon text-info fa fa-angle-double-right" ></i>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-md-9 px-1">
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