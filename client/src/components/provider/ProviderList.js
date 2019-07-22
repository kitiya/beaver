import React, { useState, useEffect } from 'react';

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
}

export default function ProviderList() {
    const { data, loading } = useFetch({providers: []}, "http://localhost:8080/api/providers");

    return (
        <div className="container mt-3">
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
                        </section>
                    ))}
                </div>
            }
        </div>
    );
};