import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../assets/data/products.json';
import ItemDetail from '../itemDetail/itemDetail';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const simulateLoading = async () => {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Buscar el juego con la ID correspondiente en el array de productos
      const selectedGame = products.find((game) => game.id === parseInt(id));
      setProducto(selectedGame);

      setIsLoading(false);
    };
    simulateLoading();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <div>Cargando...</div>
      ) : producto ? (
        <ItemDetail producto={producto} />
      ) : (
        <div>No se encontró el juego</div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
