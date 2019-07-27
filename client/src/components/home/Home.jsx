import React from 'react';
import SearchForm from '../shared/SearchForm';
import HomeCarousel from './HomeCarousel';
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

class Home extends React.Component {
    render() {
        return (
            <div className="container mt-3">
                <h1 className="text-center text-info mb-3">Find Things To Do For Kids in Saskatoon</h1>
                <SearchForm />
                <HomeCarousel />
                <h3 className="text-center text-info mt-3">Discover Amazing Kids' Activities</h3>
                <p className="text-center mt-1">Get inspired and browse through the businesses offering programs for kids in & around Saskatoon.</p>
            </div>
        );
    }
}

export default Home;
