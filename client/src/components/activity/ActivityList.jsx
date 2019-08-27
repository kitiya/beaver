import React from 'react';
import PropTypes from 'prop-types';

import ActivityListItem from './ActivityListItem'

const ActivityList = ({ activities, favorites, ...props }) => (
    <div className="row">
        <ul className="list-group w-100">
            {activities.map(activity => (
                <ActivityListItem
                    key={ activity.id }
                    activity = { activity }
                    favorited = { favorites.includes(activity.id) }
                    {...props}
                ></ActivityListItem>
            ))}
        </ul>
    </div>
)

ActivityList.propTypes = {
    activities: PropTypes.array,
    favorites: PropTypes.array,
};

ActivityList.defaultProps = {
    activities: [],
    favorites: [],
};

export default ActivityList