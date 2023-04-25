import { useState, useEffect } from 'react';
import { useFecth } from '../../network/useFetch.jsx';
import { Container, ListGroup } from 'react-bootstrap';
import './../../css/Practices.css';

export const Practice = () => {
	const { items, loanding, error, detaiError } = useFecth('item/practices');
	const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

	const handlePdfSelection = pdfUrl => {
		setSelectedPdfUrl(pdfUrl + '#zoom=100');
	};

	useEffect(() => {
		
	}, [items]);

	return (
		<>
			<Container>
				<div className='text-center'>
					<h1>Practicas</h1>
					<h2>Selecciona una parctica para ver</h2>
				</div>
				<div className='d-flex'>
					<ListGroup>
						{items.slice(0, 3).map(items => (
							<ListGroup.Item
								key={items.id_practice}
								style={{ wordWrap: 'break-word' }}
								onClick={() => handlePdfSelection(items.file_url)}
							>
								Practica {items.id_practice}
							</ListGroup.Item>
						))}
					</ListGroup>
					<div className='embed.pdf' style={{ width: '80%' }}>
						<iframe src={selectedPdfUrl} className='view-pdf'></iframe>
					</div>
				</div>
			</Container>
		</>
	);
};
