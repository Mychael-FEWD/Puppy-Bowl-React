import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePlayer } from "../API/index.js";

export default function SinglePlayer() {
  const [singlePlayer, setSinglePlayer] = useState([]);
  const [error, setError] = useState(null);

  const params = useParams();
  console.log(`params: `, params, params.id);

  useEffect(() => {
    async function fetchPlayer() {
      try {
        const player = await fetchSinglePlayer(Number(params.id));
        console.log(player);
        return setSinglePlayer(player);
      } catch (error) {
        setError(error);
      }
    }
    fetchPlayer();
  }, [params.id]);

  return (
    <>
      {error && <p>{error}</p>}
      {singlePlayer === [] ? <p>Error loading data</p> : ""}
      {singlePlayer && (
        <section id="single-player">
          <div className="single-player-img-cont">
            <img className="single-player-img" src={singlePlayer.imageUrl} />
          </div>
          <div className="single-player-data">
            <h1>{singlePlayer.name}</h1>
            <h2>{singlePlayer.breed}</h2>
            <h2>Currently on-{singlePlayer.status}</h2>
            <h2>Team: {singlePlayer.team && singlePlayer.team.name}</h2>
          </div>
        </section>
      )}
    </>
  );
}
