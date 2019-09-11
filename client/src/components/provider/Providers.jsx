import React from 'react'
import { Link } from 'react-router-dom';

const Providers = ({ providers, loading }) => {
    if (loading) {
        return (<div className="row h75"></div>);
    }

    return (
    <div>
        {providers.map(provider => (
            <div key={provider.id}>
                <section className="mt-2 px-3 py-2 border rounded shadow">
                    <h3 className="bg-light mt-0 text-info text-center rounded py-1">{provider.name}</h3>
                    <div className="row mb-3 justify-content-between">
                        {provider.imageUrls.map((url, index) => (
                            <div className="col-sm-4" key={index}>
                                <img className="card-img-top rounded border" src={url} alt={provider.name} />
                            </div>
                        ))}
                    </div>
                    <p className="kty-preline">{provider.description}</p>
                    <p>Address: {provider.streetAddress}, {provider.city}, {provider.province}</p>
                    <p>Website: <a href={provider.website} target="_blank" rel="noopener noreferrer">{provider.website}</a></p>
                    <p className="row justify-content-end">
                        <Link
                            className="mr-3"
                            to={`/providers/${provider.id}`}
                        >
                            Read more...
                        </Link>
                    </p>
                </section>
            </div>
        ))}
    </div>
);
};

export default Providers;
// return (
//     <div>
//         {providers.map(provider => (
//             <div key={provider.id}>
//                 <section className="mt-2 px-3 py-2 border rounded shadow">
//                     <h3 className="bg-light mt-0 text-info text-center rounded py-1">{provider.name}</h3>
//                     <div className="row mb-3 justify-content-between">
//                         <div className="col-md-3"><img className="card-img-top rounded border" src={provider.imageUrls[1]} alt={provider.name} /></div>
//                         <div className="col-md-9">
//                             <p className="kty-preline">{provider.description}</p>
//                             <p>Address: {provider.streetAddress}, {provider.city.toProperCase()}, {provider.province}</p>
//                             <p>Website: <a href={provider.website} target="_blank" rel="noopener noreferrer">{provider.website}</a></p>
//                             <p className="row justify-content-end">
//                                 <Link
//                                     className="mr-3"
//                                     to={`/providers/${provider.id}`}
//                                 >
//                                     Read more...
//                                 </Link>
//                             </p>
//                         </div>
//                     </div>
                    
//                 </section>
//             </div>
//         ))}
//     </div>
// );
