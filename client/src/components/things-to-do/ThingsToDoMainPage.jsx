import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

let headerImageStyle = {
    background: 'linear-gradient(rgba(0, 45, 92, 0.2), rgba(0, 45, 92, 0.2)), url(https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F67240295%2F140350290676%2F1%2Foriginal.20190801-135704?w=800&auto=compress&rect=0%2C0%2C1440%2C720&s=ad2fcdc988c2b8b1d6f26dd277b233eb)',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    height: '13vh',
}

const ThingsToDoMainPage = () => {
    const [thingsTodo, setThingsTodo] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchThingsTodo = async() => {
            setLoading(true);
            const response =  await fetch('http://localhost:8080/api/things_to_do');
            const result = await response.json();
            setThingsTodo(result);
            setLoading(false);
        }
        fetchThingsTodo();
    },[]);

    console.log(thingsTodo);

    if (loading) {
        return ('');
    }
    return (
        <div>
            <header className="m-0 p-0" style={headerImageStyle}>
                <h1 className="text-center text-white mb-4 pt-4">Fun Things to Do with Kids In & Around Saskatoon</h1>
            </header>
            <div className="container mt-3">
                <div className="row">
                    {thingsTodo.map(t => (
                        <div key={t.id} className="col-md-4">
                            <div className="card mt-2">
                                <Link to={`things-to-do/${t.id}`}>
                                    <img src={t.imageUrl} alt="t.name" className="card-img-top rounded"/>
                                </Link>
                                <section className="card-body bg-light p-0">
                                    <Link to={`things-to-do/${t.id}`}>
                                        <h5 className="card-title p-2 bg-info text-white">{t.name}</h5>
                                    </Link>
                                    <div className="px-3 pb-3">
                                        <p className="card-text text-truncate">{t.description}</p>
                                        <p className="card-text">Date: {t.dateInfo}</p>
                                        <p className="card-text">Time: {t.timeInfo}</p>
                                        <Link to={`things-to-do/${t.id}`}>
                                            <p className="text-right text-primary">More details...</p>
                                        </Link>
                                    </div>
                                </section>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThingsToDoMainPage;