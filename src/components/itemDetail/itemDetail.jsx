import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import {  Container } from 'react-bootstrap';
import ItemCount from '../itemCount/ItemCount';

function ItemDetail({ producto }) {
  const video = require(`../../assets/productsMedia/${producto.video}`);
  const imagen = require(`../../assets/productsMedia/${producto.portrait}`);

  const { addItemToCart, getCartSubtotal, isInCart } = useContext(CartContext); // Obtener la función addToCart desde el contexto del carrito  
  
  const handleAddToCart = (cantidad) => {

  const gameSale = {
      id : producto.id,
      nombre: producto.name,
      price: producto.sale_price,
      imagen: producto.portrait,
      subtotal: getCartSubtotal().toFixed(2),
      quantity: cantidad  
    }
  const game = {
      id : producto.id,
      nombre: producto.name,
      price: producto.price,
      imagen: producto.portrait,
      subtotal: getCartSubtotal().toFixed(2),
      quantity: cantidad
  }
    const itemInCart = isInCart(producto.id)

    if(!itemInCart){
      if(producto.sale === true){
        addItemToCart(gameSale);
      }
      else{
        addItemToCart(game)
      }
       // Llamar a la función addToCart con el producto como argumento
    }
  };

  return (
    <div className='itemDetail'>
      <div className='itemDetailLanding'>
        <video className='itemDetailVideo' controls src={video}></video>
      </div>
      <div className='itemLayoutContainer'>
        <h1 className='itemDetailTitle'>{producto.name}</h1>
        <h4>{producto.synopsis}</h4>
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
