import {yieldExpression} from '@babel/types'
import {AnyAction} from 'redux'
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import Api from '../../api'
import {callGetCurrentChannel, callSetChannel} from '../../api/calls'
import {
  TV_REQUEST_CONNECT,
  TV_REQUEST_GET_CURRENT_CHANNEL,
  TV_REQUEST_SET_CHANNEL,
} from '../../constants/actions'
import {
  tvRequestGetCurrentChannel,
  tvSetConnectionState,
  tvSetCurrentChannel,
  tvSetParingKey,
} from '../actions/tvStatus'
import {Channel} from '../reducers/types'

function* requestTvConnect(action: AnyAction): any {
  const {tvIp}: {tvIp: string} = action.payload
  yield put(tvSetConnectionState('CONNECTING'))
  console.log('DO CONNECTING...')
  try {
    const res = yield Api().connect(tvIp)
    if (res.data.success && res.data.key) {
      yield put(tvSetConnectionState('CONNECTED'))
      yield put(tvSetParingKey(res.data.key))
    } else {
      console.log(tvIp, res.data)
      yield put(tvSetConnectionState('ERROR_TV'))
      yield put(tvSetParingKey(false))
    }
  } catch (e) {
    console.error(e)
    yield put(tvSetConnectionState('ERROR_SERVER'))
    yield put(tvSetParingKey(false))
  }

  // yield put(tvSetParingKey(res something))
}

function* getCurrentChannel(): any {
  const res: Channel | false = yield callGetCurrentChannel()
  yield put(tvSetCurrentChannel(res))
}

function* setCurrentChannel(action: AnyAction): any {
  const {channelNumber} = action.payload
  console.log('Setting channel', channelNumber)
  yield callSetChannel(channelNumber as number)
  yield put(tvRequestGetCurrentChannel())
}

function* TvStatusSaga() {
  yield takeEvery(TV_REQUEST_GET_CURRENT_CHANNEL, getCurrentChannel)
  yield takeEvery(TV_REQUEST_SET_CHANNEL, setCurrentChannel)
  yield takeEvery(TV_REQUEST_CONNECT, requestTvConnect)
}

export default TvStatusSaga
