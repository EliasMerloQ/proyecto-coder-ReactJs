import React, { createContext, useState } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Crear el proveedor del contexto del carrito
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //Consulto si existe el producto en el carrito por id
  const isInCart = (itemID) =>{
    return cartItems.find((item) => item.id === itemID);
  }

  // Agregar un item al carrito
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Remover un item del carrito
  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Limpiar el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Obtener la cantidad total de items en el carrito
  const getTotalItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // Obtener el subtotal del carrito
  const getCartSubtotal = () => {
    return cartItems.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);
  };

  // Crear el objeto de valor del contexto
  const cartContextValue = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    getTotalItemCount,
    getCartSubtotal,
    isInCart,
  };
  // Imprimir el estado actual del carrito
  console.log('Cart Items:', cartItems);

  // Imprimir la cantidad total de items en el carrito
  console.log('Total Items in Cart:', getTotalItemCount());

  console.log('Valor total' ,getCartSubtotal())
  
  console.log()
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider, };
