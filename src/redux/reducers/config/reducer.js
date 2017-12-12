import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  start:'login', // login：登录页面 boot_animate：引导动画 default：默认根页面
});

export default function config(state = initialState, action = {}) {
    switch (action.type) {
      case types.CONFIG_LOAD:
        return state;
        break;
      default:
        return state;
    }
}
