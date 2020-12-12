const initialState = {
  loading: true,
  opened: null,
  chats: [],
};

export default function chat(state = initialState, action) {
  switch (action.type) {
    case "load_chat_start":
      return {
        ...state,
        loading: true,
        opened: action.payload,
      };

    case "load_chat_success":
      return {
        ...state,
        loading: false,
        chats: action.payload,
      };

    default:
      return state;
  }
}
