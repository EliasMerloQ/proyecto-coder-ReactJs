import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DealCard({ deal }) {
  const savingsPercentage = deal.savings.slice(0, 3);
  return (
    <Card className='card_container'>
      <Link to={`/juegos/${deal.gameID}`}>
        <div className='hero-image-container'>
          <Card.Img className='image' variant="top" src={deal.thumb} alt={deal.title} />
        </div>
        <Card.Body>
          <Card.Title className='titleCard'>{deal.title}</Card.Title>
          <div className='d-flex justify-content-end'>
          <Card.Text className='textCard1'>{savingsPercentage}%
          </Card.Text>
          <Card.Text className='textCard2'>${deal.salePrice}
          </Card.Text>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default DealCard;