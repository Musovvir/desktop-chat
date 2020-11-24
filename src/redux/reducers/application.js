const initialState = {
    loading: true,
}

export default function application(state = initialState, action) {
    switch (action.type) {
        case "load_application_start":
            return {
                ...state,
                loading: true
            }

        case "load_application_success":
            return {
                ...state,
                loading: false
            }

        default:
            return state;
    }
}
