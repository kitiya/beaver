import React from 'react';

const SingleActivity = ({item}) => (
    <div className="card">
        <div className="card-body text-center">
            <h5 className="card-title">{item.name}</h5>
            <p>{item.description}</p>
        </div>
    </div>
);

export default SingleActivity;