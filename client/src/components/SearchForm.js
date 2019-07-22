import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchForm extends React.Component {
    render() {
        return (
            <form className="m-4">
                <div className="form-group row">
                    <div className="col-2">
                        <input type="text" className="form-control" ref="date" placeholder="What date?" />
                        {/*<DatePicker className="rounded border" />*/}
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <select className="form-control" ref="category" placeholder="All Categories" >
                                <option value="DEFAULT">All Categories</option>
                                <option value="art">Arts & Crafts</option>
                                <option value="dance">Dance</option>
                                <option value="music">Music</option>
                                <option value="science">Science & Tech</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <select className="form-control" ref="provider" placeholder="All Providers" >
                                <option value="DEFAULT">All Providers</option>
                                <option value="1">Can-Am Gymnastics Club</option>
                                <option value="2">Wilton Academy of Music</option>
                                <option value="3">Saskatoon Zoo Society</option>
                                <option value="4">Bricks 4 Kidz</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <select className="form-control" ref="age" placeholder="Age" >
                                <option value="DEFAULT">All Ages</option>
                                <option value="one">0-1</option>
                                <option value="three">1-3</option>
                                <option value="five">3-5</option>
                                <option value="twelve">6-12</option>
                                <option value="twelveplus">12+</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <select className="form-control" ref="city" placeholder="City" >
                                <option value="DEFAULT">All Cities</option>
                                <option value="saskatoon">Saskatoon</option>
                                <option value="calgary">Calgary</option>
                                <option value="montreal">Montreal</option>
                                <option value="toronto">Toronto</option>
                                <option value="vancouver">Vancouver</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-outline-info">
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
        );
    }
}

export default SearchForm