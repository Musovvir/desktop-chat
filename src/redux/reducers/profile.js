const initialState = {
  loading: true,
  myId: "",
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case "load_profile_start":
      return {
        ...state,
        loading: true,
      };

    case "load_profile_success":
      return {
        ...state,
        loading: false,
        myId: action.payload._id,
      };

    default:
      return state;
  }
}
