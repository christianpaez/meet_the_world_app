import React from "react";

// reactstrap components
import {
  Button,
  Modal
} from "reactstrap";

function ServerModal({isOpen, toggleModal}) {
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
                  >
                    <i className="fa fa-exclamation-triangle fa-3x" />
                  </h5>
                </div>
                <div className="modal-body">
                  Your search did not prompt any results, check your search params
                  and try again.
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

export default ServerModal;