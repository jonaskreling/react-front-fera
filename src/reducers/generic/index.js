import { sagas, reducers } from 'shared'

// Constants
export const constants = {
  GET: sagas('GET'),
  POST: sagas('POST'),
  PUT: sagas('PUT'),
  REMOVE: sagas('REMOVE'),
  SNACK: sagas('SNACK')
}

// Action Creators
export const actions = {
  getRequest: ({ store }) => ({
    type: constants.GET.ACTION,
    store
  }),
  postRequest: ({ store, data }) => ({
    type: constants.POST.ACTION,
    store,
    data
  }),
  putRequest: ({ store, data }) => ({
    type: constants.PUT.ACTION,
    store,
    data
  }),
}

// Reducer
export const initialState = {
  error: null,
  data: {},
  isLoading: true,
  showSnack: false,
  countRequests: 0,
}

const ACTION_HANDLERS = {
  // GET
  [constants.GET.ACTION]: state => {
    return { ...state, isLoading: true, countRequests: state.countRequests + 1 }
  },
  [constants.GET.SUCCESS]: (state, { result, store }) => {
    return {
      ...state,
      data: {
        ...state.data,
        [store]: result
      },
      isLoading: (state.countRequests - 1) > 0,
      countRequests: state.countRequests - 1
    }
  },
  [constants.GET.FAILED]: (state, { error, store }) => {
    return {
      ...state,
      error, 
      isLoading: (state.countRequests - 1) > 0,
      countRequests: state.countRequests - 1
    }
  },

  // SAVE
  [constants.POST.ACTION]: (state, { data, store }) => {
    return { 
      ...state,
      data: {
        ...state.data,
        [store]: data,
      },
    }
  },
  [constants.POST.SUCCESS]: state => {
    return { ...state, isLoading: false, showSnack: true }
  },
  [constants.POST.FAILED]: (state, { error }) => {
    return { ...state, error, isLoading: false, showSnack: true }
  },

  // UPDATE
  [constants.PUT.ACTION]: state => {
    return { ...state, isLoading: true }
  },
  [constants.PUT.SUCCESS]: state => {
    return { ...state, isLoading: false, showSnack: true }
  },
  [constants.PUT.FAILED]: (state, { error }) => {
    return { ...state, error, isLoading: false, showSnack: true }
  },

  // SNACK
  [constants.SNACK.ACTION]: state => {
    return { ...state, showSnack: false }
  }
}

export const createReducerI = reducers(initialState, (state, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : { ...state }
})

export default {
  createReducer: createReducerI,
  constants,
  actions,
  initialState
}
