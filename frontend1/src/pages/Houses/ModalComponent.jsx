/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Button, Form, Modal } from "react-bootstrap";

const ModalComponent = ({
  handleShow,
  handleClose,
  show,
  postBookData,
  fee,
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pay : {fee} TK </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Select Payment Method:
          <Form.Select aria-label="Default select example">
            <option className="py-4">Select One</option>
            <option value="1" className="py-4">
              NAGAD (01785546152)
            </option>
            <option value="2" className="py-4">
              BKASH (01874655565)
            </option>
            <option value="3" className="py-4">
              ROCKET (01585596655)
            </option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="success"
            onClick={() => {
              postBookData();
              handleClose();
            }}
          >
            Pay & Booked
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComponent;
