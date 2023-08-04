import { useState } from "react";
import { addNewPlayer } from "../API/index.js";

export default function NewPlayerForm() {
  const imageDefault =
    "https://images.unsplash.com/photo-1594149929911-78975a43d4f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";

  const [puppyName, setPuppyName] = useState("");
  const [puppyBreed, setPuppyBreed] = useState("");
  const [playerStatus, setPlayerStatus] = useState("bench");
  const [imageUrl, setImageUrl] = useState(imageDefault);
  const [teamId, setTeamId] = useState(739);

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target[0].value;
    const breed = e.target[1].value;
    const status = e.target[2].value;
    const team = Number(e.target[3].value);
    const imageUrl = e.target[4].value;

    console.log(name, breed, status, team, imageUrl);
    async function newPlayer() {
      try {
        const data = await addNewPlayer(name, breed, status, imageUrl, team);
        return data;
      } catch (error) {
        console.error(error);
      }
    }
    newPlayer();
    setFormDefaults();
  }

  function setFormDefaults() {
    setPuppyName("");
    setPuppyBreed("");
    setPlayerStatus("bench");
    setImageUrl(imageDefault);
    setTeamId(739);
  }

  return (
    <section id="form-cont">
      <h1>Add New Player</h1>
      <form method="POST" onSubmit={handleSubmit} id="form">
        <label>
          Name:{" "}
          <input
            value={puppyName}
            onChange={(e) => setPuppyName(e.target.value)}
            required
          />
        </label>

        <label>
          Breed:{" "}
          <input
            value={puppyBreed}
            onChange={(e) => setPuppyBreed(e.target.value)}
            required
          />
        </label>

        <label>
          Status:{" "}
          <select
            value={playerStatus}
            onChange={(e) => {
              setPlayerStatus(e.target.value);
            }}
          >
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label>

        <label>
          Team:
          <select
            value={teamId}
            onChange={(e) => {
              setTeamId(e.target.value);
            }}
          >
            <option value={740}>Team Fluff</option>
            <option value={739}>Team Ruff</option>
          </select>
        </label>

        <label>
          ImageURL:
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
        </label>

        <button className="button">Submit</button>
      </form>
    </section>
  );
}
