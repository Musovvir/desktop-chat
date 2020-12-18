const initialState = {
  openProfile: false,
  searchValue: "",
  searchContactValue: ""
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
      }

    default:
      return state;
  }
}
