import React, { useState } from 'react';
import SearchForm from '../shared/SearchForm';
import HomeCarousel from './HomeCarousel';
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

const Home = (() => {
    const [activities, setActivities] = useState([]);

    const activitiesFetched = (e) => {
        console.log(e);
        setActivities();
    };

    return (
        <div className="container mt-3">
            <h1 className="text-center text-info mb-3">Find Things To Do For Kids in Saskatoon</h1>
            <SearchForm />
            {/* <SearchForm  onSearch={activitiesFetched}></SearchForm> */}
            {/* { _activities.length > 0 ? results : } */}
            <HomeCarousel />
            <h3 className="text-center text-info mt-3">Discover Amazing Kids' Activities</h3>
            <p className="text-center mt-1">Get inspired and browse through the businesses offering programs for kids in & around Saskatoon.</p>
        </div>
    );
});

export default Home;
