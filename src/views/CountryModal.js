import React from "react";

// reactstrap components
import {
  Button,
  Modal
} from "reactstrap";

function CountryModal({isOpen, toggleModal, data}) {
  
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