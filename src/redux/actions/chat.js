export function loadChat(myId, contactId) {
  return (dispatch) => {
    dispatch({ type: "load_chat_start", payload: contactId });

    fetch(`https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/5f31422e9418570bc43fcbb4`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "load_chat_success",
          payload: json,
        });
      });
  };
}
