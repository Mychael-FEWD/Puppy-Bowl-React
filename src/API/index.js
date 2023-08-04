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
    return data.data.player;
  } catch (error) {
    console.error(error);
  }
}

export async function addNewPlayer(name, breed, status, imageUrl, teamId) {
  try {
    const response = await fetch(PLAYERS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `${name}`,
        breed: `${breed}`,
        status: `${status}`,
        imageUrl: `${imageUrl}`,
        teamId: `${teamId}`,
      }),
    });
    console.log("Status is: ", response.status);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

export async function deletePlayer(playerId) {
  try {
    const response = await fetch(`${PLAYERS_API_URL}/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
