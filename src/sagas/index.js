import { all, fork } from 'redux-saga/effects'
import { rootSaga as genericSaga } from './genericSaga'

function* rootSaga() {
  const sagas = [
    genericSaga,
  ].map(fork)
  yield all(sagas)
}

export default rootSaga
