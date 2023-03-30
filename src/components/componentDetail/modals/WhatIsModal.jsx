import { Container, Modal, Button } from "react-bootstrap";
import { handleClick } from '../../commons/onHandleClick.jsx';
import { useShow } from '../../../Hooks/useShow.jsx';

export const WhatIsModal =  ({ data }) => {

    const { show, handleClose, handleShow } = useShow();

    return (
        <Container  className="text-center">
        <div className="row">
            <div className="col-12">
                <Button variant="primary" onClick={handleShow}>What is?</Button>
                </div>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>What is?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {data.description}
        </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-danger" onClick={() => {handleClose(); handleClick()}}>
            Close
            </button>
        </Modal.Footer>
        </Modal>
       </Container>
    );
};