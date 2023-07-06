import React, { useEffect, useState } from 'react';

function ItemDetail({ producto }){
  const video = require(`../../assets/productsMedia/${producto.video}`)
  const imagen = require(`../../assets/productsMedia/${producto.portrait}`)
  return(
    <>
    <div>
      <h1>{producto.nombre}</h1>
      <video controls src={video}></video>
      <h4>{producto.sinopsis}</h4>
    </div>
    </>
  )
}
export default ItemDetail