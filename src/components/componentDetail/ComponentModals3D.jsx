import { Container, Modal, Card } from 'react-bootstrap';
import { useState } from 'react';
import { GoEyeClosed } from 'react-icons/go';
import PropTypes from 'prop-types';
import M3D from '../commons/M3D.jsx';

export const LateralModal3D = ({ data }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Container>
			<div className='row'>
				<div className='col-12'>
					<Card onClick={handleShow}>
						<Card.Body className='card-dets'>
							<Card.Title> {data.title} </Card.Title>
						</Card.Body>
					</Card>
				</div>
			</div>
			<br />
			<Modal show={show} onHide={handleClose} className='text-center'>
				<Modal.Header closeButton>
					<Modal.Title> {data.title} </Modal.Title>
				</Modal.Header>
				<Modal.Body>{data.url && <M3D asset3D={data} />}</Modal.Body>
				<Modal.Footer>
					<GoEyeClosed onClick={handleClose}></GoEyeClosed>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};

LateralModal3D.propTypes = {
	data: PropTypes.shape({
		title: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
	}),
};
