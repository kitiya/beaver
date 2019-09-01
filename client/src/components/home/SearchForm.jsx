import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchForm =(({ props }) => {

    const handleNameChange = (e) => {
        props.setName(e.target.value);
    }

    const handleTypeChange = (e) => {
        props.setType(e.target.value);
    }

    const handleProviderChange = (e) => {
        props.setProvider(e.target.value);
    }

    const handleAgeChange = (e) => {
        props.setAge(e.target.value);
    }

    const handleCityChange = (e) => {
        props.setCity(e.target.value);
    }
    
    return (
        <div>       
            <form className="mt-3 mb-2 mx-auto" onSubmit={ props.handleSearch }>
                <div className="form-group row mb-0 justify-content-center">
                    <div className="mx-2">
                        <input type="text" className="form-control" value={props.name} onChange={handleNameChange} placeholder="Name" />
                    </div>
                    <div className="mx-2">
                        <div className="form-group">
                            <select className="form-control" value={props.type} onChange={ handleTypeChange }>
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
                            <select className="form-control" value={props.provider} onChange={handleProviderChange} >
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
                            <select className="form-control" value={props.age} onChange={handleAgeChange} >
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
                            <select className="form-control" value={props.city} onChange={handleCityChange} >
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
        </div>
    );
});
export default SearchForm