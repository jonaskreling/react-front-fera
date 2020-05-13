import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { generic as genericReducer } from 'reducers'
import { generic } from 'api'

const { constants } = genericReducer

function* getRequestSaga(action) {
  try {
    const response = yield call(generic.get, action)
    yield put({
      type: constants.GET.SUCCESS,
      result: response.data.shared,
      store: action.store
    })
  } catch (error) {
    yield put({
      type: constants.GET.FAILED,
      error: error.message || error
    })
  }
}
function* watchGetRequest() {
  yield takeEvery(constants.GET.ACTION, getRequestSaga)
}

function* postRequestSaga(action) {
  try {
    const response = yield call(generic.post, action)
    yield put({
      type: constants.POST.SUCCESS,
      result: response.data.result
    })
    yield put({
      type: constants.SNACK.ACTION
    })
  } catch (error) {
    console.log(error)
    yield put({
      type: constants.POST.FAILED,
      error: error.message || error
    })
    yield put({
      type: constants.SNACK.ACTION
    })
  }
}
function* watchPostRequest() {
  yield takeEvery(constants.POST.ACTION, postRequestSaga)
}

function* putRequestSaga(action) {
  try {
    const response = yield call(generic.put, action)
    yield put({
      type: constants.PUT.SUCCESS,
      result: response.data.result,
      store: action.store
    })
    yield put({
      type: constants.SNACK.ACTION
    })
  } catch (error) {
    yield put({
      type: constants.PUT.FAILED,
      error: error.message || error
    })
    yield put({
      type: constants.SNACK.ACTION
    })
  }
}
function* watchPutRequest() {
  yield takeEvery(constants.PUT.ACTION, putRequestSaga)
}

// Export the root saga by forking all available sagas.
export function* rootSaga() {
  yield all([fork(watchGetRequest), fork(watchPostRequest), fork(watchPutRequest)])
}
