import React, { useState, useEffect } from 'react';
import Ratings from 'react-ratings-declarative';

const iconStyle = {
    fontSize: '2rem',
    marginLeft: '10px',
    marginRight: '10px',
}

const ThingsToDoDetail = ({ match }) => {
    const id = match.params.id;
    const [thingToDo, setThingToDo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const fetchThingsTodoDetail = async() => {
            setLoading(true);
            const response =  await fetch(`http://localhost:8080/api/things-to-do/${id}`);
            const result = await response.json();
            setThingToDo(result);
            setLoading(false);
        }
        fetchThingsTodoDetail();
    },[id]);

    useEffect(() => {
        const fetchReviews = async() => {
            setLoading(true);
            const response =  await fetch(`http://localhost:8080/api/reviews/search?thingsToDoId=${id}`);
            const result = await response.json();
            setReviews(result);
            setLoading(false);
        }
        fetchReviews();
    },[id]);

    if (loading) {
        return ('');
    }

    return (
        <div className="container mt-3">
            <h3 className="text-light text-center bg-info px-2 py-1">{thingToDo.name}</h3>
            <section className="row">
                <div className="col-md-4">
                    <img className="img-thumbnail" src={thingToDo.imageUrl} alt={thingToDo.name}/>
                </div>
                <div className="col-md-8">
                    <p className="kty-preline">{thingToDo.description}</p>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <i className="layout-icon text-primary fa fa-calendar" style={iconStyle}></i>
                            <span>{thingToDo.dateInfo}</span>
                        </div>
                        <div className="col-md-6 ">
                            <i className="layout-icon text-primary fab fa-business-time" style={iconStyle}></i>
                            <span>{thingToDo.timeInfo}</span>
                        </div>
                    </div>
                    <p>
                        <i className="layout-icon text-primary fa fa-globe" style={iconStyle}></i>
                        <span>{thingToDo.location}</span>
                    </p>
                    <p>
                        <i className="layout-icon text-primary fa fa-globe" style={iconStyle}></i>
                        <a href={thingToDo.website} target="_blank" rel="noopener noreferrer">Website</a>
                    </p>
                </div>
            </section>
            <section className="row">
                <div className="col-12">
                    <h4 className="text-light text-center bg-info py-1">Review</h4>
                    {reviews.map(review => (
                        <section className="row my-1" key={review.id}>
                            <div className="col-2">
                                <img className="img-thumbnail" src={review.avatarUrl} alt="avatar" />
                            </div>
                            <div className="col-10">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h5 className="text-purple text-inline">{review.title}</h5>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <Ratings 
                                            rating={review.score}
                                            widgetRatedColors="#17a2b8"
                                            widgetDimensions="30px"
                                            widgetSpacings="5px"
                                        >
                                            <Ratings.Widget />
                                            <Ratings.Widget />
                                            <Ratings.Widget />
                                            <Ratings.Widget />
                                            <Ratings.Widget />
                                        </Ratings>
                                    </div>
                                </div>
                                
                                <p>{review.comment}</p>
                            </div>
                        </section>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ThingsToDoDetail