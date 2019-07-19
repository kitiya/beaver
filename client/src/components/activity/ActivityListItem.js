import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'

const ActivityListItem = ({ activity, favorited, onClick, onFavorited }) => (
    <li
        key={activity.id}
        className="list-group-item"
        onClick={() => onClick(activity.id)}
    >
        <FontAwesomeIcon
            className="text-danger mr-2"
            onClick = {e => {
                e.stopPropagation();
                onFavorited(activity.id);
            }}
            role="img"
            aria-label="favorite"
            icon={ favorited ? fasHeart : farHeart }
        />
        <span>{activity.name}</span> |
        <span> {activity.provider}</span>
    </li>
)

ActivityListItem.propTypes = {
    activity: PropTypes.object,
    favorited: PropTypes.bool,
    onClick: PropTypes.func,
    onFavorited: PropTypes.func,
};

ActivityListItem.defaultProps = {
    activity: {},
    onClick: () => {},
    onFavorited: () => {},
};

export default ActivityListItem