import { useState, useEffect } from "react";
import fetchPlayers from "../API/index";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function PlayersFetch() {
      try {
        const data = await setPlayers(fetchPlayers);
        setPlayers(data);
      } catch (error) {
        setError(error);
      }
    }
    PlayersFetch();
  }, []);

  return (
    <>
      <h1>{players}</h1>
      {error && <p>{error}</p>}
    </>
  );
}
