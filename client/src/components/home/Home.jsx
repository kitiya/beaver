import React, { useState } from 'react';
import SearchForm from './SearchForm';
import HomeCarousel from './HomeCarousel';
import SearchResult from './SearchResult';

const Home = (() => {
    const [ name, setName ] = useState('');
    const [ type, setType ] = useState('DEFAULT');
    const [ provider, setProvider ] = useState('DEFAULT');
    const [ age, setAge ] = useState('DEFAULT');
    const [ city, setCity ] = useState('DEFAULT');

    const [ activities, setActivities ] = useState([]);

    const activitiesFetched = (e) => {
        e.preventDefault();

        let searchUrl = 'http://localhost:8080/api/activities';
        if (name !== '') {
            searchUrl = searchUrl.concat('/search?name=', name);
        } else if (type!== 'DEFAULT') {
            searchUrl = searchUrl.concat('/search?type=', type);
        } else if (city!== 'DEFAULT') {
            searchUrl = searchUrl.concat('/search?city=', city);
        }

        fetch(searchUrl)
        .then(response => response.json())
        .then(activiteis => setActivities(activiteis));

        resetState();
    };

    const resetState = () => {
        setName('');
        setType('DEFAULT');
        setProvider('DEFAULT');
        setAge('DEFAULT');
        setCity('DEFAULT');
    };

    const homeProps = {
        name, setName,
        type, setType,
        provider, setProvider,
        age, setAge,
        city, setCity,
        handleSearch: activitiesFetched
    }

    const Greeting = () => {
        return (
            <div>
                <h1 className="text-center text-info mb-3">Find Things To Do For Kids in Saskatoon</h1>
                <h3 className="text-center text-info mt-3">Discover Amazing Kids Activities</h3>
                <HomeCarousel></HomeCarousel>
                <p className="text-center mt-1">Get inspired and browse through the businesses offering programs for kids in & around Saskatoon.</p>
            </div>
        );
    };

    return (
        <div className="container mt-3">
            <SearchForm  props={homeProps}></SearchForm>
            { activities.length > 0 ? 
                    <SearchResult activities={activities} />   
            : 
                <Greeting />
            }
        </div>
    );
});

export default Home;
