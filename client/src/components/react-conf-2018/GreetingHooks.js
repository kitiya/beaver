import React, { useState, useEffect } from 'react';

export default function GreetingHooks(props) {
    const name = useFormInput('Dan');
    const surname = useFormInput('Abramov');
    const windowWidth = useWindowWidth();
    useDocumentTitle(name.value + ' ' + surname.value);

    return (
        <section className="container mt-3">
            <div className="row">
                <input {...name} />
            </div>
            <div className="row">
                <input {...surname}/>
            </div>
            <div className="row">
                <p>{windowWidth}</p>
            </div>
        </section>
    );
};

function useFormInput(initialValue) {
    const [value,setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return {
        value,
        onChange: handleChange,
    }
}

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    });
}

function useWindowWidth() {
    const [windowWidth, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
    return windowWidth;
}