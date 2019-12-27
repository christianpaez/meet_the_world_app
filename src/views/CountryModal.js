import React from "react";

// reactstrap components
import {
  Button,
  Modal
} from "reactstrap";
import GoogleMapReact from 'google-map-react';
import {GOOGLE_API_KEY} from '../services/config';

function CountryModal({isOpen, toggleModal, data}) {

    const mapData = {
      center: {
        lat: data.latlng[0],
        lng: data.latlng[1]
      },
      zoom: 6
    };
    const MapMarker = ({ text }) => <div><i className="fa fa-map-marker" />{text}</div>;
    return(
        <Modal isOpen={isOpen} toggle={toggleModal}>
                 <div className="modal-header">  
                  <button
                    aria-label="Close"
                    className="close"
                    type="button"
                    onClick={toggleModal}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                  <h5
                    className="modal-title text-center"
                    id="exampleModalLabel"
                  > <b>Country Details</b>
                  </h5>
                </div>
                <div className="modal-body">
                  <p><b>Full Name: </b> {data.name}</p>
                  <p><b>Subregion: </b> {data.subregion}</p>
                  <p><b>Population: </b> {data.population}</p>
                  <p><b>Alpha Code: </b> {data.alpha2Code}</p>
                  <p><b>Top Level Domain: </b> {data.topLevelDomain.length === 0 ? "None" : data.topLevelDomain.map((element)=>` ${element}`)}</p>
                  <p><b>Languages: </b> {data.languages.length === 0 ? "None" : data.languages.map((element)=>` ${element.name}`)}</p>
                  <p><b>Borders: </b> {data.borders.length === 0 ? "None" : data.borders.map((element)=>` ${element}`)}</p>
                  {/*GOOGLE MAP*/}
                  <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: `${GOOGLE_API_KEY}`}}
                      defaultCenter={mapData.center}
                      defaultZoom={mapData.zoom}
                    >
                      <MapMarker
                        lat={data.latlng[0]}
                        lng={data.latlng[1]}
                        text="Country Location"
                      />
                    </GoogleMapReact>
                  </div>
                </div>
                <div className="modal-footer">
                  <div className="left-side">
                    <Button
                      className="btn-link"
                      color="default"
                      type="button"
                      onClick={toggleModal}
                    >
                      Close
                    </Button>
                  </div>
                  <div className="divider" />
                </div>
               
             </Modal>
    );
}

export default CountryModal;