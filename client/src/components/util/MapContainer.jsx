import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { blockStatement } from '@babel/types';

const mapStyles = {
  width: '50vw',
  height: '50vh',
};

const test = 'git push to the same branch after merging';

export class MapContainer extends Component {
  render() {
    return (
      <div className="container bg-danger">
        <div className="row"> 
          <Map className="col p-3 position-static" style={mapStyles} google={this.props.google} zoom={8}>
    
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>My Map</h1>
                </div>
            </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  initialCenter: {
    lat:52.1332,
    long:106.6700,
  },
  apiKey: 'KEY'
})(MapContainer);

