import {AnyAction} from 'redux'
import {DO_SOMETHING_WEIRD} from '../../constants/actions'

const initialState = {
  count: 0,
}

const WeirdReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case DO_SOMETHING_WEIRD:
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state
  }
}
export default WeirdReducer
