
const createReducer = (initialState, reducer) => (state = initialState, action) =>
  reducer(state, action) || state

export default createReducer
