import React from 'react';
import UnderConstructions from '../shared/UnderConstruction';

const ProviderDetails = () => {
    return (
        <div className="container">
            <h1>Provider Detail...</h1>
            <UnderConstructions />
            {/*
            <div className="row">
                <h3 className="bg-light text-info text-center rounded py-1 border border-bottom-0 border-right-0 border-left-0">{props.provider.name}</h3>
                <div className="row mb-3">
                    {props.provider.imageUrls.map((url, index) => (
                        <div className="col-4" key={index}>
                            <img className="card-img-top rounded border" src={url} alt={props.provider.name} />
                        </div>
                    ))}
                </div>
                <p>{props.provider.description}</p>
                <p>Location: {props.provider.location}</p>
                <p>Website: {props.provider.website}</p>
            </div>
            */}
        </div>
    );
}

export default ProviderDetails;