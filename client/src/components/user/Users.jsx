import React from 'react';
import AddUsers from './AddUsers';
import useFetch from '../util/useFetch';

export default function Users() {
    const url = "http://localhost:8080/api/users";
    const { data } = useFetch({ result: [] }, url);
    const users = data.result;
    console.log(users);
    
    if (!users) {
        return <div>Loading...</div>
    }

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-3 bg-light p-0">
                    <AddUsers />
                </div>
                <div className="col-9 bg-light">
                    <div className="row justify-content-between">
                        {users.map((item) => (
                            <div key={item.id} className="card col-md-4 p-2 m-0">
                                <img className="card-img-top img-fluid" src="https://cdn.vox-cdn.com/thumbor/ZROlarAjWbjX5nCxiZNUPnwXwRk=/148x0:1768x1080/1200x800/filters:focal(148x0:1768x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/46147742/cute-success-kid-1920x1080.0.0.jpg" alt="Card" />
                                <div className="card-body text-center text-truncate">
                                    <h5 className="card-title  text-truncate">{item.role}: {item.firstName} {item.lastName}</h5>
                                    <a href="/" className="card-link">{item.email}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
    
}