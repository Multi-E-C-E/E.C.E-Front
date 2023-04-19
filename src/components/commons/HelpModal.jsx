import { Container, Modal, Card } from 'react-bootstrap';
import { useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';
import PropTypes from 'prop-types';
import data from './helpText.json';
import gifts from './helpGif.js';
import '../../css/helper.css';

export const HelpModal = ({ from }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<Container>
			<FiHelpCircle className='helper-icon' onClick={handleShow} />
			<Modal show={show} onHide={handleClose} className='text-center'>
				<Modal.Header closeButton>
					<Modal.Title> Ayuda </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Card>
						<Card.Img
							variant='top'
							src={gifts[data[from].demo]}
							alt='explication'
						/>
					</Card>
					<h5> {data[from] && data[from].text}</h5>
				</Modal.Body>
				<Modal.Footer>
					<button className='btn btn-danger' onClick={handleClose}>
						Close
					</button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
};

HelpModal.propTypes = {
	from: PropTypes.string,
};
