import React from 'react';

class SearchForm extends React.Component {
    render() {
        return (
        <form className="m-4">
            <div className="form-group row">
                <div className="col-3">
                    <input type="text" className="form-control" ref="date" placeholder="What date?" />
                    {/*<DatePicker className="rounded border" />*/}
                </div>
                <div className="col-3">
                    <div className="form-group">
                        <select className="form-control" ref="category" placeholder="All Categories" >
                            <option selected value="all">All Categories</option>
                            <option value="art">Arts & Crafts</option>
                            <option value="dance">Dance</option>
                            <option value="music">Music</option>
                            <option value="science">Science & Tech</option>
                        </select>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group">
                        <select className="form-control" ref="provider" placeholder="All Providers" >
                            <option selected value="1">All Providers</option>
                            <option value="2">Can-Am Gymnastics Club</option>
                            <option value="3">Wilton Academy of Music</option>
                            <option value="4">Saskatoon Zoo Society</option>
                            <option value="5">Bricks 4 Kidz</option>
                        </select>
                    </div>
                </div>
                <div className="col-3">
                    <div className="form-group">
                        <select className="form-control" ref="age" placeholder="Age" >
                            <option selected value="all">All Ages</option>
                            <option value="one">0-1</option>
                            <option value="three">1-3</option>
                            <option value="five">3-5</option>
                            <option value="twelve">6-12</option>
                            <option value="twelveplus">12+</option>
                        </select>
                    </div>
                </div>
            </div>
        </form>
        );
    }
}

export default SearchForm