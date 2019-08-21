import React from 'react';
import PropTypes from 'prop-types';

import ActivityListItem from './ActivityListItem'

const ActivityList = ({ activities, favorites, ...props }) => (
    <div className="row">
        <ul className="list-group">
            {activities.map(activity => (
                <ActivityListItem
                    key={ activity.activityId }
                    activity = { activity }
                    favorited = { favorites.includes(activity.activityId) }
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