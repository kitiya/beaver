import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ActivitySummary from './ActivitySummary';
import useFetch from '../util/useFetch';
import { PaginationPrevNext } from '../util/Pagination';
import Axios from 'axios';

const ActivityMainPage = () => {
    const [activities, setActivities] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const [isFirstPage, setIsFirstPage] = useState(true);
    const [isLastPage, setIsLastPage] = useState(false);
    const [loading, setLoading] = useState(false);
    const activityNameListPerPage = 7;

    useEffect(() => {
        const fetchActivities = async () => {
            setLoading(true);
            const response = await Axios.get(`http://localhost:8080/api/activities?page=${currentPage}&size=7`)
            const data = response.data;
            //console.log(data);
            setActivities(data.content);
            setTotalPages(data.totalPages);
            setIsFirstPage(data.first);
            setIsLastPage(data.last);
            setLoading(false);
        }
        fetchActivities();
    },[currentPage])
    //const activitiesUrl = 'http://localhost:8080/api/activities?page=0&size=7';
    //const { data } = useFetch({ result: [] }, activitiesUrl);
    //setActivities(data.result.content);

    const [ selectedActivity, setSelectedActivity ] = useState(null);
    const handleSelect = (id) => {
        fetch('http://localhost:8080/api/activities/'+id)
        .then(response => response.json())
        .then(activity => setSelectedActivity(activity));
    }

    if (!activities) {
        return ('');
    }

    const handlePrev = () => {
        if (!isFirstPage) {
            setCurrentPage(currentPage-1);
        }
    }

    const handleNext = () => {
        if (!isLastPage) {
            setCurrentPage(currentPage+1);
        }
    }
    const paginationProps = {
        handlePrev: handlePrev,
        handleNext: handleNext,
        currentPage: currentPage,
        totalPages: totalPages,
        isFirstPage: isFirstPage,  
        isLastPage: isLastPage,
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
                    <section className="justify-content-center">
                        <ProviderNameList activities={activities} handleSelect={handleSelect}/>
                    </section>
                    <section className="justify-content-center mt-2">
                        <PaginationPrevNext props={paginationProps}/>
                    </section>
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

const ProviderNameList = ({ activities, handleSelect }) => {
    return (
        <ul className="list-group">
            {activities.map(activity => (
                <li
                    key={activity.id}
                    className="list-group-item text-right px-3 py-1"
                    onClick={() => handleSelect(activity.id)}
                >
                    <span>{activity.name}</span><br/>
                    <span className="font-weight-bold text-info"> {activity.provider.name}</span>
                </li>
            ))}
        </ul>
    );
}