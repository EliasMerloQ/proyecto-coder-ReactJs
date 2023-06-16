import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Game } from '../../funciones/funciones';

function IdView(){
  const{juego, setJuego} = useState(null)
  const params = useParams()
  useEffect(()=>{
    Game(params.id, setJuego)
  },[])
  return(
    <>
    {juego != null ? (
      <div>
       <h1>juego con id {params.id}</h1>
       <h2> {juego.title} </h2>
      </div>
    ) : ('No existe juego')}
    </>
  )
}
export default IdView;