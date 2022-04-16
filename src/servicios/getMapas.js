
export function getMapas (userID) { //Con este servicio obtendremos un solo coctail a partir de su id.

  const apiURL = 'https://historymap-api.000webhostapp.com/api/mapas';
  console.log(apiURL)
  //Usamos la ID pasada por parámetro.

  return fetch(apiURL, {
    mode: 'no-cors',
    method: 'GET',
    headers: {
      'Authorization': 'Bearer 2|mgpxgVPCgmIs2HWvkfck8bcYD6fZx3AWQElIWVwx',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      const data = response.json();
      console.log(data)
      return data;
  })
}