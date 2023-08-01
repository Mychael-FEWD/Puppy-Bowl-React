import { useState, useEffect } from "react";
import fetchPlayers from "../API/index";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function PlayersFetch() {
      try {
        const data = await fetchPlayers();
        setPlayers(data);
      } catch (error) {
        setError(error);
      }
    }
    PlayersFetch();
  }, []);

  return (
    <>
      <h1>players</h1>
      {console.log(players)}
      <div id="players-cont">
        {players &&
          players.map((player) => (
            <div key={player.id} className="player">
              <div className="img-cont">
                <img src={`${player.imageUrl}`} className="player-img" />
              </div>
              <h3>{player.name}</h3>
              <p>{player.status}</p>
            </div>
          ))}
      </div>

      {error && <p>{error}</p>}
    </>
  );
}
