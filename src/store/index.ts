import {createStore, combineReducers, applyMiddleware} from 'redux'
import TvStatusReducer from './reducers/tvStatus'
import weirdReducer from './reducers/weird'

import createSagaMiddleware from 'redux-saga'
import TvStatusSaga from './sagas/tvStatus'

const sagaMiddleware = createSagaMiddleware()

export const rootReducer = combineReducers({
  weird: weirdReducer,
  tvStatus: TvStatusReducer,
})
const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(TvStatusSaga)

  return store
}

export default configureStore
