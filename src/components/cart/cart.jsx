import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import CartItem from '../cartItem/cartItem';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, clearCart, getCartSubtotal } = useContext(CartContext);

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className='cartBody'>
      <div className='titleCont'>
        <h1>Carrito de compras</h1>
      </div>
      <Container className='containerCart'>
        <div className='blackContainer'>
        {cartItems.length > 0 ? (
        <div>
          <div className='itemsToBuy'>
            {cartItems.map((item) => (
            <CartItem key={item} item={item}/>
          ))}
          <p className='finalPrice'>Precio total: ${getCartSubtotal()}</p>
          <Button className='btnDelete' onClick={handleClearCart}>Limpiar carrito</Button>
          <Link to='/checkout' ><Button className='btnFinish'>Finalizar Compra</Button></Link>
          </div>
        </div>
      ) : (
        <p>No hay elementos en el carrito</p>
      )}
        </div>
      </Container>
    </div>
  );
}

export default Cart;

