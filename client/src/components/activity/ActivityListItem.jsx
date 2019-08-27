import React from 'react';
import PropTypes from 'prop-types';

const ActivityListItem = ({ activity, favorited, onClick, onFavorited }) => (
    <li
        key={activity.id}
        className="list-group-item text-right px-3 py-1"
        onClick={() => onClick(activity.id)}
    >
        <span>{activity.name}</span><br/>
        <span className="font-weight-bold text-info"> {activity.provider.name}</span>
    </li>
)

ActivityListItem.propTypes = {
    activity: PropTypes.object,
    onClick: PropTypes.func,
};

ActivityListItem.defaultProps = {
    activity: {},
    onClick: () => {},
    onFavorited: () => {},
};

export default ActivityListItem