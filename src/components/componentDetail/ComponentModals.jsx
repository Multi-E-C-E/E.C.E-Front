import { Container, Modal, Card } from 'react-bootstrap';
import { useState } from 'react';
import { GoEyeClosed } from 'react-icons/go';
import PropTypes from 'prop-types';

export const LateralModal = ({ data }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<Container>
			<div className='row'>
				<div className='col-12'>
					<Card onClick={handleShow}>
						<Card.Body className='btn_modal_container'>
							<Card.Title>
								{' '}
								{data.title}{' '}
								<img className='preview_modal_img' src={data.image_url} />
								<h5 className='blinking_message'>Clic aquí para más información</h5>
							</Card.Title>
						</Card.Body>
					</Card>
				</div>
			</div>
			<br />
			<Modal show={show} onHide={handleClose} className='text-center'>
				<Modal.Header closeButton>
					<Modal.Title> {data.title} </Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{data && data.haveImg && (
						<Card className='img-dets'>
							<Card.Img
								variant='top'
								className='img-card'
								src={data.image_url}
							/>
						</Card>
					)}
					{data && data.description}
				</Modal.Body>
				<Modal.Footer>
					<GoEyeClosed onClick={handleClose}></GoEyeClosed>
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
	}),
};
