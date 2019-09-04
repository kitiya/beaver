import React, { useState, useEffect } from 'react';

const iconStyle = {
    fontSize: '2rem',
    marginLeft: '10px',
    marginRight: '10px',
}

const ThingsToDoDetail = ({ match }) => {
    const id = match.params.id;
    const [thingToDo, setThingToDo] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchThingsTodoDetail = async() => {
            setLoading(true);
            const response =  await fetch(`http://localhost:8080/api/things_to_do/${id}`);
            const result = await response.json();
            setThingToDo(result);
            setLoading(false);
        }
        fetchThingsTodoDetail();
    },[id]);

    if (loading) {
        return ('');
    }

    return (
        <div className="container mt-3">
            <h3 className="text-light text-center bg-info px-2 py-1">{thingToDo.name}</h3>
            <div className="row">
                <div className="col-md-4">
                    <img className="img-thumbnail" src={thingToDo.imageUrl} alt={thingToDo.name}/>
                </div>
                <div className="col-md-8">
                    <p>{thingToDo.description}</p>
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <i className="layout-icon text-primary fa fa-calendar" style={iconStyle}></i>
                            <span>{thingToDo.dateInfo}</span>
                        </div>
                        <div className="col-md-6 ">
                            <i className="layout-icon text-primary fa fa-calendar" style={iconStyle}></i>
                            <span>{thingToDo.timeInfo}</span>
                        </div>
                    </div>
                    <p>
                        <i className="layout-icon text-primary fa fa-globe" style={iconStyle}></i>
                        <span>{thingToDo.location}</span>
                    </p>

                    <p>
                        <i className="layout-icon text-primary fa fa-globe" style={iconStyle}></i>
                        <a href={thingToDo.website}>Website</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ThingsToDoDetail