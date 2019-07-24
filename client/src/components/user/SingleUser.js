import React from 'react';

let imgStyle = {
    height: '100px',
    marginLeft: 'auto',
    marginRightm : 'auto',
    width: 'auto'
}

const SingleUser = ({item}) => (
    <div className="card mr-1 mb-1 col-4">
      <div className="card-body text-center">
        <h5 className="card-title">{item.firstName} {item.lastName}</h5>
        <img className="card-img-top d-block" style={imgStyle} src="https://images-na.ssl-images-amazon.com/images/I/81j1RXhpCtL.jpg" alt="Card" />
        <a href="/" className="card-link">{item.email}</a>
      </div>
    </div>
);

export default SingleUser;