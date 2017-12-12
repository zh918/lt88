import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  root: '' // 'login' / 'after-login'
});

export default function login(state = initialState, action = {}) { 
  switch (action.type) {
    case types.LOGIN:
          console.log('登录触发');
          return state.merge({
            root:'login'
          });
      break;
    case types.LOGIN_OUT:
          console.log('登出');
          return state.merge({
            root:'login-out'
          });
      break;
    default:
      return state;
  }
}
