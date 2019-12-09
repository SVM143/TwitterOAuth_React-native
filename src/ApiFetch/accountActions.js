import Store from "../config/storage";

 export async function getBookMarks() {
  return dispatch =>
    Store.get("getBookMarks").then(
      keyValue => {
        keyValue ?
        dispatch({
          payload: JSON.parse(keyValue),
          type: 'BOOK_MARKS'
        })
        :
        dispatch({
          payload: [],
          type: 'BOOK_MARKS'
        })
      })
  }

  export async function getLikes() {
    return dispatch =>
      Store.get("getLikes").then(
        keyValue => {
          keyValue ?
          dispatch({
            payload: JSON.parse(keyValue),
            type: 'LIKES'
          })
          :
          dispatch({
            payload: [],
            type: 'LIKES'
          })
      })
  }

  export function getNews(newsType) {
    let url = `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=3840cecdba7b4e62975309c814333bdc`;
    return dispatch =>
      fetch(url, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(responseJson => {
        console.log("reponse.json",responseJson);
      if (responseJson && responseJson.articles) 
          dispatch({
            payload: responseJson.articles,
            type: "NEWS_FEED"
          });
      else 
          dispatch({
            payload: [],
            type: "NEWS_FEED"
          });
      })
  }