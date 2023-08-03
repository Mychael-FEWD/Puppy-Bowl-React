import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import "./App.css";

export default function App() {
  const [singlePlayer, setSinglePlayer] = useState([]);
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <AllPlayers
              singlePlayer={singlePlayer}
              onSetSinglePlayer={setSinglePlayer}
            />
          }
        />
        <Route
          path={`/players/:id`}
          element={<SinglePlayer singlePlayer={singlePlayer} />}
        />
      </Routes>
      <NewPlayerForm />
    </>
  );
}
