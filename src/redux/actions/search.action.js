export const setSearchData = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_SEARCH_DATA',
      payload: data,
    });
  };
};

export const setIsSearching = data =>{
  return dispatch =>{
    dispatch({
      type: 'IS_SEARCHING',
      payload: data,
    });
  }
}

export const setNotFound = data =>{
  return dispatch =>{
    dispatch({
      type: 'NOT_FOUND',
      payload: data,
    });
  }
}