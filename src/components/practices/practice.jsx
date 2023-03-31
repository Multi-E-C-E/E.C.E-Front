import { useState } from 'react';
import { useFecth } from '../../network/useFetch.jsx';
import { Container, ListGroup, Button } from 'react-bootstrap';
import './../../css/practices.css';

export const Practice = () => {
  const { items, loanding, error, detaiError } = useFecth('item/practices');
  const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);
  const [showPdf, setShowPdf] = useState(false);

  const handlePdfSelection = (pdfUrl) => {
    setSelectedPdfUrl(pdfUrl);
    setShowPdf(true);
  };

  return (
    <>
      <Container>
        <div className='visualizador-PDF'>
          <h1>Practicas</h1>
          <h2>Seleccionar practica a ver</h2>
          <embed
            className={`embed-pdf ${showPdf ? 'show' : ''}`}
            src={selectedPdfUrl}
            type='application/pdf'
          />
          <ListGroup className='practicas-list'>
            {items.map((items) => (
              <ListGroup.Item key={items.id_practice}>
                <Button onClick={() => handlePdfSelection(items.file_url)}>
                  Practica {items.id_practice}
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Container>
    </>
  );
};