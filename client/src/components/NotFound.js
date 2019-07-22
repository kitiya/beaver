import React from 'react';

//const notFoundUrl  = "https://image.freepik.com/free-vector/error-icon-404-found-broken-message-banner_48369-13070.jpg";
const constructionUrl = "https://cdn.dribbble.com/users/185523/screenshots/3208896/under_maintenance_page.png";

const NotFound = () => (
    <div className="container">
        <img className="d-block mx-auto" src={constructionUrl} alt="page not found"/>
    </div>
);

export default NotFound;