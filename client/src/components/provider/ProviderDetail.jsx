import React, { useState, useEffect } from 'react';

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
                    <section className="my-1" key={activity.id}>
                        <div className="row">
                            <img className="col-md-3 my-1 rounded" src={activity.imageUrls[1]} alt={activity.name}></img>
                            <div className="col-md-9">
                                <h5><span className="bg-info text-light p-1 rounded">{activity.name}</span></h5>
                                <div className="row">
                                    <span className="col-6 text-left">{activity.type}</span>
                                    <div className="col-6 text-right">
                                        <span className="badge badge-pill badge-danger kty-bg-pinkish px-2 py-1">Cost: ${activity.cost}</span>
                                    </div>
                                </div>
                                <div className="row">
                                    <span className="col text-left">Age: {activity.ageRange}</span>
                                </div>
                                <div className="row">
                                    <span className="col-md-8 text-left">
                                        {new Date(activity.schedule.startDate).toLocaleString('en-US', DATE_OPTIONS)} - {new Date(activity.schedule.endDate).toLocaleString('en-US', DATE_OPTIONS)} (On {activity.schedule.dayOfWeek})
                                    </span>
                                    <span className="col-md-4 text-right">
                                        {new Date('1970-01-01T' + activity.schedule.startTime).toLocaleString('en-US', TIME_OPTIONS)} - {new Date('1970-01-01T' + activity.schedule.endTime).toLocaleString('en-US', TIME_OPTIONS)}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr/>
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
            <h3 className="bg-light text-info text-center rounded py-1 border border-right-0 border-left-0">{provider.name}</h3>
            <div className="row mb-3">
                {provider.imageUrls.map((url, index) => (
                    <div className="col-md-4" key={index}>
                        <img className="card-img-top rounded border my-1" src={url} alt={provider.name} />
                    </div>
                ))}
            </div>
            <div className="row">
                <p className="col-12">{provider.description}</p>
            </div>
            <div className="row">
                <p className="col-md-6">Location: {provider.streetAddress}, {provider.city}, {provider.province}</p>
                <p className="col-md-6 text-right">Website: {provider.website}</p>
            </div>
            <ActivityList  />
        </div>
    );
}

export default ProviderDetail;