import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth-context/AuthContext';

const Login = () => {
    const {toggleAuth} = useContext(AuthContext);

    return (
        <div className="container mt-3">
            <form
                className="col-6 mx-auto p-3 border border-outline-info rounded"
                onSubmit={toggleAuth}
            >
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input required type="email" className="form-control" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input required type="password" className="form-control" id="pwd" />
                </div>
                <div className="form-group form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" /> Remember me
                    </label>
                </div>
                <button type="submit" className="btn btn-info d-block mx-auto">Submit</button>
            </form>
        </div>
    );
};

export default Login;