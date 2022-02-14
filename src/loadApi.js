/* const CLIENT_ID = '1010053455816-rga0m6g4civlte6a56sqdcpe25rp7ie1.apps.googleusercontent.com'
const CLIENT_SECRET = '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' */
const API_KEY = 'AIzaSyC7yfbRoRh50JMEK32yQK9Hx02nqodktU0'


const getApi = async (API_KEY, emotion) => {
  try{
    const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=4&q=${emotion}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.items);
    return data.items;
  }
  catch(error) {
    console.log(error)
  }
}



