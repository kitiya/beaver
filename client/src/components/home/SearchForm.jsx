import React, { useState, useEffect } from 'react';
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
    
    const [providerListData, setProviderListData] = useState([]);
    useEffect( () => {
        const fetchProviderList = async () => {
            const url = 'http://localhost:8080/api/providers/names';
            try {
                const response = await fetch(url);
                const result = await response.json();
                setProviderListData(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProviderList();
    }, []);

    const providerList = providerListData.map((p) => {
        const [ id, provider ] = p;
        return { id, provider };
    });
 
    return (
        <div>       
            <form className="mt-3 mx-auto" onSubmit={ props.handleSearch }>
                <div className="form-group row mb-0 justify-content-center">
                    <div className="mx-2">
                        <input type="text" className="form-control" value={props.name} onChange={handleNameChange} placeholder="Keyword" />
                    </div>
                    <div className="mx-2">
                        <div className="form-group">
                            <select className="form-control" value={props.type} onChange={ handleTypeChange }>
                                <option value="DEFAULT">All Categories</option>
                                <option value="ACADEMICS">Academics</option>
                                <option value="AFTER_SCHOOL">After School</option>
                                <option value="ART_CRAFT">Arts &amp; Crafts</option>
                                <option value="CAMP">Camp</option>
                                <option value="DANCE">Dance</option>
                                <option value="GYMNASTICS">Gymnastics</option>
                                <option value="MARTIAL_ARTS">Martial Art</option>
                                <option value="MUSIC">Music</option>
                                <option value="SCIENCE_TECH">Science &amp; Tech</option>
                                <option value="SPORT">Sport</option>
                                <option value="OTHER">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="mx-2">
                        <div className="form-group">
                            <select className="form-control" value={props.provider} onChange={handleProviderChange} >
                                <option value="DEFAULT">All Providers</option>
                                {providerList.map((p) => (
                                    <option key={p.id} value={p.provider}>{p.provider}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="mx-2">
                        <div className="form-group">
                            <select className="form-control" value={props.age} onChange={handleAgeChange} >
                                <option value="DEFAULT">All Ages</option>
                                <option value="0">Less than 1 yr</option>
                                <option value="1">1 yr</option>
                                <option value="2">2 yrs</option>
                                <option value="3">3 yrs</option>
                                <option value="4">4 yrs</option>
                                <option value="5">5 yrs</option>
                                <option value="6">6 yrs</option>
                                <option value="7">7 yrs</option>
                                <option value="8">8 yrs</option>
                                <option value="9">9 yrs</option>
                                <option value="10">10 yrs</option>
                                <option value="11">11 yrs</option>
                                <option value="12">12 yrs</option>
                                <option value="13">13 yrs</option>
                                <option value="14">14 yrs</option>
                                <option value="15">15 yrs</option>
                                <option value="16">16 yrs</option>
                                <option value="17">17 yrs</option>
                                <option value="18">18 yrs</option>
                                <option value="98">More than 18 yrs</option>
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