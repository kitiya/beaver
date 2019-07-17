import React from 'react';

const ActivityList = (props) => (
    <div className="row">
        <ul>
            {props.activities.map(activity => (
                <li
                    key={activity.id}
                    onClick={() => props.onClick(activity.id)}
                 >
                    <span>{activity.name}</span> |
                    <span>{activity.provider}</span>
                </li>
            ))}
        </ul>
    </div>
)

export default ActivityList