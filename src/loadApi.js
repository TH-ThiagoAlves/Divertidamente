const CLIENT_ID = '1010053455816-rga0m6g4civlte6a56sqdcpe25rp7ie1.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const API_KEY = 'AIzaSyC7yfbRoRh50JMEK32yQK9Hx02nqodktU0'
const emotion = 'happy'
const maxResults = 5


const getApi = async (API_KEY, emotion, maxResults) => {
/*   const obj = {
    method: 'GET',
    header: {
      Authorization: 'Bearer ' + token,
      Accept: 'application/json'
    }
    
  } */

  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}
  &part=snippet&q=${emoticon}&maxResults=${maxResults}`;
  console.log(url)
  const response = await fetch(url, obj)
  console.log(response)
  const data = await response.json();
  console.log(data);
}

window.onload = async () => {
  const load = await getApi(API_KEY, emotion, listNumber);
}