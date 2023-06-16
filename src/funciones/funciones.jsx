import axios from "axios";

const Game = async (id, state) => {
  const peticion = await axios.get(`https://www.cheapshark.com/api/1.0/deals/${id}`)
  state(peticion)
}
export{
  Game
}