const cohortName = "2302-ACC-CT-WEB-PT-B";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
const PLAYERS_API_URL = `${APIURL}/players`;

export async function fetchPlayers() {
  try {
    const response = await fetch(PLAYERS_API_URL);
    const data = await response.json();
    return data.data.players;
  } catch (error) {
    console.error("Trouble fetching players: ", error);
  }
}

fetchPlayers();

export async function fetchSinglePlayer(playerId) {
  try {
    const response = await fetch(`${PLAYERS_API_URL}/${playerId}`);
    const data = await response.json();
    console.log(data.data.player);
    return data.data.player;
  } catch (error) {
    console.error(error);
  }
}
// fetchSinglePlayer(10733);
