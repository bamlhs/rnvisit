const initialState = {
    data: [],
    loading: false,
    item: {}
}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'GET_PLACES':
    return { ...state, data: action.payload };
    case 'SELECT_PLACE': 
    return { ...state, item: action.payload }
  default:
    return state
  }
};
