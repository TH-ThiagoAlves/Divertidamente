const CLIENT_ID = '1010053455816-rga0m6g4civlte6a56sqdcpe25rp7ie1.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const API_KEY = 'AIzaSyC7yfbRoRh50JMEK32yQK9Hx02nqodktU0'
const emotion = 'happy'

console.log('oi')

const getApi = async (API_KEY, emotion, 5) => {
/*   const obj = {
    method: 'GET',
    header: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json'
    }
    
  } */

  const url = "https://www.googleapis.com/youtube/v3/search?key=" + API_KEY + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + emotion,
  const response = await fetch(url)
  const data = await response.json();
  console.log(data);
}

window.onload = () => {
  await getApi();
}