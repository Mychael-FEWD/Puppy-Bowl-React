const cohortName = "2302-ACC-CT-WEB-PT-B";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
const PLAYERS_API_URL = `${APIURL}/players`;

export default async function fetchPlayers() {
  try {
    const response = await fetch(PLAYERS_API_URL);
    const data = await response.json();
    return data.data.players;
  } catch (error) {
    console.error("Trouble fetching players: ", error);
  }
}

fetchPlayers();
