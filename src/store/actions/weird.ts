import {AnyAction} from 'redux';
import {DO_SOMETHING_WEIRD} from '../../constants/actions';

export const doSomethingWeird = (): AnyAction => ({
  type: DO_SOMETHING_WEIRD,
  payload: {},
});
