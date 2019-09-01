import { useState, useEffect } from 'react';

export default function useFetch(initialState, url) {
    
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                //console.log(result);
                setData({result: result});
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        setLoading(false);
    }, [url]);
    return { data, loading };
}