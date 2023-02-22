import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
	return (
		<Navbar className=' footer'>
			<Container>
				<Row>
					<Col md='6'>
						<p>&copy; ECE.</p>
					</Col>
					<Col md='6' className='text-md-end'>
						<p>
							Made with{' '}
							<span role='img' aria-label='love'>
								❤️
							</span>{' '}
							by Yo
						</p>
					</Col>
				</Row>
			</Container>
		</Navbar>
	);
}

export default Footer;
