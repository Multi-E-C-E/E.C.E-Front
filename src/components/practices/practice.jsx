import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFecth } from '../../network/useFetch.jsx';
import { MdKeyboardReturn } from 'react-icons/md'
import { Container, ListGroup } from 'react-bootstrap';
import { handleClick } from '../commons/onHandleClick.jsx'
import './../../css/Practices.css';

export const Practice = () => {
	const { items, loanding, error, detaiError } = useFecth('item/practices');
	const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);
	const { state } = useLocation();

	const handlePdfSelection = pdfUrl => {
		setSelectedPdfUrl(pdfUrl + '#zoom=100');
	};

	useEffect(() => {
		console.log(items);
		if (items.length > 0) setSelectedPdfUrl(items[0].file_url);
	}, [items]);

	return (
		<>
			{console.log('lugar', state)}
			<Container>
				 <div className="row align-items-center">
					<div className="col-3">
					<Link to={state?.from || '/dashboard'} onClick={handleClick}>
								<MdKeyboardReturn className='icon' />
							</Link> 
					</div>
					<div className="col-6">
						<h1>Practicas</h1>
					</div>
				 </div>
				<div className='text-center'>
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
						<iframe src={selectedPdfUrl}></iframe>
					</div>
				</div>
			</Container>
		</>
	);
};
