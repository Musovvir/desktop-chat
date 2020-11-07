const initialState = {
  loading: true,
  items: [],
  contactSearch: "",
};

export default function contacts(state = initialState, action) {
    switch (action.type) {
        case "load_contacts_start":
            return {
                ...state,
                loading: true
            };

        case "load_contacts_success":
            return {
                ...state,
                items: action.payload
            }

        default:
            return state;
    }
}
