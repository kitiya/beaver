import React, { useState, useEffect } from 'react';

export default function GreetingHooks(props) {
    const [name,setName] = useState('Dan');
    const [surname, setSurname] = useState('Abramov');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleSurnameChange(e) {
        setSurname(e.target.value);
    }

    useEffect(() => {
        document.title = name + " " + surname;
    });

    const [windowWidth, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });

    return (
        <section className="container mt-3">
            <div className="row">
                <input
                    value = {name}
                    onChange = {handleNameChange}
                />
            </div>
            <div className="row">
                <input
                    value = {surname}
                    onChange = {handleSurnameChange}
                />
            </div>
            <div className="row">
                <p>{windowWidth}</p>
            </div>
        </section>
    );
};