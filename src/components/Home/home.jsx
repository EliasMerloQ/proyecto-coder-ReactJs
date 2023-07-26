import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <>
      <div className='homeP'>
        <div className='homeUno'>
          <section className='marca'>
            <h1 className='homeTitle'>Lucy</h1>
          </section>
          <section className='textHome'>
            <p>¡Meow! Bienvenidos a Lucy, el rincón espacial donde los videojuegos despiertan tu curiosidad y te transportan a aventuras galácticas. Soy el Maullador Cósmico, y estoy aquí para guiarte a través de esta página web que combina la temática espacial con la diversión de los videojuegos.</p>
            <p>En Lucy, cada rincón está lleno de misterio y asombro. Explora nuestra galaxia de juegos y déjate llevar por las estrellas que brillan con intensidad. Aquí encontrarás una selección estelar de títulos espaciales que te harán volar más allá de las fronteras de tu imaginación felina.</p>
          </section>
          <section className='linkProductos'>
            <Link to={'/juegos'} className='linkbtn'><button >Ver productos</button></Link>
          </section>
        </div>
          <div className='homeDos img-uno'>
          </div>
      </div>
    </>
  );
}

export default Home;