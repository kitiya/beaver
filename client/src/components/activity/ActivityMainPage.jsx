import React from 'react';
import { NavLink } from 'react-router-dom';
import ActivityList from './ActivityList';
import ActivityListSummary from './ActivityListSummary';
import SearchForm from '../shared/SearchForm';

class ActivityMainPage extends React.Component {
    constructor(props) {
        super(props);

        // state is an object that can have various keys.
        this.state = {
            activities: [],
            favorites: [],
            selectedActivity: null,
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/api/activities')
        .then(response => response.json())
        .then(activities => {
            //console.log(activities);
            this.setState({activities});
        });
    }

    onActivityClick = (id) => {
        fetch('http://localhost:8080/api/activities/'+id)
        .then(response => response.json())
        .then(activity => this.setState({ selectedActivity: activity }));
    }

    toggleFavorite = id => {
        this.setState(({ favorites, ...state }) => {
            const idx = favorites.indexOf(id);

            if (idx !== -1) {
                return { ...state, favorites: favorites.filter(f => f.id === idx)};
            }
            return { ...state, favorites: [...favorites, id] };
        })
    }

    render() {
        const { activities, favorites, selectedActivity } = this.state;

        return (
            <div className="container">
                <SearchForm></SearchForm>
                <section className="row mt-2 justify-content-around">
                    <div className="col-md-3" >
                            <ActivityList
                                activities = { activities }
                                favorites = { favorites }
                                onClick = { this.onActivityClick }
                                onFavorited={ this.toggleFavorite }
                            />
                    </div>

                    <div className="col-md-9">
                            <ActivityListSummary activity={ selectedActivity } />
                    </div>
                </section>
                <section className="row justify-content-end pt-3 px-3">
                    <NavLink to={`activities/new`} className="btn bg-info text-white mb-2 px-3 py-1 rounded-pill">Add new activity...</NavLink>
                </section>
            </div>
        );
    }
}

export default ActivityMainPage;