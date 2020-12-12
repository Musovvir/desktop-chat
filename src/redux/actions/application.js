// открытие/закрытие профиля

export function profileToggle() {
  return (dispatch) => {
    dispatch({ type: "load_application_success" });
  };
}

// Поиск контакта

export function loadSearchContact(inputValue) {
  return (dispatch) => {
    dispatch({ type: "load_search_contact", payload: inputValue });
  };
}
