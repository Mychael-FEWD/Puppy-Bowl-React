import { useState, useEffect } from "react";
import { fetchPlayers, deletePlayer } from "../API/index";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function PlayersFetch() {
      try {
        const data = await fetchPlayers();
        return setPlayers(data);
      } catch (error) {
        setError(error);
      }
    }
    PlayersFetch();
  }, [handleDelete]);

  function handleClick(playerId) {
    navigate(`/players/${playerId}`);
  }

  async function handleDelete(playerId) {
    await deletePlayer(playerId);
  }

  function upperCaseName(string) {
    const newName = string.charAt(0).toUpperCase() + string.slice(1);
    return newName;
  }

  return (
    <section>
      {error && <p>{error}</p>}
      <div id="players-cont">
        {players &&
          players.map((player) => (
            <div key={player.id} className="player">
              <div className="img-cont">
                <img src={player.imageUrl} className="player-img" />
              </div>
              <div className="content-cont">
                <div className="flex player-name-status">
                  <h3>{upperCaseName(player.name)}</h3>
                  <p>{upperCaseName(player.status)}</p>
                </div>
                <div className="flex player-buttons">
                  <button
                    className="details-button"
                    onClick={() => {
                      handleClick(player.id);
                    }}
                  >
                    Details
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => {
                      handleDelete(player.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
