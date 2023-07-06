import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CardList({ game }) {
  const image = require(`../../assets/productsMedia/${game.portrait}`) 
  return (
    <Card className='card_container'>
      <Link to={`/juegos/${game.id}`}>
        <div className='hero-image-container'>
          <Card.Img className='image' variant="top" src={image} alt={game.nombre} />
        </div>
        <Card.Body>
          <Card.Title className='titleCard'>{game.nombre}</Card.Title>
          <div className='d-flex justify-content-end'>
            {game.sale === false ? (
              <Card.Text className='textCard2'>${game.price}
              </Card.Text>
            ):(
              <>
                <Card.Text className='textCard1'>{game.percentage}%
                </Card.Text>
                <Card.Text className='textCard2'>${game.sale_price}
                </Card.Text>
              </>)}
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default CardList;