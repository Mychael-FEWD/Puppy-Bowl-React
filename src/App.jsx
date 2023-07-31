// import { useState } from "react";
import NavBar from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NewPlayerForm from "./components/NewPlayerForm";
import "./App.css";

export default function App() {
  return (
    <>
      <NavBar />
      <AllPlayers />
      <SinglePlayer />
      <NewPlayerForm />
    </>
  );
}
