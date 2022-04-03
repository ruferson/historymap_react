
export function getMarkers (mapa) { //Con este servicio obtendremos un solo coctail a partir de su id.

  const apiURL = `http://historymap.es/api/records/marcadores/${mapa}`;
  console.log(apiURL)
  //Usamos la ID pasada por parámetro.

  return fetch(apiURL, {
    method: 'GET',
  })
    .then(response => {
      const data = response.json();
      console.log(data)
      return data;
  })
}