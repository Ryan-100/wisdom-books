const initialState = {
  data: [],
  isSearching:false,
  notFound:false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_DATA':
      return {
        ...state,
        data:action.payload,
      };
    case 'IS_SEARCHING':
      return {
        ...state,
        isSearching:action.payload,
      };
    case 'NOT_FOUND':
      return {
        ...state,
        notFound:action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
