const initialState = {
  openProfile: false,
  searchValue: "",
  searchContactValue: "",
  searchOpen: false,
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case "load_application_success":
      return {
        ...state,
        openProfile: !state.openProfile,
      };

    case "search_contact":
      return {
        ...state,
        searchContactValue: action.payload,
      };

    case "search_show_hide_toggle":
      return {
        ...state,
        searchOpen: !state.searchOpen,
      };
    case "messages_searchRequest_start":
      return {
        ...state,
        searchValue: action.payload,
      };

    default:
      return state;
  }
}
