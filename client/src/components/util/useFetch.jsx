import { useState, useEffect } from 'react';

export default function useFetch(initialState, url) {
    const [data, setData] = useState(initialState);
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData({result: result});
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        //setLoading(false);
    }, [url]);
    //return { data, loading };
    return { data };
}

//export default function useFetch(url) {
//    const [response, setResponse] = useState(null);
//    const [error, setError] = useState(null);
//
//    useEffect(() => {
//        const fetchData = async () => {
//             try {
//                const res = await fetch(url);
//                const json = await res.json();
//                setResponse(json);
//             } catch (error) {
//                setError(error);
//             }
//        };
//        fetchData();
//    }, [url]);
//    return { response, error };
//}