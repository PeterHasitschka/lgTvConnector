import {DefaultRootState} from 'react-redux'
import {AnyAction} from 'redux'
import {
  TV_SET_CONNECTIONSTATE,
  TV_SET_CURRENT_CHANNEL,
  TV_SET_PAIRINGKEY,
} from '../../constants/actions'
import {TvStatusState} from './types'

const initialState: TvStatusState = {
  connectionState: false,
  pairingKey: false,
  currentChannel: false,
}

const TvStatusReducer = (
  state = initialState,
  action: AnyAction,
): TvStatusState => {
  switch (action.type) {
    case TV_SET_CONNECTIONSTATE:
      return {
        ...state,
        connectionState: action.payload.state,
      }
    case TV_SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload,
      }
    case TV_SET_PAIRINGKEY:
      return {
        ...state,
        pairingKey: action.payload.key,
      }

    default:
      return state
  }
}
export default TvStatusReducer

export const tvStatusSelector = (s: DefaultRootState) =>
  (s as any).tvStatus as TvStatusState
