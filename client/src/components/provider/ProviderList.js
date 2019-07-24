import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { NavLink } from 'react-router-dom';
import Login from '../user/Login';

const useFetch = (initialState, url) => {
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData({providers: result});
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        setLoading(false);
    }, [url]);
    return { data, loading };
};

const ProviderList = () => {
    const {isAuthenticated} = useContext(AuthContext);
    const { data, loading } = useFetch({providers: []}, "http://localhost:8080/api/providers");

    const Providers = () => {
        return(
            <div className="container mt-3">
                <div className="row justify-content-end">
                    <NavLink to={`providers/new`}>Add new provider...</NavLink>
                </div>
                {   loading ?
                    <p>...loading</p> :
                    <div className="row">
                        {data.providers.map((provider) => (
                            <section key={provider.id}>
                                <h3 className="bg-light text-info text-center rounded py-1 border border-bottom-0 border-right-0 border-left-0">{provider.name}</h3>
                                <div className="row mb-3">
                                    {provider.imageUrls.map((url, index) => (
                                        <div className="col-4" key={index}>
                                            <img className="card-img-top rounded border" src={url} alt={provider.name} />
                                        </div>
                                    ))}
                                </div>
                                <p>{provider.description}</p>
                                <p>Location: {provider.location}</p>
                                <p>Website: {provider.website}</p>
                                <div className="row justify-content-end">
                                    <NavLink
                                        className="mr-3"
                                        to={`/provider/${provider.id}`}
                                    >
                                        Read more...
                                    </NavLink>
                                </div>
                            </section>
                        ))}
                    </div>
                }
            </div>
        );
    };

    return (
        <div className="container mt-3">
            {   isAuthenticated ?
                <Providers /> :
                <div className="row">
                    <h3 className="mx-auto text-info">Please login to view the provider list.</h3>
                    <Login />
                </div>
            }
        </div>
    );
};

export default ProviderList