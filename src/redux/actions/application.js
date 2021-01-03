// открытие/закрытие профиля

export function profileToggle() {
  return (dispatch) => {
    dispatch({ type: "load_application_success" });
  };
}

// Поиск контакта

export function loadSearchContact(inputValue) {
  return { type: "search_contact", payload: inputValue };
}

/**
 * Открытие и закрытие поисковика сообщений
 * @returns {{type: string}}
 */
export function searchOpened() {
  return { type: "search_show_hide_toggle" };
}

/**
 * Поиск сообщений
 */
export function searchMessages(inputValue) {
  return { type: "messages_searchRequest_start", payload: inputValue };
}
