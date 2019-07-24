import React from 'react';
import ActivityList from './ActivityList';
import ActivityDetail from './ActivityDetail';
import SearchForm from '../shared/SearchForm';

class ActivityView extends React.Component {
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
        .then(activities => this.setState({activities}));
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
                return { ...state, favorites: favorites.filter(f => f.id !== id)}; //should be f.id !== id ???
            }
            return { ...state, favorites: [...favorites, id] };
        })
    }

    render() {
        const { activities, favorites, selectedActivity } = this.state;

        return (
            <div className="container">
                <SearchForm></SearchForm>
                <div className="row mt-3 justify-content-around">
                    <div className="col-3">
                            <ActivityList
                                activities = { activities }
                                favorites = { favorites }
                                onClick = { this.onActivityClick }
                                onFavorited={ this.toggleFavorite }
                            />
                    </div>

                    <div className="col-9">
                            <ActivityDetail activity={ selectedActivity } />
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivityView;