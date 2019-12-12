let account = {
  timeLineFeed: "",
  likedData:"",
  bookMarkData:"",
  profileData:"",
  hashTagFeed:""
};
const accountReducer = (state = account, action) => {
  switch (action.type) {
    case "NEWS_FEED":
      state = {
        ...state,
        timeLineFeed:action.payload
      };
      break;
    case "LIKES":
      state = {
        ...state,
        likedData:action.payload
      }
      break;
    case "BOOK_MARKS":
      state = {
        ...state,
        bookMarkData:action.payload
      }
      break;
    case "PROFILE_DATA":
      state ={
        ...state,
        profileData:action.payload
      }
      break;
    case "HASHTAG_FEED":
      state = {
        ...state,
        hashTagFeed:action.payload
      }
      break;
    default:
  }
  return state;
};

export default accountReducer;
