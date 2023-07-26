import React, { useContext } from "react";
import { Container, Button } from "react-bootstrap";
import { CartContext } from '../../context/cartContext';

function CartItem({ item }) {
  const image = require(`../../assets/productsMedia/${item.imagen}`);
  const { removeItemFromCart } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItemFromCart(item.id);
  };

  return (
    <>
      <Container>
        <div className="borderImg">
          <img className="cartItemImg" src={image} alt={item.nombre} />
        </div>
        <p>{item.nombre} - Cantidad: {item.quantity}</p>
        <p>Precio: ${item.price}</p>
        <Button variant="danger" onClick={handleRemoveItem}>
          Remover del carrito
        </Button>
      </Container>
    </>
  );
}

export default CartItem;
