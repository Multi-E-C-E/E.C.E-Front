import { Container, Modal, Card, Button } from 'react-bootstrap';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const LateralModal = ({ data }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Container>
			<div className='row'>
				<div className='col-12'>
					<Button variant='primary' onClick={handleShow}>
						{' '}
						{data.title}{' '}
					</Button>
				</div>
			</div>
			<br />
			<Modal show={show} onHide={handleClose} className='text-center'>
				<Modal.Header closeButton>
					<Modal.Title> {data.title} </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{data && data.haveImg && (
						<Card>
							<Card.Img
								variant='top'
								src={data.image_url}
								alt={data.name}
							/>
						</Card>
					)}
					{data && data.description}
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

LateralModal.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		haveImg: PropTypes.bool.isRequired,
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		image_url: PropTypes.string.isRequired,
	}).isRequired,
};
