import React from 'react';

const constructionUrl = "https://cdn.dribbble.com/users/185523/screenshots/3208896/under_maintenance_page.png";

const UnderConstruction = () => (
    <div className="container mt-3">
        <img alt="under construction" className="d-block mx-auto" src={constructionUrl} />
    </div>
);

export default UnderConstruction;