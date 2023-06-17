import axios from "axios";

const Game = async (id, setState) => {
  try {
    const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?id=${id}`)
    setState(response.data)
  } catch (error) {
    console.error(error)
  }
}

export {
  Game
}