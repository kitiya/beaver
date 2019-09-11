import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import NumberFormat from 'react-number-format';

const useFetchProvider = (initialState, providerUrl) => {
    const [value, setValue] = useState(initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(providerUrl);
                const result = await response.json();
                setValue(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [providerUrl]);

    return  { value };
}

const ProviderDetail = ({ match }) => {
    const authContext = useContext(AuthContext);
    const id = match.params.id;
    const providerUrl = `http://localhost:8080/api/providers/${id}`;
    const provider = useFetchProvider({value: []}, providerUrl).value;
    
    const ActivityList = () => {
        const [activityList, setActivityList] = useState([]);
        useEffect( () => {
            const fetchActivityList = async () => {
                const url = `http://localhost:8080/api/activities/search?provider=${provider.name}`;
                console.log(url);
                try {
                    const response = await fetch(url);
                    const result = await response.json();
                    setActivityList(result);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchActivityList();
        }, []);
    
        const DATE_OPTIONS = { year: 'numeric', month: 'short', day: 'numeric'};
        const TIME_OPTIONS = { hour: 'numeric', minute: 'numeric'};

        if (activityList.length === 0) {
            return ('');
        }

        return (
            <div>
                <header className="bg-secondary rounded">
                    <h4 className="text-light px-3 py-1 text-center">Classes currently offered by {provider.name}</h4>
                </header>
                {activityList.map((activity) => (
                    <section className="my-2" key={activity.id}>
                        <Link to={`/activity/${activity.id}`} className=" text-decoration-none">
                            <div className="row align-items-top">
                                <div className="col-md-3">
                                    <img className="img-thumbnail rounded" src={activity.imageUrls[1]} alt={activity.name}></img>
                                </div>
                                <div className="col-md-9 mt-1">
                                    <h5><span className="bg-info text-light p-1 rounded">{activity.name}</span></h5>
                                    <div className="row my-3">
                                        <span className="col-6 text-left">{activity.type.toProperCase()}</span>
                                        <div className="col-6 text-right">
                                            <span className="badge badge-pill badge-danger kty-bg-pinkish px-2 py-1">Cost: ${activity.cost}</span>
                                        </div>
                                    </div>
                                    <div className="row my-2">
                                        <span className="col text-left">Age: {activity.ageRange}</span>
                                    </div>
                                    <div className="row my-2">
                                        <span className="col-md-8 text-left">
                                            {new Date(activity.schedule.startDate).toLocaleString('en-US', DATE_OPTIONS)} - {new Date(activity.schedule.endDate).toLocaleString('en-US', DATE_OPTIONS)} (On {activity.schedule.dayOfWeek.toProperCase()})
                                        </span>
                                        <span className="col-md-4 text-right">
                                            {new Date('1970-01-01T' + activity.schedule.startTime).toLocaleString('en-US', TIME_OPTIONS)} - {new Date('1970-01-01T' + activity.schedule.endTime).toLocaleString('en-US', TIME_OPTIONS)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </Link>
                    </section>
                ))}
            </div>
        );
    };

    if (!provider.imageUrls) {
        provider.imageUrls = [];
    }

    return (
        <div className="container mt-3" key={provider.id}>
            <section className="border rounded px-3 py-2 mb-3">
                <h3 className="bg-light text-info text-center round">{provider.name}</h3>
                <div className="row mb-3">
                    {provider.imageUrls.map((url, index) => (
                        <div className="col-md-4" key={index}>
                            <img className="card-img-top img-thumbnail rounded border my-1" src={url} alt={provider.name} />
                        </div>
                    ))}
                </div>
                <div className="row">
                    <p className="col-12 kty-preline">{provider.description}</p>
                </div>
                <div className="row my-1">
                    <p className="col-md-6">Location: {provider.streetAddress}, {provider.city && provider.city.toProperCase()}, {provider.province}</p>
                    <p className="col-md-6">More details: <a href={provider.website}>Website</a></p>
                </div>
                <div className="row my-1">
                    <p className="col-md-6">Phone: <NumberFormat format="###-###-####" value={provider.phone} displayType={'text'} /></p>
                    <p className="col-md-6">Email: {provider.email}</p>
                </div>
                {authContext.isAuthenticated && 
                    <div className="row justify-content-center mt-1 mb-3">
                        <Link to={`/providers/edit/${provider.id}`} className="btn btn-outline-info mx-2 px-3 py-1 rounded">Edit</Link>
                        <Link to={`/providers/delete/${provider.id}`} className="btn btn-outline-danger mx-2 px-3 py-1 rounded">Delete</Link>
                    </div>
                }
            </section>
            <section className="border rounded px-3 py-2 mb-3">
                <ActivityList  />
            </section>
        </div>
    );
}

export default ProviderDetail;