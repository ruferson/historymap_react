
export function getMapas (userID) { //Con este servicio obtendremos un solo coctail a partir de su id.

  const apiURL = 'https://historymap-api.000webhostapp.com/api/mapas';
  console.log(apiURL)
  //Usamos la ID pasada por parámetro.

  return fetch(apiURL, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer 4|qPEXqsDDA76ZTci3zNg7EiXwPmvDXqWvVwl5fEvz',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      const data = response.json();
      console.log(data)
      return data;
  })
}