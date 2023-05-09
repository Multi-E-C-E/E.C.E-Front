import { useState, useEffect } from 'react';
import { useFecth } from '../../network/useFetch.jsx';
import { Container, ListGroup } from 'react-bootstrap';
import './styles/practices.css';

export const Practice = () => {
	const { data, loanding, error, detaiError } = useFecth('item/practices');
	const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);

	const handlePdfSelection = pdfUrl => {
		setSelectedPdfUrl(pdfUrl + '#zoom=100');
	};

	useEffect(() => {}, [data]);

	return (
		<>
			<h1>Practicas</h1>
			<div className='section_container'>
				<div className='list_practice_container'>
					<div className='list_practice'>
						{data.slice(0, 3).map(items => (
							<div
								className='btn_onSelectedPractice'
								key={items.id_practice}
								style={{ wordWrap: 'break-word' }}
								onClick={() => handlePdfSelection(items.file_url)}
							>
								<h1>Practica {items.id_practice}</h1>
							</div>
						))}
					</div>
				</div>

				<div className='view_pdf_container'>
					<iframe src={selectedPdfUrl} className='view_pdf'></iframe>
				</div>
			</div>
		</>
	);
};
