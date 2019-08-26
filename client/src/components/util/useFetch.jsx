import React, { useEffect } from 'react';


export const useFetch = (url) => {
    useEffect(() => {
        fetch(url)
        .then(response => response.json)
        .then(result => {
            console.log(result);
        });
    }, [url]);

    return result;
};

export const useFetchOrg = (url) => {
    useEffect(() => {
        fetch(url)
        .then(response => response.json)
        .then(result => {
            console.log(result);
        });
    }, [url]);

    return result;
};