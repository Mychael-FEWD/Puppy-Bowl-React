export default function SinglePlayer({ singlePlayer }) {
  function upperCaseName(string) {
    const newName = string.charAt(0).toUpperCase() + string.slice(1);
    return newName;
  }

  return (
    <section id="single-player">
      <div className="single-player-img-cont">
        <img className="single-player-img" src={singlePlayer.imageUrl} />
      </div>
      <div className="single-player-data">
        <h1>{upperCaseName(singlePlayer.name)}</h1>
        <h2>Currently on-{singlePlayer.status}</h2>
        <h2>Team: {singlePlayer.team && singlePlayer.team.name}</h2>
      </div>
    </section>
  );
}
