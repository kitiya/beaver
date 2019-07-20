import React, { useState } from 'react';

export default function GreetingHooks(props) {
    const [name,setName] = useState('Dan');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    return (
        <section className="container mt-3">
            <div className="row">
                <input
                    value = {name}
                    onChange = {handleNameChange}
                />
            </div>
        </section>
    );
};