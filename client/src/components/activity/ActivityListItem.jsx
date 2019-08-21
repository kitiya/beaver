import React from 'react';
import PropTypes from 'prop-types';

const ActivityListItem = ({ activity, favorited, onClick, onFavorited }) => (
    <li
        key={activity.activityId}
        className="list-group-item text-right px-3 py-1"
        onClick={() => onClick(activity.activityId)}
    >
        <i
            className={
                favorited ?
                "fa fa-heart fa-lg kty-text-pinkish mr-2" :
                "fa fa-heart-o fa-lg kty-text-pinkish mr-2"
            }
            onClick = {e => {
                            e.stopPropagation();
                            onFavorited(activity.activityId);
                        }}
        ></i>
        <span>{activity.name}</span><br/>
        <span className="font-weight-bold text-info"> {activity.providerName}</span>
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