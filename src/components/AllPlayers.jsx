import { useState, useEffect } from "react";
import { fetchPlayers, fetchSinglePlayer } from "../API/index";
import { useNavigate } from "react-router-dom";

export default function AllPlayers({ singlePlayer, onSetSinglePlayer }) {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

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

  function handleClick(playerId) {
    async function fetchPlayer() {
      try {
        const player = await fetchSinglePlayer(playerId);
        onSetSinglePlayer(player);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlayer();
  }

  function upperCaseName(string) {
    const newName = string.charAt(0).toUpperCase() + string.slice(1);
    return newName;
  }

  return (
    <>
      <h1>All Players</h1>
      {console.log(players)}
      <div id="players-cont">
        {players &&
          players.map((player) => (
            <div key={player.id} className="player">
              <div className="img-cont">
                <img src={player.imageUrl} className="player-img" />
              </div>
              <h3>{upperCaseName(player.name)}</h3>
              <p>{player.status}</p>
              <button
                onClick={() => {
                  navigate(`/players/${player.id}`);
                  handleClick(player.id);
                }}
              >
                Details
              </button>
            </div>
          ))}
      </div>

      {error && <p>{error}</p>}
    </>
  );
}
