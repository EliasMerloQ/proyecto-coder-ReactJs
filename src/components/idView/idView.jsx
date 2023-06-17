import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Game } from '../../funciones/funciones';

function IdView() {
  const [juego, setJuego] = useState(null)
  const params = useParams()

  useEffect(() => {
    Game(params.id, setJuego)
  }, [params.id])

  return (
    <>
      {juego != null ? (
        <div>
          <h1>juego con id {params.id}</h1>
          <h1>{juego.info.title}</h1>
        </div>
      ) : (
        <div>
          <h1>Cargando...</h1>
        </div>
      )}
    </>
  )
}

export default IdView;