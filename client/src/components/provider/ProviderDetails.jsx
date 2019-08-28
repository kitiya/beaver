import React, { useState, useEffect } from 'react';

const useFetchProvider = (initialState, activityUrl) => {
    const [value, setValue] = useState(initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(activityUrl);
                const result = await response.json();
                setValue(result);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [activityUrl]);

    return  { value };
}

const ProviderDetails = ({ match }) => {
    console.log(match);
    const id = match.params.id;
    const providerUrl = `http://localhost:8080/api/providers/${id}`;
    const provider = useFetchProvider({value: []}, providerUrl).value;
    //console.log(provider);

    if (!provider.imageUrls) {
        provider.imageUrls = [];
    }
    return (
        <div className="container mt-3">
            <h3 className="bg-light text-info text-center rounded py-1 border border-right-0 border-left-0">{provider.name}</h3>
            <div className="row mb-3">
                {provider.imageUrls.map((url, index) => (
                    <div className="col-sm-4" key={index}>
                        <img className="card-img-top rounded border" src={url} alt={provider.name} />
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
        </div>
    );
}

export default ProviderDetails;