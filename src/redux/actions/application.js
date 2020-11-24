export function f() {
    return (dispatch) => {
        dispatch({type: "load_application_start"});

        fetch()
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: "load_application_success"
                })
            })
    }
}
