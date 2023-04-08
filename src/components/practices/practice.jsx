import { useState } from 'react';
import { useFecth } from '../../network/useFetch.jsx';
import { Container, ListGroup, Button } from 'react-bootstrap';
import './../../css/Practices.css';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Practice = () => {
	const { items, loanding, error, detaiError } = useFecth('item/practices');
	const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);
	const [showPdf, setShowPdf] = useState(false);

	const handlePdfSelection = pdfUrl => {
		setSelectedPdfUrl(pdfUrl + '#zoom=100');
		setShowPdf(true);
	};

	return (
		<>
			<Container>
				<div className='text-center'>
					<h1>Practicas</h1>
					<h2>Selecciona una parctica para ver</h2>
				</div>
				<div className='d-flex'>
					<ListGroup
						className='practicas-list'
						style={{ overflowY: 'auto', width: '20%' }}
					>
						{items.slice(0, 3).map(items => (
							<ListGroup.Item
								key={items.id_practice}
								style={{ wordWrap: 'break-word' }}
							>
								<a
									href={items.file_url}
									onClick={e => {
										e.preventDefault();
										handlePdfSelection(items.file_url);
									}}
								>
									Practica {items.id_practice}
								</a>
							</ListGroup.Item>
						))}
					</ListGroup>
					<div className='embed.pdf' style={{ width: '80%' }}>
						<iframe
							className='embed-responsive-item'
							src={selectedPdfUrl}
						></iframe>
					</div>
				</div>
			</Container>
		</>
	);
};
