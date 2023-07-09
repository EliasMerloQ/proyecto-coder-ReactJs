import React from "react"
import { Container } from "react-bootstrap"

function CartItem( {item}){
  const image = require(`../../assets/productsMedia/${item.imagen}`)
    return (
      <>
       <Container>
        <div className="borderImg">
          <img  className="cartItemImg" src={image} alt={item.nombre}/>
        </div>
        <p>{item.nombre} - Cantidad: {item.quantity}</p>
        <p>Precio: ${item.price}</p>
       </Container>
      </>
    )
}
export default CartItem;