import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Providers from './Providers';
import Pagination from '../util/Pagination';

const ProviderMainPage = () => {
    const authContext = useContext(AuthContext);
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const providersPerPage = 3;

    useEffect(() => {
        const fetchProviders = async() => {
            setLoading(true);
            const response = await axios.get(`http://localhost:8080/api/providers?page=${currentPage}&size=${providersPerPage}`);
            const data = response.data;
            //console.log(response.data);
            
            setProviders(data.content);
            setTotalPages(data.totalPages);

            setLoading(false);
        };
        fetchProviders();
    },[currentPage]);

    // change page
    const paginate = (pageNumber => setCurrentPage(pageNumber-1));

    return(
        <div className="container mt-3">
            <div className="row justify-content-center">
                <Providers providers={providers} loading={loading} />
            </div>
            <div className="row justify-content-between mt-3">
                <div className="col-md-6 px-0">
                    <Pagination totalPages={totalPages} paginate={paginate}/>
                </div>
                <div className="col-md-6 px-0 text-right">
                    {authContext.isAuthenticated &&
                        <Link to={`providers/new`} className="btn bg-info text-white px-3 rounded-pill">Add new provider...</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProviderMainPage;