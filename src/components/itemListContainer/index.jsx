import React from 'react';
import { Card } from 'react-bootstrap';

function DealCard({ deal }) {
  const savingsPercentage = deal.savings.slice(0, 2);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={deal.thumb} alt={deal.title} />
      <Card.Body>
        <Card.Title>{deal.title}</Card.Title>
        <Card.Text>
          Precio: ${deal.salePrice}
        </Card.Text>
        <Card.Text>
          Descuento: {savingsPercentage}%
        </Card.Text>
        <Card.Text>
          Fecha de finalización: {deal.dealRating}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default DealCard;