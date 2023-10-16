export const addToFavorites = (book) => {
  return (dispatch) => {
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: book,
    });
  };
};

export const removeFromFavorites = (book) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_FROM_FAVORITES",
      payload: book,
    });
  };
};
