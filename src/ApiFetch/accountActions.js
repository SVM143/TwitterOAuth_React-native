import Store from "../config/storage";
let likeData = [], bookMarks = [] , all = [];

// Get All the key pair values
export async function getAllData() {
  // MultiGet option is there
  likeData = [], bookMarks = [] , all = [];
  try{
  await Store.get("getBookMarks").then(
    keyValue => {
      keyValue ?likeData.concat(JSON.parse(keyValue)):null
    }).then(
    Store.get("likeData").then(
      keyValue => {
       keyValue ?bookMarks.concat(JSON.parse(keyValue)):null
    })).then(
        Store.get("profileData").then(
      keyValue => {keyValue ?all.concat(JSON.parse(keyValue)):null
     }))
   }
   catch(err){
    console.log(errr)
   }
}

// Get bookMarks
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

// Set Book Marks
  export async function setBookMarks(data) {
    bookMarks = bookMarks.concat(data)
    return dispatch =>
     Store.set("getBookMarks", JSON.stringify(bookMarks)).then(
      dispatch({
          payload: bookMarks,
          type: 'BOOK_MARKS'
        })
     )
    }


// Get Likes
  export async function getLikes() {
    return dispatch =>
      Store.get("likeData").then(
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

// Set Likes
  export async function setLikes(data){
    likeData = likeData.concat(data)
    return dispatch =>
     Store.set("likeData", JSON.stringify(likeData)).then(
      dispatch({
          payload: likeData,
          type: 'LIKES'
        })
     )
  }

  // Set Profile
  export async function setProfile(data){
    all = all.concat(data)
    return dispatch =>
     Store.set("profileData", JSON.stringify(all)).then(
      dispatch({
          payload: all,
          type: 'PROFILE_DATA'
        })
     )
  }

  export async function getProfile() {
    return dispatch =>
      Store.get("profileData").then(
        keyValue => {
          keyValue ?
          dispatch({
            payload: JSON.parse(keyValue),
            type: 'PROFILE_DATA'
          })
          :
          dispatch({
            payload: [],
            type: 'PROFILE_DATA'
          })
      })
  }

  //Get New From Api
  export function getNews(newsType) {
    let url = `https://newsapi.org/v2/everything?q=${ newsType || 'bitcoin'}&sortBy=publishedAt&apiKey=3840cecdba7b4e62975309c814333bdc`;
    return dispatch =>
      fetch(url, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(response => response.json())
      .then(responseJson => {
      if (responseJson && responseJson.articles) 
          dispatch({
            payload: responseJson.articles,
            type: newsType?"HASHTAG_FEED":"NEWS_FEED"
          });
      else 
          dispatch({
            payload: [],
            type: newsType?"HASHTAG_FEED":"NEWS_FEED"
          });
      })
  }
 
  //Calculate the number of likes and BookMarks
  export function getNumberOfLikesAndBookMarks(){
    
  }
