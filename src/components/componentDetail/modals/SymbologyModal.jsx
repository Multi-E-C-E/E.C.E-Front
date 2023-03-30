import { Container, Modal, Card, Button } from "react-bootstrap";
import { useState } from "react";
// import { useShow } from '../../../Hooks/useShow.jsx';



export const SymbologyModal =  ( { data } ) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <Container>
       <div className="row">
            <div className="col-12">
                <Button variant="primary" onClick={handleShow}> Symbology </Button>
            </div>
        </div>
        <Modal show={show} onHide={handleClose} className="text-center">
        <Modal.Header closeButton>
            <Modal.Title>Symbology</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            { data && <Card className='dash-card'>
                <Card.Img
                    variant='top'
                    className='img-card'
                    src={data.image_url}
                    alt={data.name}
                />
            </Card>}
            {data && data.description}
            </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-danger" onClick={handleClose}>
            Close
            </button>
        </Modal.Footer>
        </Modal>
       </Container>
    );
};