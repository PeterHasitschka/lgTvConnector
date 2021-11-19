import {AnyAction} from 'redux'
import {
  TV_REQUEST_CONNECT,
  TV_REQUEST_GET_CURRENT_CHANNEL,
  TV_REQUEST_SET_CHANNEL,
  TV_SET_CONNECTIONSTATE,
  TV_SET_CURRENT_CHANNEL,
  TV_SET_PAIRINGKEY,
} from '../../constants/actions'
import {Channel, ConnectionState} from '../reducers/types'

export const tvRequestConnect = (tvIp: string): AnyAction => ({
  type: TV_REQUEST_CONNECT,
  payload: {tvIp},
})

export const tvSetConnectionState = (state: ConnectionState): AnyAction => ({
  type: TV_SET_CONNECTIONSTATE,
  payload: {state},
})
export const tvSetParingKey = (key: string | false): AnyAction => ({
  type: TV_SET_PAIRINGKEY,
  payload: {key},
})

export const tvSetCurrentChannel = (channel: Channel | false): AnyAction => ({
  type: TV_SET_CURRENT_CHANNEL,
  payload: channel,
})

export const tvRequestGetCurrentChannel = (): AnyAction => ({
  type: TV_REQUEST_GET_CURRENT_CHANNEL,
  payload: {},
})

export const tvRequestSetChannel = (channelNumber: number): AnyAction => ({
  type: TV_REQUEST_SET_CHANNEL,
  payload: {channelNumber},
})
