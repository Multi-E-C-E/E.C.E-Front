import { Modal, Button, Container } from "react-bootstrap";
import { handleClick } from '../../commons/onHandleClick.jsx';
import { useShow } from '../../../Hooks/useShow.jsx';

export const UsesModal =  ({ data } ) => {

    const { show, handleClose, handleShow } = useShow();
    
    return (
        <Container>
        <div className="row">
            <div className="col-12">
                <Button variant="primary" onClick={handleShow}>What can you with this</Button> 
            </div>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title className="text-center">What can you do?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {data.aplication}
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