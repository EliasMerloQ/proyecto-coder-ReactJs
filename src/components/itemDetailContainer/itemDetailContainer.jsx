import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../itemDetail/itemDetail';
import {getGames} from '../../utils/firebase';

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      setIsLoading(true);

      try {
        const games = await getGames();
        const selectedGame = games.find((game) => game.id === id);
        setProducto(selectedGame);
      } catch (error) {
        console.log('Error fetching game:', error);
      }

      setIsLoading(false);
    };

    fetchGame();
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

