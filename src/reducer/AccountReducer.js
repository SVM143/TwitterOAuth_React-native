let account = {
  timeLineFeed: "",
};
const accountReducer = (state = account, action) => {
    console.log("actinons",action)
  switch (action.type) {
    // case "SCROLL_ENABLE":
    //   state = {
    //     ...state,
    //     scrollEnable:action.payload
    //   };
    case "NEWS_FEED":
      state = {
        ...state,
        timeLineFeed:action.payload
      };
    // case "PROFILE_SUMMARY":
    //   state = {
    //     ...state,
    //     profileSummary:action.payload
    //   };
    //   case "SNOOP_LIST":
    //   state = {
    //     ...state,
    //     snoopList:action.payload
    //   };
    default:
  }
  return state;
};

export default accountReducer;
