import React, { useState, useEffect } from 'react';

export default function ProviderList() {
    const [data, setData] = useState({providers: []});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/providers');
                const result = await response.json();
                setData({providers: result});
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container mt-3">
            {data.providers.map((provider) => (
                <section key={provider.id}>
                    <h3 className="text-info">{provider.name}</h3>
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
                    <hr />
                </section>
            ))}
        </div>
    );
};