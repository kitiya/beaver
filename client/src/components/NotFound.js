import React from 'react';

const notFoundUrl  = "https://image.freepik.com/free-vector/error-icon-404-found-broken-message-banner_48369-13070.jpg";

const NotFound = () => (
    <div className="container">
        <img className="d-block mx-auto" src={notFoundUrl} alt="page not found"/>
    </div>
);

export default NotFound;