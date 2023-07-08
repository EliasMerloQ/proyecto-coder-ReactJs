import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import {  Container } from 'react-bootstrap';
import ItemCount from '../itemCount/ItemCount';

function ItemDetail({ producto }) {
  const video = require(`../../assets/productsMedia/${producto.video}`);
  const imagen = require(`../../assets/productsMedia/${producto.portrait}`);

  const { addItemToCart, getCartSubtotal } = useContext(CartContext); // Obtener la función addToCart desde el contexto del carrito  

  const handleAddToCart = (cantidad) => {
    const juego = {
      id : producto.id,
      nombre: producto.nombre,
      precio: producto.price,
      imagen: producto.portrait,
      subtotal: getCartSubtotal(),
      quantity: cantidad
    }
    addItemToCart(juego); // Llamar a la función addToCart con el producto como argumento
  };

  return (
    <div className='itemDetail'>
      <div className='itemDetailLanding'>
        <video className='itemDetailVideo' controls src={video}></video>
      </div>
      <div className='itemLayoutContainer'>
        <h1 className='itemDetailTitle'>{producto.nombre}</h1>
        <h4>{producto.sinopsis}</h4>
        <Container className='d-flex justify-content-center mt-4'>
          <h4> Quedan solo {producto.stock} copias!</h4>
        </Container>
        <Container className='d-flex justify-content-center mb-5'>
          <ItemCount ValInicial={1} stock={producto.stock} handleAddToCart={handleAddToCart}/>
        </Container>
      </div>
    </div>
  );
}

export default ItemDetail;
