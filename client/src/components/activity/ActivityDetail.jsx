import React, { useState, useEffect, useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NumberFormat from 'react-number-format';

const accordionStyle = {
    'font-size': '1.25rem',
    'margin-left': '0.2rem',
    'padding': '0',
    'text-decoration': 'none',
}

const noBorderStyle = {
    'border-bottom': '0',
}

const FaIcon = ({children, ...props}) => {
    return (
        <FontAwesomeIcon 
            className="layout-icon text-info kty-icon"
            role="img"
            {...props}
        />
    );
};

const ActivityDetail = (props) => {
    const authContext = useContext(AuthContext);
    console.log(authContext);
    const id = props.match.params.id;
    const activityUrl = `http://localhost:8080/api/activities/${id}`;
    const initialState = {
        type: '',
        provider: {
            city: '',
            imageUrls: [],
        },
        // dayOfWeek: '',
        imageUrls: [],
        schedule: {
            dayOfWeek:''
        },
    };
    const [loading, setLoading] = useState(false);

    const useFetchActivity = (initialState, activityUrl) => {
        const [value, setValue] = useState(initialState);
        useEffect(() => {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    const response = await fetch(activityUrl);
                    const result = await response.json();
                    setValue(result);
                    setLoading(false);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchData();
        }, [activityUrl]);
    
        return  { value };
    }

    const activity = useFetchActivity(initialState, activityUrl).value;
    
    const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric'};
    const TIME_OPTIONS = { hour: 'numeric', minute: 'numeric'};
    
    const handleDelete = () => {
        try {
            const response = fetch(`http://localhost:8080/api/activities/delete/${id}`, {
                                    method: "DELETE",
                                    headers: {
                                        'Access-Control-Allow-Origin':'http://localhost:3000',
                                    }
            }).then(response => response.json());

            console.log(response);
            let redirectUrl = `/activity/${id}`;
            props.history.push(redirectUrl);
        } catch (error) {
            console.log(error);
        }
    };

    const ProviderAccordion = () => {
        return (
            <div id="providerAccordion">
                <div className="card mt-3">
                    <section className="card-header bg-light bordor-bottom-0" style={noBorderStyle} id="providerHeading">
                        <h4 className="mb-0 text-center">
                            <button className="btn btn-link text-primary" style={accordionStyle} data-toggle="collapse" data-target="#providerCollapse" aria-expanded="true" aria-controls="providerCollapse">
                                About "{activity.provider.name}"
                            </button>
                        </h4>
                    </section>

                    <section id="providerCollapse" className="shadow collapse hide" aria-labelledby="providerHeading" data-parent="#providerAccordion">
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <div className="col-md-3"><img className="card-img-top rounded border" src={activity.provider.imageUrls[1]} alt={activity.provider.name} /></div>
                                <div className="col-md-9">
                                    <p className="kty-truncate">{activity.provider.description}</p>
                                    <p>Website: <a href={activity.provider.website} target="_blank" rel="noopener noreferrer">{activity.provider.website}</a></p>
                                    <p>Email: {activity.provider.email}</p>
                                    <p>Phone: <NumberFormat format="###-###-####" value={activity.provider.phone} displayType={'text'} /></p>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-0 mb-1">
                                <Link to={`/providers/${activity.provider.id}`} className="btn btn-outline-info mx-2 px-3 py-1 rounded">View more details...</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }

    const ActivitiesAccordion = () => {
        return (
            <div id="activitiesAccordion">
                <div className="card mt-3">
                    <div className="card-header bg-light" style={noBorderStyle} id="activitiesHeading">
                        <h4 className="mb-0 text-center">
                            <button className="btn btn-link text-primary" style={accordionStyle} data-toggle="collapse" data-target="#activitiesCollapse" aria-expanded="true" aria-controls="activitiesCollapse">
                            Courses you may also like...
                            </button>
                        </h4>
                    </div>

                    <div id="activitiesCollapse" className="shadow collapse hide" aria-labelledby="activitiesHeading" data-parent="#activitiesAccordion">
                        <div className="card-body">
                            <h4>//TODO:</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }    

    if ( !activity || loading) {
        return (
            <div>Loading...</div>
        );
    }
    
    return (
        <div className="container mt-3">
            <section className="mt-2 px-3 py-2 border rounded shadow">
                <h3 className="text-center text-info bg-light border border-left-0 border-right-0 py-1">{activity.name}</h3>
                <div className="row mt-2 mb-3">
                    {activity.imageUrls.map( (url, index) => (
                        <div key={index} className="col-4">
                            <img className="card-img-top rounded border" src={url} alt={index} />
                        </div>
                    ))}
                </div>
                {/* <h5 className="text-center bg-light p-1 text-info">By {activity.provider.name}</h5> */}
                <div className="row my-3">
                    <h5 className="col-6 text-left text-info">By {activity.provider.name}</h5>
                    <div className="col-6 text-right">
                        <span className="badge badge-pill badge-danger kty-bg-pinkish px-3 py-2">Cost: ${activity.cost}</span>
                    </div>
                </div>
                <div className="row kty-preline">  
                    <div className="col-1 pr-1 text-center">
                        <FaIcon aria-label="info" icon="info-circle" />
                    </div>          
                    <div className="col-11 pl-0">{activity.description}</div>
                </div>
                <div className="row my-3 align-items-center">  
                    <div className="col-1 pr-1 text-center">
                        <FaIcon aria-label="cake" icon="birthday-cake" />
                    </div>          
                    <div className="col-11 pl-0">Age: {activity.ageRange}</div>
                </div>
                <div className="row my-3 align-items-center">  
                    <div className="col-1 pr-1 text-center">
                        <FaIcon aria-label="cake" icon="map-marker-alt" />
                    </div>          
                    <div className="col-11 pl-0">
                        {/* <span className="lead text-info">{activity.provider.name}</span> |&nbsp; */}
                        Address:
                        {activity.provider.streetAddress},&nbsp;
                        {activity.provider.city.toProperCase()},&nbsp; 
                        {activity.provider.province}
                    </div>
                </div>
                <div className="row my-3 align-items-center">  
                    <div className="col-1 pr-1 text-center">
                        <FaIcon aria-label="calendar" icon="calendar-alt" />
                    </div>          
                    <div className="col-11 pl-0">
                        <div className="row lign-items-center">
                            <span className="col-md-8 text-left">
                                Date:
                                {new Date(activity.schedule.startDate).toLocaleString('en-US', DATE_OPTIONS)} - 
                                {new Date(activity.schedule.endDate).toLocaleString('en-US', DATE_OPTIONS)} (On&nbsp;
                                { activity.schedule.dayOfWeek.toProperCase()})
                            </span>
                            <span className="col-md-4 pr-4 text-right">
                                Time: {new Date('1970-01-01T' + activity.schedule.startTime).toLocaleString('en-US', TIME_OPTIONS)} - {new Date('1970-01-01T' + activity.schedule.endTime).toLocaleString('en-US', TIME_OPTIONS)}
                            </span>
                        </div>
                    </div>
                </div>   
                {authContext.isAuthenticated &&              
                    <div className="row justify-content-center my-3">
                        <Link to={`/activity/${activity.id}/edit`} className="btn btn-outline-info mx-2 px-3 py-1 rounded">Edit</Link>
                        <input type="button" className="btn btn-outline-danger mx-2 px-3 py-1 rounded" value="Delete" onClick={handleDelete} />
                    </div>
                }
            </section>
            <ProviderAccordion />
            <ActivitiesAccordion />
        </div>
    );
}
export default withRouter(ActivityDetail);

