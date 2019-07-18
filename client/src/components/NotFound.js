import React from 'react';

const url_01 = "https://cdn2.vectorstock.com/i/1000x1000/66/26/day-web-master-oops-error-404-vector-13956626.jpg";
//const url_02 = "https://worldbookofrecords.uk/assets/img/404.jpg";

const NotFound = () => (
    <div className="container">
        <img className="d-block mx-auto" src={url_01} alt="page not found"/>
    </div>
);

export default NotFound;