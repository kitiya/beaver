import React from 'react';
import SearchForm from './SearchForm';
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

const homeUrl = "https://uc.uxpin.com/files/1002565/982286/bg-camping-810247.jpg";

class Home extends React.Component {
    render() {
        return (
            <div className="container mt-3">
                <h1 className="text-center text-info">Find Things To Do For Kids in Saskatoon</h1>
                <SearchForm></SearchForm>
                <img alt="kids" className="img-fluid rounded" src={homeUrl} />
                <h3 className="text-center text-info mt-3">Discover Amazing Kids' Activities</h3>
                <p className="text-center mt-1">Get inspired and browse through the businesses offering programs for kids in & around Saskatoon.</p>
            </div>
        );
    }
}

export default Home;
