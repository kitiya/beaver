import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchForm =(({ onSearch }) => {
    const [ name, setName ] = useState('vr');
    const [ type, setType ] = useState();
    const [ provider, setProvider ] = useState();
    const [ age, setAge ] = useState();
    const [ city, setCity ] = useState();
    const [ activities, setActivities ] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/api/activities/search?name='+name)
        .then(response => response.json())
        .then(onSearch);
        //.then(activities => setActivities(activities));
        console.log(onSearch);
    }

    return (
        <div>       
            <form className="mt-3 mb-2 mx-auto" onSubmit={ handleSubmit }>
                <div className="form-group row mb-0 justify-content-center">
                    <div className="mx-2">
                        <input type="text" className="form-control" value={name}  onChange={(e)=> setName(e.target.value)} placeholder="Name" />
                    </div>
                    <div className="mx-2">
                        <div className="form-group">
                            <select className="form-control" value={type} placeholder="All Categories" >
                                <option value="DEFAULT">All Categories</option>
                                <option value="art">Arts & Crafts</option>
                                <option value="dance">Dance</option>
                                <option value="music">Music</option>
                                <option value="science">Science & Tech</option>
                            </select>
                        </div>
                    </div>
                    <div className="mx-2">
                        <div className="form-group">
                            <select className="form-control" value={provider} placeholder="All Providers" >
                                <option value="DEFAULT">All Providers</option>
                                <option value="1">Can-Am Gymnastics Club</option>
                                <option value="2">Wilton Academy of Music</option>
                                <option value="3">Saskatoon Zoo Society</option>
                                <option value="4">Bricks 4 Kidz</option>
                            </select>
                        </div>
                    </div>
                    <div className="mx-2">
                        <div className="form-group">
                            <select className="form-control" value={age} placeholder="Age" >
                                <option value="DEFAULT">All Ages</option>
                                <option value="one">0-1</option>
                                <option value="three">1-3</option>
                                <option value="five">3-5</option>
                                <option value="twelve">6-12</option>
                                <option value="twelveplus">12+</option>
                            </select>
                        </div>
                    </div>
                    <div className="mx-2">
                        <div className="form-group">
                            <select className="form-control" value={city} placeholder="City" >
                                <option value="DEFAULT">All Cities</option>
                                <option value="saskatoon">Saskatoon</option>
                                <option value="calgary">Calgary</option>
                                <option value="montreal">Montreal</option>
                                <option value="toronto">Toronto</option>
                                <option value="vancouver">Vancouver</option>
                            </select>
                        </div>
                    </div>
                    <div className="mx-2">
                        <button type="submit" className="btn btn-outline-info">
                            <FontAwesomeIcon
                                className="text-info mr-2"
                                role="img"
                                aria-label="search"
                                icon={ faSearch }
                            />
                            Search
                        </button>
                    </div>
                </div>
            </form>
            <section>
                <p>Name: {name}</p>
                <div>
                {activities.map(activity => (
                    <p>{activity.name}</p>)
                )}
                </div>
            </section>
        </div>
    );
});
export default SearchForm