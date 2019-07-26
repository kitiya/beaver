import React from 'react';
import PropTypes from 'prop-types';

const ActivityListItem = ({ activity, favorited, onClick, onFavorited }) => (
    <li
        key={activity.id}
        className="list-group-item text-right px-3 py-1"
        onClick={() => onClick(activity.id)}
    >
        <i
            className={
                favorited ?
                "fa fa-heart fa-lg text-danger mr-2" :
                "fa fa-heart-o fa-lg text-danger mr-2"
            }
            onClick = {e => {
                            e.stopPropagation();
                            onFavorited(activity.id);
                        }}
        ></i>
        <span>{activity.name}</span><br/>
        <span className="font-weight-bold text-info"> {activity.provider}</span>
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