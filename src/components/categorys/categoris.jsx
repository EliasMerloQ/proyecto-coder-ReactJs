import React, { useState,} from 'react';

function Juegos() {

  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    axios.get("https://www.cheapshark.com/api/1.0/deals")
      .then(response => {
        const juegosFiltrados = response.data.filter(juego => juego.savings < 30);
        setJuegos(juegosFiltrados);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (juegos.length === 0) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Juegos con descuentos del 0 al 30%</h1>
      <ul>
        {juegos.map(juego => (
          <li key={juego.gameID}>{juego.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Juegos