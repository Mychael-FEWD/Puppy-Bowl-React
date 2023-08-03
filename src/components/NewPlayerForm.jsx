import { useState } from "react";

export default function NewPlayerForm() {
  const [puppyName, setPuppyName] = useState("");
  const [puppyBreed, setPuppyBreed] = useState("");
  const [playerStatus, setPlayerStatus] = useState("bench");
  const [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1594149929911-78975a43d4f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  );
  const [teamId, setTeamId] = useState(739);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1>New Player Form</h1>
      <form method="POST" onSubmit={handleSubmit}>
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
    </div>
  );
}
